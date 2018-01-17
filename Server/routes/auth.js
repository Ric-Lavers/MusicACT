const authMiddleware = require('../middleware/auth');
const { User } = require('../models/user');
const TOKEN_KEY = 'token';

module.exports = app => {
  // User SignUp
  app.post(
    '/register',
    authMiddleware.register,
    authMiddleware.signJWTForUser,
    (req, res) => {
      // var json = JSON.stringify(res);
      // setToken(json['token']);
      res.redirect('/');
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
    authMiddleware.signJWTForUser
    // (req, res) => {
    //   // res.send(req.user);
    //   // res.redirect('/');
    //
    // }
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
