const mongoose = require('../db/mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// const MusicianProfileSchema = mongoose.Schema({
//   _id: String,
//   contactDetails: {
//     _id: String,
//     email: String,
//     phoneNumber: String,
//     pointOfContact: String
//   },
//   bio: {
//     imageSrc: String,
//     name: String,
//     bio: String
//   },
//   socialIcons: {
//     website: String,
//     instagram: String
//   },
//   socialEmbed: {
//     soundcloudLink: String,
//     youtubeLink: String
//   }
// });

const contactDetailsSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  email: String,
  phoneNumber: String,
  pointOfContact: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const profileMusicianSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  imageSrc: String,
  name: String,
  bio: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const socialMediaIconSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  website: String,
  instagram: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const multimediaSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  soundcloudLink: String,
  youtubeLink: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const musicianProfileSchema = mongoose.Schema({
  contactDetails: [contactDetailsSchema],
  profile: [profileMusicianSchema],
  socialMediaIcons: [socialMediaIconSchema],
  multimedia: [multimediaSchema],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const contactDetails =
  mongoose.models.contactDetails ||
  mongoose.model('contactDetails', contactDetailsSchema);
const profileMusician =
  mongoose.models.profileMusician ||
  mongoose.model('profileMusician', profileMusicianSchema);
const socialMediaIcon =
  mongoose.models.socialMediaIcon ||
  mongoose.model('socialMediaIcon', socialMediaIconSchema);
const multimedia =
  mongoose.models.multimedia || mongoose.model('multimedia', multimediaSchema);
const musicianProfile =
  mongoose.models.musicianProfile ||
  mongoose.model('musicianProfile', musicianProfileSchema);

// const MusicianProfile =
//   mongoose.models.MusicianProfile ||
//   mongoose.model('MusicianProfile', MusicianProfileSchema);

module.exports = {
  musicianProfile: musicianProfile,
  contactDetails: contactDetails,
  profileMusician: profileMusician,
  socialMediaIcon: socialMediaIcon,
  multimedia: multimedia
};
