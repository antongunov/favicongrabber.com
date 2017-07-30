require('url-polyfill');

module.exports = formDomain;

function formDomain(Controller) {
  const ctrl = new Controller();

  ctrl.extractDomain = function () {
    const inputDomain = ctrl.formDomain.querySelector('input[type="text"]');
    const value = inputDomain.value;

    if (!value) return ctrl.$emit('error', 'No domain provided.');

    let domain = null;
    let url = null;

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

    inputDomain.value = domain;
    return domain;
  };

  ctrl.tryItGrab = function () {
    ctrl.$emit('begin-grabbing');

    const domain = ctrl.extractDomain();
    console.log(domain);

    // prevent form submission
    return false;
  };

  ctrl.$load(function () {
    ctrl.formDomain = document.querySelector('#form-domain');
    ctrl.formDomain.onsubmit = ctrl.$proxy(ctrl.tryItGrab);
  });
}
