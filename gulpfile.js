/**
 * Load environment variables
 */

require('dotenv').config();

/**
 * Sub-tasks
 */

require('./gulp/tasks/browser-sync');
require('./gulp/tasks/clean');
require('./gulp/tasks/fonts');
require('./gulp/tasks/public');
require('./gulp/tasks/pug');
require('./gulp/tasks/sass');
require('./gulp/tasks/watch');

/**
 * Main tasks
 */

require('./gulp/tasks/default');
