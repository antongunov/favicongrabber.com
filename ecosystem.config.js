const dotEnv = require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'favicongrabber',
      script: 'server/',
      env: dotEnv.parsed,
    },
  ],
};
