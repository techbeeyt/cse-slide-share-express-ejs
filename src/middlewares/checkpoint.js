const checkpoints = require("../utils/user-checkpoint");

const Checkpoint = (req, res, next) => {
    if(req.user?.checkpoint === 3) {
        next();
    } else {
        res.redirect(checkpoints.urls[req.user.checkpoint]);
    }
}

module.exports = Checkpoint;