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
  .post(eventsController.saveEvent);

adminRouter
  .route("/events/edit/:id")
  .get(eventsController.renderEditEvent)
  .post(eventsController.doEditEvent);


adminRouter
  .route("/events/delete/:id")
  .get(eventsController.deleteEvent);

module.exports = adminRouter;