const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');
const User = require('./models/user');
const authMiddleware = require('./middleware/auth');
const passport = require('passport');
const cookieSeesion = require('cookie-session');

var app = express();

// setup env running on heroku
const port = process.env.PORT || 5000;

//configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//// connect sever
// app.use(require('cookie-parser'));
// app.use(
//   require('express-session')({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false
//   })
// );

// use cookiesession and passport mixed up with Express
app.use(
  cookieSeesion({
    // 30days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //encrypt (need to create env file pass valu)
    keys: ['uenjngnajnjannoopkopoao']
  })
);

//allow to accesss 'Access-Control-Allow-Origin' header
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// configure To use Passport in an Express or Connect-based application
// and session on
app.use(authMiddleware.initialize);

//routes passing app
require('./routes/auth')(app);

// create a listen with callback function
app.listen(port, () => {
  console.log(`started on port ${port}`);
});
