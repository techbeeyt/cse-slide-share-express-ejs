const adminRouter = require("./routes");

adminModule = {
  init: (app) => {
    app.use("/admin", adminRouter);
  }
}

module.exports = adminModule;