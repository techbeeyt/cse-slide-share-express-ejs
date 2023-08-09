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

adminRouter
  .route("/events/create")
  .get(eventsController.renderCreate)
  .post(eventsController.saveEvent)

module.exports = adminRouter;