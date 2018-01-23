const authMiddleware = require('../middleware/auth');
const { User } = require('../models/user');

require('colorize');

module.exports = app => {
  // User SignUp
  app.post(
    '/register',
    authMiddleware.register,
    authMiddleware.signJWTForUser,
    (req, res) => {
      // console.log(`res.user: ${res}`);
      // console.log(`res.user: ${typeof res}`);
      console.log(`req.user: ${req.user}`);
      // res.redirect('/');
    }
  );

  // User Login
  app.post(
    '/signin',
    (req, res, next) => {
      console.log('in signin');
      next();
    },
    authMiddleware.signin,
    authMiddleware.signJWTForUser,
    (req, res) => {
      console.log(res.user);
      //   res.redirect('/');
    }
  );

  // User Logout  (http://www.passportjs.org/docs/logout/)
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // Fetch the user data??? to setupthe middlware
  app.get('/current_user', authMiddleware.requireJWT, (req, res) => {
    console.log(req);
    // console.log(req.token);
    // res.send(req.user);
    // console.log(req.body);
  });
};
