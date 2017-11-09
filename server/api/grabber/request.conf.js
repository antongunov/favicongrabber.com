const request = require('request');

module.exports = request.defaults({
  // follow HTTP 3xx responses as redirects
  followRedirect: true,
  headers: {
    'Accept': '*/*',
    // prevent to redirect to the mobile version of a website
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36',
  },
  jar: true,
  timeout: 5000,
});
