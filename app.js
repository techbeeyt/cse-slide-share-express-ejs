const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cors = require('cors');
// (required for passport)
require('./src/config/passportJsConfig');

const runApp = () => {
  const app = express();

  // configure dotenv for development
  if(process.env.NODE_ENV !== 'production') {
    dotenv.config({
      path: './.env'
    })
  }
  app.use(cors());
  // setup static files
  // N.B: This should be placed before passport.initialize()
  // static files
  app.use(express.static("public"));
  app.use('/css', express.static(__dirname + 'public/css'));
  app.use('/images', express.static(__dirname + 'public/images'));
  app.use('/js', express.static(__dirname + 'public/js'));
  app.use('/fonts', express.static(__dirname + 'public/fonts'));
  app.use('/assets', express.static(__dirname + 'public/assets'));

  app.use(express.json({ limit: "100mb" }));
  app.use(express.urlencoded({ extended: true }));
  
  // setup cookie parser
  app.use(require('cookie-parser')());

  // setup express session (this is required for passport)
  app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: ['iuhfuiawarhjbweaferwqiuweqryewyguqwerwe'],
  }));

  //initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  // // middlewares
  // app.use(helmet());
  // app.use(compression());

  // don't use two lines of the above middlewares
  // they will malfunction the views and static files

  // Templating Engine
  app.set('views', path.join(__dirname, 'src', 'views'));
  app.set('view engine', 'ejs');

  return app;
}

module.exports = {
  runApp
}