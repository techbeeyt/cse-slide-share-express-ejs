const middlewares = require('../../../middlewares');
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
  .get(middlewares.isLogged, middlewares.Checkpoint, resourceController.render);

clientRouter
  .route("/resources/open")
  .get(middlewares.isLogged, middlewares.Checkpoint, resourceController.openFile);

module.exports = clientRouter;