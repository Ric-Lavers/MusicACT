const authMiddleware = require('../middleware/auth');
// var { User } = require('./models/user');

module.exports = app => {
  ///// test jwt
  // app.post('/review', authMiddleware.decodeJWTFindUser, (req, res) => {
  //   jwt.verify(req.token, 'topsecret', (err, authData) => {
  //     if (err) {
  //       res.sendStatus(403);
  //     } else {
  //       res.send('welcome!');
  //       console.log(authData);
  //     }
  //   });
  // });

  // User SignUp
  app.post(
    '/register',
    authMiddleware.register,
    authMiddleware.signJWTForUser,
    (req, res) => {
      console.log(req.body);
      res.redirect('/');
    }
  );

  // User Login
  app.post(
    '/signin',
    authMiddleware.signin,
    authMiddleware.signJWTForUser,
    (req, res) => {
      console.log(req.body);
      res.redirect('/');
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
