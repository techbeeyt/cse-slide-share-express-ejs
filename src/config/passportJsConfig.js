const passport = require('passport');
const User = require('../models/user/User');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

// this produce cookie
passport.serializeUser((user, done) => {
  console.log('[passport] User is being serialized');
  done(null, user.email);
})

// this use the cookie and authorize
passport.deserializeUser(async (email, done) => {
  console.log('[passport] User is being deserialized');
  const user = await User.findOne({ email });
  if(user){
    done(null, user);
  }
})


// this helps to authenticate with google
passport.use(
  new GoogleStrategy({
    // options
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }, async (accessToken, refreshToken, profile, done) => {
    const user = await User.findOne({ email: profile._json.email });
    if(user) {
      done(null, user);
    } else {
      const username = profile._json.email.split('@')[0];
      var userModel = {
        username,
        email: profile._json.email,
        passwordHash: null,
        checkpoint: 1,
        picture: profile._json.picture,
      }
      const user = await new User(userModel).save();
      const userData = user.data;
      done(null, userData);
    }
  }
));

