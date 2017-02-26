// - PACKAGES
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const massive = require('massive');
const config = require('./config');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// - CONFIG
const secret = config.secret;
const postgres = config.postgres;
const facebook = config.facebook;

// - APP
const app = module.exports = express();
app.use(session({ secret: secret, saveUninitialized: false, resave: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

// - DATABASE
const connectionString = 'postgres://' + postgres.username + ':' + postgres.password + '@localhost:4000/ucritic';
let db = massive.connect({connectionString : connectionString}, (err, localdb) => {
  db = localdb;
  app.set('db', db);
});

// - SERVER
app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), () => {
  console.log('port ' + app.get('port') + ' is listening');
});
