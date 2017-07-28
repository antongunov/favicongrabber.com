require('url-polyfill');

module.exports = domainForm;

function domainForm (Controller) {
  const ctrl = new Controller();

  ctrl.domain = function () {
    const domainInput = ctrl.domainForm.querySelector('input[type="text"]');
    const value = domainInput.value;

    if (!value) return ctrl.$emit('error', 'No domain provided.');

    let domain = null;
    let url = null;

    // TODO: how to improve parsing domain?
    if (/[:@/]/.test(value)) {
      try {
        url = new URL(value);
        if (!url.hostname) return ctrl.$emit('error', 'This domain is invalid.');
        domain = url.hostname;
      } catch (err) {
        return ctrl.$emit('error', 'This domain is invalid.');
      }
    } else {
      domain = value;
    }

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

    ctrl.$on('error', msg => console.error(msg));
  });
}
