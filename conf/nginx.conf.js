const resolve = require('path').resolve;

module.exports = {
  rootDir: resolve(__dirname, '../'),
  confDir: resolve(__dirname, 'nginx/'),
  env: process.env,
};
