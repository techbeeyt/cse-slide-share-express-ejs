const { homeController, adminController } = require('../controllers');

const clientRouter = require('express').Router();


/**
 * Home => http://localhost:3000/
 * methods: GET
 */
clientRouter
  .route("")
  .get(homeController.render); // render the homepage


/**
 * Admin Panel => http://localhost:3000/admin
 */
clientRouter
  .route("admin")
  .get(adminController.render);
module.exports = clientRouter;