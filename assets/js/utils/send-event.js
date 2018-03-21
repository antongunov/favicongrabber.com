const warning = require('./warning');

/**
 * Send an event to Google Analytics.
 * @param category
 * @param action
 * @param [label]
 * @param [value]
 */
module.exports = (category, action, label, value) => {
  if (!window.ga) {
    warning('Google Analytics module not found.');
    return;
  }

  window.ga('send', 'event', category, action, label, value);
};
