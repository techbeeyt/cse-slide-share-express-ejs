const adminHomeControllers = {
  render: (req, res) => {
    const userData = req.user;
    res.render("admin", {
      userData
    });
  }
}

module.exports = adminHomeControllers;