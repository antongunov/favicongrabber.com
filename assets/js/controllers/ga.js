const nameCtrl = 'ga';

module.exports = (Controller) => {
  const ctrl = new Controller(nameCtrl);

  ctrl.$load(() => {
    if (!window.ga) return;

    const button = document.querySelector('.download-button');

    if (button) {
      button.addEventListener('click', () => {
        window.ga('send', 'event', 'favicons', 'download', button.href);
      });
    }
  });
}
