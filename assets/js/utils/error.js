/**
 * Prints an error message in the console.
 *
 * @param {string} message The error message.
 * @returns {void}
 */
module.exports = (message) => {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
    /* eslint-enable no-console */
  }
};
