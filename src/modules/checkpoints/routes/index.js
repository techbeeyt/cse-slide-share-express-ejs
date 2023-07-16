const { joinController, welcomeTourController } = require('../controllers');

const checkpointsRouter = require('express').Router();

/**
 * @route /checkpoints/join-code
 * @description Renders the join code page
 */
checkpointsRouter
  .route('/join-code')
  .get(joinController.render)
  .post(joinController.verifyCode);

checkpointsRouter
  .route('/welcome-tour')
  .get(welcomeTourController.render)
  .post(welcomeTourController.completeTour);

module.exports = checkpointsRouter;