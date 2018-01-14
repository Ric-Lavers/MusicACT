const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');
const User = require('./models/user');
const authMiddleware = require('./middleware/auth');
const passport = require('passport');

var app = express();

// setup env running on heroku
const port = process.env.PORT || 5000;

//configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure To use Passport in an Express or Connect-based application
// session on
app.use(authMiddleware.initialize);

// creating cookie
app.use(require('cookie-parser')());
app.use(
  require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  })
);

//routes passing app
require('./routes/auth')(app);

// create a listen with callback function
app.listen(port, () => {
  console.log(`started on port ${port}`);
});

module.exports = { app };
