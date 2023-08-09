const { homeController, adminController, resourceController } = require('../controllers');

const clientRouter = require('express').Router();


/**
 * Home => http://localhost:3000/
 * methods: GET
 */
clientRouter // "http://localhost:3300/"
  .route("")
  .get(homeController.render); // render the homepage


clientRouter
  .route("/resources")
  .get(resourceController.render);

module.exports = clientRouter;