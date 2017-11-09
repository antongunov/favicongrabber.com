const request = require('./request.conf');
const cheerio = require('cheerio');
const parallel = require('async/parallel');

const manifest = require('./manifest');
const favicon = require('./favicon');
const browserconfig = require('./browserconfig');
const links = require('./links');

const grab = (fn, $) => {
  return (cb) => {
    fn($, (err, icons) => {
      cb(err, icons);
    });
  }
};

module.exports = (url, done) => {
  request(url, (err, res, page) => {
    if (err) return done(err);

    if (res.statusCode !== 200) return done(null, []);

    const $ = cheerio.load(page, {
      // ignore case for tags and attribute names
      lowerCaseTags: true,
      lowerCaseAttributeNames: true,
    });

    $.baseUrl = `${res.request.uri.protocol}//${res.request.uri.hostname}`;

    let icons = links($);

    parallel([
      grab(manifest, $),
      grab(favicon, $),
      grab(browserconfig, $),
    ], (err, results) => {
      // ignore errors
      results.forEach(arr => icons = [...icons, ...arr]);
      return done(null, icons, $.baseUrl);
    });
  });
};
