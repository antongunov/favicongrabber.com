const warning = require('../utils/warning');

const nameCtrl = 'ga';

module.exports = (Controller) => {
  const ctrl = new Controller(nameCtrl);

  ctrl.$load(({ live }) => {
    if (!window.ga) {
      if (!live) {
        warning('Google Analytics module not found.');
      }
      return;
    }

    const button = document.querySelector('.download-button');

    if (button) {
      button.addEventListener('click', () => {
        window.ga('send', 'event', 'favicons', 'download', button.href);
      });
    }
  });
};
