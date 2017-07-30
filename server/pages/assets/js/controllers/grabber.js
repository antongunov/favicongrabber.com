const extractDomain = require('./modules/extract-domain');
const request = require('./modules/request');

module.exports = (Controller) => {
  const ctrl = new Controller();

  ctrl.onTryItGrab = function () {
    const inputDomain = ctrl.formDomainCmp.querySelector('input[type="text"]');
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

    ctrl.$emit('grabber:begin-grabbing');

    request(`http://favicongrabber.com/api/grab/${domain}`, function (err, status, res) {
      if (err) {
        console.error(err);
        ctrl.$emit('error', 'General UI error.');
        return false;
      }

      switch (status) {
        case 200:
          ctrl.$emit('grabber:end-grabbing', res.icons);
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

  ctrl.$load(() => {
    ctrl.formDomainCmp = document.querySelector('#form-domain');

    ctrl.formDomainCmp.onsubmit = ctrl.$proxy(ctrl.onTryItGrab);
  });
};
