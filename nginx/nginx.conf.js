const resolve = require('path').resolve;

module.exports = {
  rootDir: resolve(__dirname, '../'),
  snippetsDir: resolve(__dirname, 'snippets/'),
  env: process.env,
};
