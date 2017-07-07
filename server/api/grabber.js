const request = require('request');
const cheerio = require('cheerio');
const { URL } = require('url');

const selectors = require('./selectors.json').link;
const { version } = require('../../package.json');

const baseRequest = request.defaults({
  headers: {
    'User-Agent': `FaviconGrabber/${version}`,
    'Accept': '*/*',
  }
});

const grabPage = (baseUrl, page, done) => {
  const $ = cheerio.load(page);
  const icons = [];

  selectors.forEach((selector) => {
    $(selector, 'head').each((i, elem) => {
      const { href, sizes, type } = elem.attribs;
      const icon = {
        sizes,
        src: href[0] === '/' ? new URL(href, baseUrl).href : href,
        type,
      };
      icons.push(icon);
    });
  });

  // TODO: load manifest
  // TODO: load browserconfig

  // TODO: `src` property is uniquely

  return done(null, icons);
};

const loadPage = (domain, done) => {
  let baseUrl = `http://${domain}/`;

  baseRequest(baseUrl, (err, res, page) => {
    if (err) return done(err);
    // TODO: check `res.statusCode`

    // http -> https?
    baseUrl = res.request.uri.href;

    grabPage(baseUrl, page, (err, icons) => {
      // TODO: check `err`

      const data = {
        domain,
        icons,
      };

      return done(null, data);
    });
  });
};

module.exports = loadPage;
