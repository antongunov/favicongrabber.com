const baseRequest = require('../base-request');
const URL = require('url').URL;

module.exports = ($, done) => {
  const href = $('link[rel="manifest"]', 'head').attr('href');
  if (!href) return done(null, []);

  const url = href[0] === '/' ? new URL(href, $.baseUrl).href : href;
  baseRequest(url, (err, res, manifest) => {
    // ignore errors
    if (err) return done;

    let data = {};
    try {
      data = JSON.parse(manifest);
    } catch (err) {
      // ignore errors
      if (err) return done;
    }

    let icons = [];
    if (data.icons) {
      data.icons.forEach(icon => icons.push({
        sizes: icon.sizes,
        src: icon.src[0] === '/' ? new URL(icon.src, $.baseUrl).href : icon.src,
        type: icon.type,
      }));
    }

    return done(null, icons);
  });
};
