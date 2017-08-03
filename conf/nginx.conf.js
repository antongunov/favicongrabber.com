const resolve = require('path').resolve;

module.exports = {
  rootDir: resolve(__dirname, '../'),
  snippetsDir: resolve(__dirname, 'nginx/snippets/'),
  env: process.env,
};
