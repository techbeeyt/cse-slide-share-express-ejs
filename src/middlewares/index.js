const Checkpoint = require("./checkpoint");
const isLogged = require("./isLogged");

const middlewares = {
  isLogged,
  Checkpoint
}

module.exports = middlewares;