const request = require('request');
const version = require('../../package.json').version;

module.exports = request.defaults({
  headers: {
    'User-Agent': `FaviconGrabber/${version}`,
    'Accept': '*/*',
  },
  // follow HTTP 3xx responses as redirects
  followRedirect: true,
});
