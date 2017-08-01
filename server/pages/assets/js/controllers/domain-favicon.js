const betterIcon = require('./modules/better-icon');

const nameCtrl = 'domain-favicon';
const has = Object.prototype.hasOwnProperty;

module.exports = (Controller) => {
  const ctrl = new Controller(nameCtrl);

  ctrl.onEndGrabbing = (icons) => {
    if (!(icons.length > 0)) return ctrl.$emit('error', 'Not found favicons.');

    const icon = betterIcon(icons);
    const img = new Image();

    img.onload = function () {
      ctrl.domainFaviconCmp.image.innerHTML = '';
      ctrl.domainFaviconCmp.image.appendChild(this);

      ctrl.$emit('end-downloading', icon);
    };

    img.onerror = () => ctrl.$emit('error', 'Failed to load a favicon image.');

    ctrl.$emit('begin-downloading', icon);
    img.src = icon.src;
  };

  ctrl.onError = (msg) => {
    ctrl.domainFaviconCmp.active('errorMessage');
    ctrl.domainFaviconCmp.errorMessage.textContent = msg;
  };

  ctrl.$load(() => {
    const cmp = document.querySelector(`#${nameCtrl}`);

    ctrl.domainFaviconCmp = {
      errorMessage: cmp.querySelector(`.${nameCtrl}__error-message`),
      spinner: cmp.querySelector(`.${nameCtrl}__spinner`),
      image: cmp.querySelector(`.${nameCtrl}__image`),

      active(name) {
        Object.keys(this).forEach((key) => {
          if (has.call(this, key) && this[key].style) {
            this[key].style['display'] = 'none';
          }
        });
        this[name].style['display'] = 'block';
      }
    };

    ctrl.$on('domain-form:error', ctrl.$proxy(ctrl.onError));
    ctrl.$on('domain-form:begin-grabbing', () => ctrl.domainFaviconCmp.active('spinner'));
    ctrl.$on('domain-form:end-grabbing', ctrl.$proxy(ctrl.onEndGrabbing));

    ctrl.$on(`${nameCtrl}:error`, ctrl.$proxy(ctrl.onError));
    ctrl.$on(`${nameCtrl}:end-downloading`, () => ctrl.domainFaviconCmp.active('image'));
  });
};
