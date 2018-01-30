const authMiddleware = require('../middleware/auth');
const User = require('../models/user');

require('colorize');

module.exports = app => {
  //GET Index (Access to the top page)
  app.get('/api/user', (req, res, next) => {
    console.log('_______Hit the Home______');
    User.find()
      .populate('profile')
      // .populate('profile')
      .exec()
      .then(users => {
        const array = [];
        users.map(user => {
          if (user.profile) {
            array.push({
              user_id: user.profile._id,
              profile_id: user.profile.user,
              type: user.type,
              profile: user.profile
            })
          }
        });
        const response = {
          count: users.length,
          User: array
        };
        console.log("_____",response);
        res.send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

  //POST /register(User SignUp)
  app.post(
    '/api/register',
    authMiddleware.register,
    authMiddleware.signJWTForUser,
    (req, res) => {
      // console.log(`res.user: ${res}`);
      // console.log(`res.user: ${typeof res}`);
      console.log(`req.user: ${req.user}`);
      // res.redirect('/');
    }
  );

  //POST /signin User Login
  app.post(
    '/api/signin',
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

  //GET /logout User Logout  (http://www.passportjs.org/docs/logout/)
  app.get('/api/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // // Fetch the user data??? to setupthe middlware
  // app.get('/current_user', authMiddleware.requireJWT, (req, res) => {
  //   console.log(req);
  //   // console.log(req.token);
  //   // res.send(req.user);
  //   // console.log(req.body);
  // });
};
