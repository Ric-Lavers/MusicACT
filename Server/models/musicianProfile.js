const mongoose = require('../db/mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const validator = require('validator');

const MusicianProfileSchema = mongoose.Schema({
  input: {
    type: String
  },
  token: {
    type: String
  }
});

// MusicianProfileSchema.methods.fullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

const MusicianProfile =
  mongoose.model.MusicianProfile ||
  mongoose.model('MusicianProfile', MusicianProfileSchema);

module.exports = MusicianProfile;
