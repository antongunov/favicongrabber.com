const { parsed } = require('dotenv').config();

module.exports = {
  apps: [
    {
      name: parsed.NGINX_SERVER_NAME,
      script: 'server/',
      env: parsed,
    },
  ],
};
