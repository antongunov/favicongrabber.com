const router = require('express').Router();
const grabber = require('./grabber');


router.param('domain', (req, res, next, domain) => {
  console.log(`req.domain = ${req.domain}`);
  req.domain = domain;
  return next();
});

router.get('/grab/:domain', (req, res) => {
  grabber(req.domain, (err, data) => {
    res.status(200).json(data);
  });
});

router.use((req, res) => {
  res.status(404).json({
    error: `Unknown API endpoint "${req.method} ${req.url}"`,
  });
});

router.use((err, req, res, next) => {
  /* eslint no-unused-vars: off */
  res.status(500).json({
    error: 'General API error',
  });
});

module.exports = router;
