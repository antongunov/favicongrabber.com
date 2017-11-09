const request = require('./request.conf');
const URL = require('url').URL;

module.exports = ($, done) => {
  const href = $('link[rel="manifest"]', 'head').attr('href');
  if (!href) return done(null, []);

  const url = new URL(href, $.baseUrl).href;

  request(url, (err, res, manifest) => {
    // ignore errors
    if (err) return done(null, []);
    if (res.statusCode !== 200) return done(null, []);

    let icons = [];
    try {
      icons = JSON.parse(manifest).icons || [];
    } catch (err) {
      // ignore errors
      if (err) return done(null, []);
    }

    return done(null, icons);
  });
};
