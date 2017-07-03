const router = require('express').Router();

router.get('/grab/:domain', (req, res) => {
  res.status(200).json({
    domain: req.params.domain
  });
});

module.exports = router;
