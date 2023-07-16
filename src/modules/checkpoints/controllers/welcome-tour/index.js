const User = require("../../../../models/user/User");
const checkpoints = require("../../../../utils/user-checkpoint");

const welcomeTourController = {
  render: (req, res) => {
    res.render('checkpoints/welcome-tour', {});
  },
  completeTour: async (req, res) => {
    try { 
      // update checkpoint
      await User.findOneAndUpdate({ _id: req.user._id }, { checkpoint: 3 });
      // update the session info 
      req.user.checkpoint = 3;
      // redirect to next checkpoint
      res.send("Success");
    } catch(error) { 
      console.log(error);
    }
  }
}

module.exports = welcomeTourController;