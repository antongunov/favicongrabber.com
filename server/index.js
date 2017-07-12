/**
 * Favicon Grabber
 */

const express = require('express');

const api = require('./api/router');

const server = express();
const NODE_PORT = parseInt(process.env.NODE_PORT, 10);

/**
 * JSON in a pretty way
 */

server.all('/api/*', (req, res, next) => {
  const indent = req.query.pretty === 'true' ? 2 : 0;
  server.set('json spaces', indent);
  return next();
});

server.use('/api', api);

server.listen(NODE_PORT, () => {
  console.log(`Server listening on port ${NODE_PORT} in ${process.env.NODE_ENV} mode...`);
});
