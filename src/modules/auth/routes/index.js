const passport = require('passport');
const loginController = require('../controllers');

const authRouter = require('express').Router();

/**
 * Login => '/login'
 * methods: GET, POST
 */
authRouter
  .route("/login")
  .get(loginController.render);


/**
 * Login With Google => '/auth/google'
 * methods: GET, POST
 */
authRouter
  .route("/google")
  .get(passport.authenticate('google', { scope: ['profile', 'email'] }));


/**
 * Google Callback => '/auth/google/callback'
 * methods: GET, POST
 */
authRouter
  .route("/callback/google")
  .get(passport.authenticate('google', { failureRedirect: '/auth/login' }), loginController.googleLogin);


/**
 * Logout => '/auth/logout'
 * methods: GET
 */
authRouter
  .route("/logout")
  .get(loginController.logout);
module.exports = authRouter;