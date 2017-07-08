const request = require('request');
const version = require('../../../package.json').version;

module.exports = request.defaults({
  // follow HTTP 3xx responses as redirects
  followRedirect: true,
  headers: {
    // prevent to redirect to mobile version of a site
    'User-Agent': `Mozilla/5.0 (Linux) FaviconGrabber/${version}`,
    'Accept': '*/*',
  },
  timeout: 5000,
});
