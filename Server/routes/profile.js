const authMiddleware = require('../middleware/auth');
const User = require('../models/user');
//const MusicianProfile = require('../models/musicianProfile');
const models = require('../models/musicianProfile');
const ContactDetails = models.contactDetails;
const ProfileMusician = models.profileMusician;
const SocialMediaIcon = models.socialMediaIcon;
const Multimedia = models.multimedia;
const MusicianProfile = models.musicianProfile;
const auth = require('../middleware/auth');
require('colors')

module.exports = app => {
  //POST /directory/create
  app.post('/api/directory/create', (req, res, next) => {
    console.log(`###### here ###########`);
    // console.log(req.body)
    const id = req.body.id.user;

    // assign user_id in order to populate the data
    const contact = Object.assign(req.body.contactDetails, id);
    const bio = Object.assign(req.body.bio, id);
    const icons = Object.assign(req.body.socialIcons, id);
    const embed = Object.assign(req.body.multiMedia, id);
    // console.log(contact);

    // create model
    // var profile = new MusicianProfile(req.body);
    var contactDetails = new ContactDetails(contact);
    var profileMusician = new ProfileMusician(bio);
    var socialMediaIcon = new SocialMediaIcon(icons);
    var multiMedia = new Multimedia(embed);

    // profile.save();
    contactDetails.save();
    profileMusician.save();
    socialMediaIcon.save();
    multiMedia.save();
  //saving profile object with reference to user entry
    var profile = new MusicianProfile({
      contactDetails: [contactDetails],
      profile: [profileMusician],
      socialMediaIcons: [socialMediaIcon],
      multimedia: [multiMedia],
      user: id
    });
    profile.save(function(err, res){
      if(err){ console.log(err), next(err)}
      else{
      }
    });
    User.update(
      { _id: id },
      { profile: profile._id }
      , function(err, raw) {
        if (err) {
          res.send(err);
        }
        res.send(raw);
        console.log("raw");
        console.dir(raw);
      });//User.update

    console.log("____PROFILE");
    console.log(profile);

  });//close post

  //GET /directory/:id
  app.get('/api/directory/:userId', (req, res, next) => {
    const userId = req.params.userId;
    console.log(`this is profile ID ${userId}`);
    User.findById(userId, function(err,doc){
      console.log(`${doc}`.blue)
    })
      .populate('profile')
      // .populate('profile.multimedia')
      .exec()
      .then(profile => {

        if (!profile) {
          console.log("message: 'profile not found'");
          return res.status(404).json({
            message: 'profile not found'
          });
        }
        // console.log(`complete ${profile}`);
        console.log(`1. complete ${profile}`);
        console.log(`2. complete ${profile.profile}`);
        console.log(`3. complete ${profile.profile.multimedia}`);
        res.send({ profile });
        next();
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
};
