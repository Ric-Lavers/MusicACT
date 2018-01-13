const passport = require('passport');
const User = require('../models/user');

module.exports = app => {
  //Post /users/register
  app.post('/users/register', (req, res) => {
    var user = new User(req.body);

    user
      .save()
      // .then(() => {
      //   return user.generateAuthToken();
      // })
      .then(token => {
        res.header('x-auth', token).send(user);
      })
      .catch(e => {
        res.status(400).send(e);
      });
  });

  //Post /users/login
  app.post('/users/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password)
      .then(user => {
        return user.generateAuthToken().then(token => {
          res.header('x-auth', token).send(user);
        });
      })
      .catch(e => {
        res.status(400).send();
      });
  });

  // //delete /users/me/token
  // app.delete('/users/me/token', authenticate, (req, res) => {
  //   req.user.removeToken(req.token).then(
  //     () => {
  //       res.status(200).send();
  //     },
  //     () => {
  //       res.status(400).send();
  //     }
  //   );
  // });
  //
  // //check if account exist
  // app.get('/users/me', authenticate, (req, res) => {
  //   res.send(req.user);
  // });
};
