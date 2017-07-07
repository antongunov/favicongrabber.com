const page = require('./page');

module.exports = (domain, done) => {
  const url = `http://${domain}/`;

  page(url, (err, icons) => {
    if (err) return done(err);

    // TODO: `icons.src` property is uniquely

    const data = {
      domain,
      icons,
    };

    return done(null, data);
  });
};
