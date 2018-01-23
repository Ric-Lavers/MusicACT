const authMiddleware = require('../middleware/auth');
const User = require('../models/user');
const MusicianProfile = require('../models/musicianProfile');

module.exports = app => {
  app.post('/directory/create', (req, res) => {
    var profile = new MusicianProfile(req.body);
    profile.save();

    console.log(profile.token);

    User.update({ _id: profile.token }, { profile: [profile] }, function(
      err,
      raw
    ) {
      if (err) {
        res.send(err);
      }
      res.send(raw);

      console.dir(raw);
      console.log(raw);
    });
  });
  app.post('/profile/create', (req,res) => {
    console.log(req.body)
  })

};
