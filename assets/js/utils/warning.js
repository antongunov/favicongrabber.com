/**
 * Prints a warning message in the console.
 * @param message The warning message.
 */
module.exports = (message) => {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.warn === 'function') {
    console.warn(message);
    /* eslint-enable no-console */
  }
};
