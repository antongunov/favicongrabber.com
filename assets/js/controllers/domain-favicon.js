const betterIcon = require('./modules/better-icon');

const nameCtrl = 'domain-favicon';
const has = Object.prototype.hasOwnProperty;

module.exports = (Controller) => {
  const ctrl = new Controller(nameCtrl);

  ctrl.onEndGrabbing = (icons) => {
    if (!(icons.length > 0)) {
      return ctrl.$emit('error', 'Sorry, not found favicons :-(');
    }

    const icon = betterIcon(icons);
    const img = new Image();

    img.onload = function () {
      if (this.height === 1 && this.width === 1) {
        return ctrl.$emit('error', 'Sorry, only found a favicon with size equals to 1x1 pixels :-(');
      }

      ctrl.domainFaviconCmp.imageContainer.image.innerHTML = '';
      ctrl.domainFaviconCmp.imageContainer.image.appendChild(this);

      ctrl.$emit('end-downloading', icon);
    };

    img.onerror = () => ctrl.$emit('error', 'Failed to load a favicon image.');

    ctrl.$emit('begin-downloading', icon);
    img.src = icon.src;
  };

  ctrl.onError = (msg) => {
    ctrl.domainFaviconCmp.errorMessage.textContent = msg;
    ctrl.domainFaviconCmp.active('errorMessage');
  };

  ctrl.$load(() => {
    const cmp = document.querySelector(`#${nameCtrl}`);

    ctrl.domainFaviconCmp = {
      errorMessage: cmp.querySelector(`.${nameCtrl}__error-message`),
      spinner: cmp.querySelector(`.${nameCtrl}__spinner`),
      imageContainer: cmp.querySelector(`.${nameCtrl}__image-container`),

      active(name) {
        Object.keys(this).forEach((key) => {
          if (has.call(this, key) && this[key].style) {
            this[key].style.display = 'none';
          }
        });
        this[name].style.display = 'inline-block';
      },
    };

    ctrl.domainFaviconCmp.imageContainer.image = ctrl.domainFaviconCmp.imageContainer.querySelector(`.${nameCtrl}__image`);
    ctrl.domainFaviconCmp.imageContainer.downloadButton = ctrl.domainFaviconCmp.imageContainer.querySelector(`.${nameCtrl}__download-button .download-button`);

    ctrl.$on('domain-form:error', ctrl.$proxy(ctrl.onError));
    ctrl.$on('domain-form:begin-grabbing', () => ctrl.domainFaviconCmp.active('spinner'));
    ctrl.$on('domain-form:end-grabbing', ctrl.$proxy(ctrl.onEndGrabbing));

    ctrl.$on(`${nameCtrl}:error`, ctrl.$proxy(ctrl.onError));
    ctrl.$on(`${nameCtrl}:end-downloading`, (icon) => {
      ctrl.domainFaviconCmp.imageContainer.downloadButton.href = `/download/${icon.src}`;
      ctrl.domainFaviconCmp.active('imageContainer');
    });
  });
};
