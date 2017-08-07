const page = require('./page');
const URL = require('url').URL;

module.exports = (domain, done) => {
  const url = `http://${domain}/`;

  page(url, (err, icons, baseUrl) => {
    if (err) return done(err);

    icons.forEach((icon) => {
      icon.src = new URL(icon.src, baseUrl).href;
    });

    const data = {
      domain,
      icons,
    };

    return done(null, data);
  });
};
