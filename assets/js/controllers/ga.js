const nameCtrl = 'ga';

module.exports = (Controller) => {
  const ctrl = new Controller(nameCtrl);

  ctrl.$load(({ live }) => {
    if (!live && !window.ga) {
      /* eslint-disable no-console */
      console.warn('Google Analytics module not found.');
      /* eslint-enable no-console */
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
