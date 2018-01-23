const mongoose = require('../db/mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const MusicianProfileSchema = require('./musicianProfile');

const UserSchema = new mongoose.Schema({
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
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  registrationDate: {
    type: Date,
    require: true
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MusicianProfile'
  }
});

UserSchema.plugin(passportLocalMongoose, {
  // Needed to set usernameUnique to true to avoid a mongodb index on the username column!
  usernameField: 'email',
  usernameLowerCase: true,
  session: false
});

// bcrypt to encrypt the password
UserSchema.pre('save', function(next) {
  var user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model.User || mongoose.model('User', UserSchema);

module.exports = User;
