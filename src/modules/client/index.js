const clientRouter = require("./routes");

clientModule = {
  init: (app) => {
    app.use("", clientRouter);
  }
}

module.exports = clientModule;