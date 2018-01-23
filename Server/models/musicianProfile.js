const mongoose = require('../db/mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const validator = require('validator');

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
  mongoose.model('ContactDetails', contactDetailsSchema);
const profileMusician =
  mongoose.models.profileMusician ||
  mongoose.model('ProfileMusician', profileMusicianSchema);
const socialMediaIcon =
  mongoose.models.socialMediaIcon ||
  mongoose.model('SocialMediaIcon', socialMediaIconSchema);
const multimedia =
  mongoose.models.multimedia || mongoose.model('Multimedia', multimediaSchema);
const musicianProfile =
  mongoose.models.musicianProfile ||
  mongoose.model('MusicianProfile', musicianProfileSchema);

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
