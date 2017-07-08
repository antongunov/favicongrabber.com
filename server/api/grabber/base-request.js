const request = require('request');
const version = require('../../../package.json').version;

module.exports = request.defaults({
  headers: {
    // prevent to redirect to mobile version of a site
    'User-Agent': `Mozilla/5.0 (Linux) FaviconGrabber/${version}`,
    'Accept': '*/*',
  },
  // follow HTTP 3xx responses as redirects
  followRedirect: true,
  timeout: 5000,
});
