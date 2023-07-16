const checkpointsRouter = require('./routes');

const checkpointsModule = {
  init: (app) => {
    app.use('/checkpoints', checkpointsRouter);
  }
}

module.exports = checkpointsModule;