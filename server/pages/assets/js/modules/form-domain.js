const request = require('./request');
require('url-polyfill');

module.exports = formDomain;

function formDomain(Controller) {
  const ctrl = new Controller();

  ctrl.extractDomain = function (value) {
    let domain = null;
    let url = null;

    if (/[:@/]/.test(value)) {
      try {
        url = new URL(value);
        domain = url.hostname;
      } catch (err) {

      }
    } else {
      domain = value;
    }

    return domain;
  };

  ctrl.tryItGrab = function () {
    const inputDomain = ctrl.formDomain.querySelector('input[type="text"]');
    const value = inputDomain.value;

    if (!value) {
      ctrl.$emit('error', 'No domain provided.');
      return false;
    }

    const domain = ctrl.extractDomain(value);

    if (!domain) {
      ctrl.$emit('error', 'This domain is invalid.');
      return false;
    }

    inputDomain.value = domain;

    ctrl.$emit('begin-grabbing');

    request(`http://favicongrabber.com/api/grab/${domain}`, function (err, status, res) {
      if (err) {
        console.error(err);
        ctrl.$emit('error', 'General UI error.');
        return false;
      }

      switch (status) {
        case 200:
          ctrl.$emit('end-grabbing', res);
          break;
        case 500:
          ctrl.$emit('error', res.error);
          break;
        default:
          console.error(`An unrecognized HTTP status ${status} was received.`);
          ctrl.$emit('error', 'General UI error.');
      }
    });

    // prevent form submission
    return false;
  };

  ctrl.$load(function () {
    ctrl.formDomain = document.querySelector('#form-domain');
    ctrl.formDomain.onsubmit = ctrl.$proxy(ctrl.tryItGrab);
  });
}
