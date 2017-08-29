const dotEnv = require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'favicongrabber.com',
      script: 'server/',
      env: dotEnv.parsed,
    },
  ],
};
