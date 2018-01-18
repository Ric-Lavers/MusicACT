const mongoose = require('../db/mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const validator = require('validator');

const MusicianProfileSchema= mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{ value } is not a Email'
    }
  },
  passwo

});

MusicianProfileSchema.methods.fullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const MusicianProfile = mongoose.models.MusicianProfile || mongoose.model('MusicianProfile', MusicianProfileSchema);

module.exports = MusicianProfile
