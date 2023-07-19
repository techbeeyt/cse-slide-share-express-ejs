const eventsController = {
  render: (req, res) => {
    const userData = req.user;
    res.render("admin/events", {
      userData
    });
  }
}

module.exports = eventsController;