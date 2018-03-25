/**
 * Prints a warning message in the console.
 *
 * @param {string} message The warning message.
 * @returns {void}
 */
module.exports = (message) => {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.warn === 'function') {
    console.warn(message);
    /* eslint-enable no-console */
  }
};
