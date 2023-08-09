const User = require('../../../../models/user/User');
const { DefinedMessage } = require('../../../../utils');
const checkpoints = require('../../../../utils/user-checkpoint');

const joinController = {
  render: async (req, res) => {
    const msg = req.query.msg;
    const userInfo = req.user;
    if(userInfo.checkpoint !== 1) {
      return res.redirect(checkpoints.urls[userInfo.checkpoint]);
    }
    const userCountData = User.countDocuments({});
    const allUsersData = await User.find({ _id: { $ne: userInfo._id }}, { _id: 0, picture: 1 });
    const [userCount, allUsers] = await Promise.all([userCountData, allUsersData]);

    res.render('checkpoints/join-code', {
      userInfo,
      userData: userInfo,
      userCount,
      allUsers,
      msg: DefinedMessage[msg]
    });
  },

  verifyCode: async (req, res) => {
    try { 
      const { join_code } = req.body;
      console.log(req.user)
      if(join_code === process.env.JOIN_CODE){
        // update checkpoint
        await User.findOneAndUpdate({ _id: req.user._id }, { checkpoint: 2 });
        // update the session info 
        req.user.checkpoint = 2;
        // redirect to next checkpoint
        res.redirect(checkpoints.urls['2'])
      } else {
        // Show Error
        console.log("Error");
        res.redirect(`?msg=INVALID_JOIN_CODE`);
      }
    } catch(error) { 
      console.log(error)
    }
  }
}

module.exports = joinController;