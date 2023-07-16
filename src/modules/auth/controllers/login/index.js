const loginController = {
  render: (req, res) => {
    res.render('auth/login', {});
  },
  googleLogin: (req, res) => {
    res.redirect('/');
  },
  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  }
}

module.exports = loginController;