const authMiddleware = require('../middleware/auth');
const User = require('../models/user');
const MusicianProfile = require('../models/musicianProfile');

module.exports = app => {
  app.post('/directory/create', (req, res) => {
    console.log(`###### here ###########`);
    console.log(req.body);
    console.log(req.body.id);
    var profile = new MusicianProfile(req.body);
    // console.log(`now here ${profile}`);
    profile.save();
    console.log(`5a659344315085ee20736d4a ${req.body.id}`);

    User.update({ _id: req.body.id }, { profile: [profile] }, function(
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

  app.post('/profile/create', (req, res) => {
    console.log(req.body);
  });
};
