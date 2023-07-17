const { homeController, adminController } = require('../controllers');

const clientRouter = require('express').Router();


/**
 * Home => http://localhost:3000/
 * methods: GET
 */
clientRouter // "/"
  .route("")
  .get(homeController.render); // render the homepage


module.exports = clientRouter;