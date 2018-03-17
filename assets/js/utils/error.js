/**
 * Prints an error message in the console.
 * @param message The error message.
 */
module.exports = (message) => {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
    /* eslint-enable no-console */
  }
};
