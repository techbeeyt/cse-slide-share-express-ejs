const { adminHomeControllers, eventsController } = require('../controllers');

const adminRouter = require('express').Router();

adminRouter
  .route("")
  .get(adminHomeControllers.render);


/**
 *  ==> '/admin/events'
 */

adminRouter
  .route("/events")
  .get(eventsController.render);

module.exports = adminRouter;