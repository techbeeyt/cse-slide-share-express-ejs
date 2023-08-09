const adminMiddlewares = {
  AuthorizeAdmin: (req, res, next) => {
    const role = req.user?.role;
    console.log(role)
    if(role) {
      if(req.user.role === 'admin') {
        next();
      } else {
        res.status(200).send("Access Denied!");
      }
    } else {
      res.redirect('/auth/login');
    }
  } 
}

module.exports = adminMiddlewares;