const authMiddleware = require('../middleware/auth');
const User = require('../models/user');
//import user model
//const MusicianProfile = require('../models/musicianProfile');
const models = require('../models/musicianProfile');
const ContactDetails = models.contactDetails;
const ProfileMusician = models.profileMusician;
const SocialMediaIcon = models.socialMediaIcon;
const Multimedia = models.multimedia;
const MusicianProfile = models.musicianProfile;

module.exports = app => {
  //POST /directory/create
  app.post('/directory/create', (req, res) => {
    console.log(`###### here ###########`);
    // console.log(req.body);
    const id = req.body.id;

    // assign user_id in order to populate the data
    const contact = Object.assign(req.body.contactDetails, id);
    const bio = Object.assign(req.body.bio, id);
    const icons = Object.assign(req.body.socialIcons, id);
    const embed = Object.assign(req.body.socialEmbed, id);
    // console.log(contact);

    // create model
    // var profile = new MusicianProfile(req.body);
    var contactDetails = new ContactDetails(contact);
    var profileMusician = new ProfileMusician(bio);
    var socialMediaIcon = new SocialMediaIcon(icons);
    var socialEmbed = new ContactDetails(embed);

    // profile.save();
    contactDetails.save();
    profileMusician.save();
    socialMediaIcon.save();
    socialEmbed.save();

    var profile = new MusicianProfile({
      contactDetails: [contactDetails],
      profile: [profileMusician],
      socialMediaIcons: [socialMediaIcon],
      multimedia: [socialEmbed],
      user: id.user
    });
    profile.save();

    // console.log(`profile hereeeeeee ${profile}`);
    // console.dir(id);
    // console.dir(req.body.id.user);
    console.log(`profile id here  ******* ${profile._id}`);

    User.update({ _id: req.body.id.user }, { profile: profile._id }, function(
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

  //GET /directory/:id
  app.get('/directory/:userId', (req, res) => {
    const userId = req.params.userId;
    console.log(`this is profile ID ${userId}`);
    User.findById(userId)
      .populate('profile')
      .populate('profile.multimedia')
      .exec()
      .then(profile => {
        if (!profile) {
          console.log("message: 'profile not found'");
          return res.status(404).json({
            message: 'profile not found'
          });
        }
        // console.log(`complete ${profile}`);
        console.log(`complete ${profile.profile}`);
        console.log(`complete ${profile.profile.multimedia}`);
        res.status(200).json({
          profile: profile,
          request: {
            type: 'GET'
            // url: "http://localhost:3000/orders"
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
};
