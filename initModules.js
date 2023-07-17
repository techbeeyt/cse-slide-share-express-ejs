const clientModule = require('./src/modules/client');
const authModule = require('./src/modules/auth');
const checkpointsModule = require('./src/modules/checkpoints');
const adminModule = require('./src/modules/admin');

const initModules = (app) => {
  clientModule.init(app);
  authModule.init(app);
  checkpointsModule.init(app);
  adminModule.init(app);
}

module.exports = initModules;