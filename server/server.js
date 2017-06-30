/**
 * Favicon Grabber
 */

const http = require('http');

const NODE_PORT = parseInt(process.env.NODE_PORT, 10);

const srv = http.createServer((req, res) => {
  res.end('Hi!');
});

srv.listen(NODE_PORT, () => {
  console.log(`Server listening on port ${NODE_PORT} in ${process.env.NODE_ENV} mode...`);
});
