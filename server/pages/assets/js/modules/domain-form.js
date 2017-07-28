require('url-polyfill');

module.exports = domainForm;

function domainForm (Controller) {
  const ctrl = new Controller();

  ctrl.domain = function () {
    const domainInput = ctrl.domainForm.querySelector('input[type="text"]');
    const value = domainInput.value;

    if (!value || !(typeof value === 'string' || value instanceof String)) {
       return null;
    }

    const url = new URL(value);

    if (!url.hostname) {
      return null;
    }

    const domain = url.hostname;
    domainInput.value = domain;
    return domain;
  };

  ctrl.tryItGrab = function () {
    const domain = ctrl.domain();
    console.log(domain);

    // prevent form submission
    return false;
  };

  ctrl.$load(function () {
    ctrl.domainForm = document.querySelector('#domain-form');
    ctrl.domainForm.onsubmit = ctrl.$proxy(ctrl.tryItGrab);
  });
}
