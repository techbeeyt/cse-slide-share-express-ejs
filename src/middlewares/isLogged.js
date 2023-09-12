// this middleware should only check if user logged in or not
const isLogged = (req, res, next) => {
  try {
    if(req.user) {
      console.log('[middleware, isLogged] User is logged in]');
      return next();
    } else {
      console.log('[middleware, isLogged] User is not logged in]');
      res.redirect('/auth/login');
    }
  } catch(error) { 
    console.log(error);
    res.redirect('/auth/login?error=Something went wrong');
  }
}

module.exports = isLogged;