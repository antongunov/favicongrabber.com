module.exports = (Controller) => {
  const ctrl = new Controller();

  ctrl.$load(() => {
    ctrl.messageErrorCmp = document.querySelector('#message-error');

    ctrl.$on('grabber:begin-grabbing', () => ctrl.messageErrorCmp.textContent = '');
    ctrl.$on('error', msg => ctrl.messageErrorCmp.textContent = msg);
  });
};
