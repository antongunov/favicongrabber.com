const baseRequest = require('../base-request');
const cheerio = require('cheerio');
const parallel = require('async/parallel');

const manifest = require('./manifest');
const favicon = require('./favicon');
const browserconfig = require('./browserconfig');
const links = require('./links');

module.exports = (url, done) => {
  baseRequest(url, (err, res, page) => {
    if (err) return done(err);

    // TODO: check a status code

    const $ = cheerio.load(page);
    $.baseUrl = `${res.request.uri.protocol}//${res.request.uri.hostname}`;

    let icons = links($);

    parallel([
      (cb) => {
        manifest($, (err, icons) => {
          cb(err, icons);
        });
      },
      (cb) => {
        favicon($, (err, icons) => {
          cb(err, icons);
        });
      },
      (cb) => {
        browserconfig($, (err, icons) => {
          cb(err, icons);
        });
      },
    ], (err, results) => {
      // ignore errors
      results.forEach(arr => icons = [...icons, ...arr]);
      return done(null, icons);
    });
  });
};
