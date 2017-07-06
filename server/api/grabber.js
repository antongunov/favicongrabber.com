const request = require('request');
const cheerio = require('cheerio');
const resolve = require('url').resolve;

const selectors = [
  'link[rel="icon"]',
];

module.exports = (domain, done) => {
  const uri = `http://${domain}/`;
  const icons = [];

  request(uri, (err, res, body) => {
    /* eslint no-unused-vars: off */
    if (err) return done(err);

    const $ = cheerio.load(body);

    selectors.forEach((selector) => {
      $(selector, 'head').each((i, elem) => {
        const { href, sizes, type } = elem.attribs;
        const icon = {
          sizes,
          src: href[0] === '/' ? resolve(uri, href) : href,
          type,
        };
        icons.push(icon);
      });
    });

    return done(null, {
      domain,
      icons,
    });
  });
};
