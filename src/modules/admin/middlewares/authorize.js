const adminMiddlewares = {
  AuthorizeAdmin: (req, res, next) => {
    if(req.user.role === 'admin') {
      next();
    } else {
      res.status(200).send("Access Denied!");
    }
  } 
}

module.exports = adminMiddlewares;