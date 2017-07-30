const betterIcon = require('./modules/better-icon');

module.exports = (Controller) => {
  const ctrl = new Controller();

  ctrl.onEndGrabbing = (icons) => {
    if (!(icons.length > 0)) return ctrl.faviconCmp.update('Not found favicons.');

    const icon = betterIcon(icons);
    const img = new Image();

    img.onload = function () {
      ctrl.faviconCmp.update(this, icon);
      ctrl.$emit('favicon:begin-downloading', icon);
    };

    img.onerror = () => ctrl.$emit('error', 'Failed to load a favicon image.');

    ctrl.$emit('favicon:end-downloading', icon);
    img.src = icon.src;
  };

  ctrl.initFaviconCmp = () => {
    return {
      image: document.querySelector('#favicon .favicon__image'),
        type: document.querySelector('#favicon .favicon__type'),
      sizes: document.querySelector('#favicon .favicon__sizes'),

      clear: function () {
        this.image.innerHTML = '';
        this.type.textContent = '';
        this.sizes.textContent = '';
      },

      update: function (image, icon) {
        this.clear();

        if (typeof image === 'string' || image instanceof String) {
          this.image.innerHTML = image;
        } else {
          this.image.appendChild(image);
          // this.type.textContent = icon.type;
          // this.sizes.textContent = icon.sizes;
        }
      },
    };
  };

  ctrl.$load(() => {
    ctrl.faviconCmp = ctrl.initFaviconCmp();

    ctrl.faviconCmp.update('Enter a domain name.');

    ctrl.$on('grabber:begin-grabbing', () => ctrl.faviconCmp.update('Grabbing, please wait...'));
    ctrl.$on('grabber:end-grabbing', ctrl.$proxy(ctrl.onEndGrabbing));
  });
};
