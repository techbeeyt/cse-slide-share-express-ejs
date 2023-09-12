const { checkpoints } = require("../../../../utils");

const homeController = {
  render: (req, res) => {
    try { 
      if(req.user){
        if(req.user.checkpoint === 3) {
          const userData = req.user;
          res.render("home", {
            userData
          });
        } else {
          res.redirect(checkpoints.urls[req.user.checkpoint]);
        }
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