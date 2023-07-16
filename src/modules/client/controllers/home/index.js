const checkpoints = require("../../../../utils/user-checkpoint");
const roles = require("../../../../utils/user-roles");

const homeController = {
  render: (req, res) => {
    try { 
      if(req.user){
        if(req.user.role === roles.ADMIN) {
          return res.redirect("/admin");
        }
        if(req.user.checkpoint === 3) {
          return res.render("home", {});
        }
        res.redirect(checkpoints.urls[req.user.checkpoint]);
      } else {
        res.render("landing-page", {})
      }
    } catch(error) { 
      console.log(error);
      res.redirect("/error.html");
    }
  }
}

module.exports = homeController;