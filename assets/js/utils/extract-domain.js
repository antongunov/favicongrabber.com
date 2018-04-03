/**
 * Help function to cut off the left part of a string.
 */

const lcut = (str, of) => {
  const inx = str.lastIndexOf(of);
  return inx > -1 ? str.slice(inx + of.length) : str;
};

/**
 * Help function to cut off the right part of a string.
 */

const rcut = (str, of) => {
  const inx = str.indexOf(of);
  return inx > -1 ? str.slice(0, inx) : str;
};

/**
 * Extract a domain name from a URL.
 */

module.exports = (url) => {
  // removes whitespace from both ends of a URL
  let next = url.trim();

  // https://user:pass@sub.host.com:8080/p/a/t/h?query=string#has
  next = lcut(next, '//');
  // user:pass@sub.host.com:8080/p/a/t/h?query=string#has
  next = rcut(next, '/');
  // user:pass@sub.host.com:8080
  next = lcut(next, '@');
  // sub.host.com:8080
  next = rcut(next, ':');

  return next;
};
