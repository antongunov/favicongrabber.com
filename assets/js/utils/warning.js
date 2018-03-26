/**
 * Prints a warning message in the console.
 *
 * @param {string} message The warning message.
 * @returns {void}
 */
module.exports = (message) => {
  if (message == null) {
    throw new Error('The message parameter is required.');
  }

  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.warn === 'function') {
    console.warn(message);
    /* eslint-enable no-console */
  }
};
