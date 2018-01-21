// const mongoose = require('../db/mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');
// const validator = require('validator');
//
// const contactDetailsSchema = mongoose.Schema({
//   emailMusician: {
//     type: String,
//     trim: true,
//     required: true,
//     unique: true,
//     validate: {
//       validator: validator.isEmail,
//       message: '{ value } is not a Email'
//     }
//   },
//   phoneNumber:{
//     type: String,
//     required: false,
//     minlength: 8
//   },
//   pointOfContact:{
//     type: String,
//     required: true
//   }
// });
// const profileMusicianSchema = mongoose.Schema({
//   imageSrc: {
//     type:String,
//     trim: true,
//     required:true
//   },
//   name:{
//     type:String,
//     required:true
//   },
//   bio:{
//     type:String,
//     required:true
//   }
// });
// const socialMediaIconSchema = mongoose.Schema({
//   address: {
//     type: String,
//     required:true
//   }
// });
// const multimediaSchema = mongoose.Schema({
//   address: {
//     type: String,
//     required:true
//   }
// });
//
// const MusicianProfileSchema= mongoose.Schema({
//   contactDetails:{ contactDetailsSchema },
//   profile:{ profileMusicianSchema },
//   socialMediaIcons:[socialMediaIconSchema],
//   multimedia: [multimediaSchema]
//   },
//   passwo
//
// });
//
// MusicianProfileSchema.methods.fullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }
//
// const MusicianProfile = mongoose.models.MusicianProfile || mongoose.model('MusicianProfile', MusicianProfileSchema);
//
// module.exports = MusicianProfile
