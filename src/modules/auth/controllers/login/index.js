const loginController = {
  render: (req, res) => {
    console.log(process.env.GOOGLE_CALLBACK_URL);
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