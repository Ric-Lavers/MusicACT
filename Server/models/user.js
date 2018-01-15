const mongoose = require('../db/mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const validator = require('validator');

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
  firstname: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  }
});

UserSchema.plugin(passportLocalMongoose, {
  // Needed to set usernameUnique to true to avoid a mongodb index on the username column!
  usernameField: 'email',
  usernameLowerCase: true,
  session: false
});

const User = mongoose.model.User || mongoose.model('User', UserSchema);

module.exports = User;
