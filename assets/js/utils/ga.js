const warning = require('./warning');

/**
 * Send an event to Google Analytics.
 *
 * @param {string} category
 * @param {string} action
 * @param {string} [label]
 * @param {number} [value] Value must be non-negative.
 * @returns {void}
 */
function event(category, action, label, value) {
  if (category == null) {
    throw new Error('The category parameter is required.');
  }

  if (action == null) {
    throw new Error('The action parameter is required.');
  }

  if (!window.ga) {
    warning('Google Analytics module not found.');
    return;
  }

  window.ga('send', 'event', category, action, label, value);
}

module.exports = {
  event,
};
