/**
 * Favicon Grabber
 */

const express = require('express');

const api = require('./api');

const server = express();
const NODE_PORT = parseInt(process.env.NODE_PORT, 10);

server.use('/api', api);

server.listen(NODE_PORT, () => {
  console.log(`Server listening on port ${NODE_PORT} in ${process.env.NODE_ENV} mode...`);
});
