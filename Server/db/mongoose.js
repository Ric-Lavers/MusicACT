var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/MusicACT', {//get started mongoose guides.
  useMongoClient: true
});

const db = mongoose.connection;
db.on('open', () => {
  console.log('Succcessfuly connect mongoDB');
});

module.exports = mongoose;
