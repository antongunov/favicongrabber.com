const extractDomain = require('./modules/extract-domain');
const request = require('./modules/request');
const error = require('../utils/error');

const nameCtrl = 'domain-form';

module.exports = (Controller) => {
  const ctrl = new Controller(nameCtrl);

  ctrl.onTryItGrab = function () {
    const inputDomain = ctrl.domainFormCmp.querySelector('input[type="text"]');
    const value = inputDomain.value;

    if (!value) {
      ctrl.$emit('error', 'No domain provided.');
      return false;
    }

    const domain = extractDomain(value);

    if (!domain) {
      ctrl.$emit('error', 'This domain is invalid.');
      return false;
    }

    inputDomain.value = domain;

    ctrl.$emit('begin-grabbing');

    request(`/api/grab/${domain}`, (err, status, res) => {
      if (err) {
        error(err);
        ctrl.$emit('error', 'General UI error.');
        return false;
      }

      switch (status) {
        case 200:
          ctrl.$emit('end-grabbing', res.icons);
          break;
        case 400:
        case 422:
        case 500:
          ctrl.$emit('error', res.error);
          break;
        default:
          error(`An unrecognized HTTP status ${status} was received.`);
          ctrl.$emit('error', 'General UI error.');
      }
    });

    // prevent form submission
    return false;
  };

  ctrl.$load(() => {
    ctrl.domainFormCmp = document.querySelector(`#${nameCtrl}`);

    ctrl.domainFormCmp.onsubmit = ctrl.$proxy(ctrl.onTryItGrab);
  });
};
