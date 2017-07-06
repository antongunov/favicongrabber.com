const request = require('request');
const cheerio = require('cheerio');
const resolve = require('url').resolve;

const selectors = require('./selectors.json');

module.exports = (domain, done) => {
  const uri = `http://${domain}/`;
  const icons = [];

  request(uri, (err, res, body) => {
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

    const data = {
      domain,
      icons,
    };

    return done(null, data);
  });
};
