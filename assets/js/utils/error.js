/**
 * Prints an error message in the console.
 *
 * @param {string} message The error message.
 * @returns {void}
 */
module.exports = (message) => {
  if (message == null) {
    throw new Error('The message parameter is required.');
  }

  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
    /* eslint-enable no-console */
  }
};
