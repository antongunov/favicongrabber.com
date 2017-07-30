const Controller = require('./controllers/modules/controller');

require('./controllers/errors-handler')(Controller);
require('./controllers/grabber')(Controller);
