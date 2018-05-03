const request = require('./request.conf');
const { URL } = require('url');

module.exports = ($, done) => {
  const url = new URL('/favicon.ico', $.baseUrl).href;
  const reqOptions = {
    method: 'HEAD',
  };

  request(url, reqOptions, (err, res) => {
    // ignore errors
    if (err) return done(null, []);
    if (res.statusCode !== 200) return done(null, []);
    // check image size
    if (!(parseInt(res.headers['content-length'], 10) > 0)) return done(null, []);

    return done(null, [{
      src: url,
      type: 'image/x-icon',
    }]);
  });
};
