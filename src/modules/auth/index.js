const authRouter = require("./routes");

const authModule = {
  init: (app) => {
    app.use("/auth", authRouter);
  }
}

module.exports = authModule;