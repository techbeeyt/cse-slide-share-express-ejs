const isLogged = (req, res, next) => {
  try {
    if(req.user) {
      console.log('[middleware, isLogged] User is logged in]');
      if(req.user.checkpoint === 3) {
        return next();
      }
    } else {
      console.log('[middleware, isLogged] User is not logged in]');
      req.redirect('/auth/login');
    }
  } catch(error) { 
    console.log(error);
    res.redirect('/auth/login?error=Something went wrong');
  }
}

module.exports = isLogged;