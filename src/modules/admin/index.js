const adminMiddlewares = require("./middlewares/authorize");
const adminRouter = require("./routes");

adminModule = {
  init: (app) => {
    app.use("/admin",adminMiddlewares.AuthorizeAdmin, adminRouter);
  }
}

module.exports = adminModule;