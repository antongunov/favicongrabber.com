const router = require('express').Router();
const grabber = require('./grabber');

router.param('domain', (req, res, next, domain) => {
  // TODO: validate `domain` property
  req.domain = domain;
  return next();
});

router.get('/grab/:domain', (req, res, next) => {
  grabber(req.domain, (err, data) => {
    if (err) return next(err);
    res.status(200).json(data);
  });
});

router.use((req, res) => {
  res.status(404).json({
    error: `Unknown API endpoint "${req.method} ${req.baseUrl}${req.url}"`,
  });
});

router.use((err, req, res, next) => {
  /* eslint no-unused-vars: off */
  // console.error(err);
  res.status(500).json({
    error: 'General API error',
  });
});

module.exports = router;
