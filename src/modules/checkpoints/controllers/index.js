const joinController = require("./join-code");
const welcomeTourController = require("./welcome-tour");

const checkpointsController = {
  welcomeTourController,
  joinController,
}

module.exports = checkpointsController;