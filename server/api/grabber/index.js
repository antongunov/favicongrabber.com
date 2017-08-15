const page = require('./page');
const URL = require('url').URL;
const normalizeUrl = require('normalize-url');

module.exports = (domain, options, done) => {
  const url = `http://${domain}/`;

  page(url, (err, icons, baseUrl) => {
    if (err) return done(err);

    icons.forEach((icon) => {
      const url = new URL(icon.src, baseUrl);
      if (options.normalizeUrl) {
        icon.src = normalizeUrl(url.href, {
          removeQueryParameters: [ /.+/, ],
        });
      } else {
        icon.src = url.href;
      }
    });

    const data = {
      domain,
      icons,
    };

    return done(null, data);
  });
};
