const { isLogged } = require('../../middlewares');
const checkpointsRouter = require('./routes');

const checkpointsModule = {
  init: (app) => {
    app.use('/checkpoints', isLogged, checkpointsRouter);
  }
}

module.exports = checkpointsModule;