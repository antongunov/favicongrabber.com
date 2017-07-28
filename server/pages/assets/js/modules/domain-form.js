function domainForm (Controller) {
  const ctrl = new Controller();

  ctrl.tryItGrab = function () {
    console.log('Hi!');
    // prevent form submission
    return false;
  };

  ctrl.$load(function () {
    ctrl.domainForm = document.querySelector('#domain-form');
    ctrl.domainForm.onsubmit = ctrl.$proxy(ctrl.tryItGrab);
  });
}

module.exports = domainForm;
