module.exports = messageError;

function messageError(Controller) {
  const ctrl = new Controller();

  ctrl.$on('begin-grabbing', () => ctrl.messageError.textContent = '');
  ctrl.$on('error', msg => ctrl.messageError.textContent = msg);

  ctrl.$load(() => {
    ctrl.messageError = document.querySelector('#message-error');
  });
}
