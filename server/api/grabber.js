const request = require('request');

module.exports = (domain, done) => {
  const uri = `http://${domain}/`;
  request(uri, (err, res, body) => {
    /* eslint no-unused-vars: off */
    if (err) return done(err);
    return done(null, {
      domain,
    });
  });
};
