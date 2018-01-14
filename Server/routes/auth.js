const authMiddleware = require('../middleware/auth');

module.exports = app => {
  // User SignUp
  app.post(
    '/register',
    authMiddleware.register,
    authMiddleware.signJWTForUser,
    (req, res) => {
      res.redirect('/');
    }
  );

  // User Login
  app.post('/signin', authMiddleware.signin, (req, res) => {
    res.redirect('/');
  });

  // User Logout  (http://www.passportjs.org/docs/logout/)
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // Fetch the user data??? to setupthe middlware
  app.get('/current_user', (req, res) => {
    res.send(req.user);
    console.log(req.user);
  });
};
