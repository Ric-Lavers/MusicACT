const passport = require('passport');
const jwt = require('jsonwebtoken');
const passportjwt = require('passport-jwt');
const User = require('../models/user');

//The createStrategy is responsible to setup passport-local LocalStrategy with the correct options.
passport.use(User.createStrategy());

// serializeUser() Generates a function that is used by Passport to serialize users into the session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// deserializeUser() Generates a function that is used by Passport to deserialize users into the session
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  new passportjwt.Strategy(
    {
      // fromAuthHeaderAsBearerToken() creates a new extractor that looks for the JWT in the authorization header with the scheme 'bearer'
      jwtFromRequest: passportjwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'topsecret',
      algorithm: ['HS256']
    },
    (payload, done) => {
      console.log(payload);
      User.findById(payload.sub)
        .then(user => {
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        })
        .catch(error => {
          done(error, false);
        });
    }
  )
);
// given a user object, create a token based on that user object and sent back in the response object to either curl nor client app
function signJWTForUser(req, res, next) {
  const user = req.user;
  console.log(user);
  const token = jwt.sign(
    {
      email: user.email
    },
    'topsecret',
    {
      algorithm: 'HS256',
      expiresIn: '7 days',
      //subject: if you want to check subject (sub), provide a value here
      subject: user._id.toString()
    }
  );
  next();
}

function register(req, res, next) {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  User.register(user, req.body.password, (error, callback) => {
    if (error) {
      next(error);
      return;
    }
    // console.log(callback);
    req.user = callback;
    next();
  });
}

// passport.initialize() middleware is required to initialize Passport. If your application uses persistent login sessions, passport.session() middleware must also be used.
module.exports = {
  initialize: [passport.initialize(), passport.session()],
  register,
  signin: passport.authenticate('local', {
    session: false,
    failureRedirect: '/login',
    successFlash: 'Welcome!'
  }),
  signJWTForUser,
  requireJWT: passport.authenticate('jwt', { session: false })
};
