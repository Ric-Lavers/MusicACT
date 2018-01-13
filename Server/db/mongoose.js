var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/MusicACT', {
  useMongoClient: true
});

const db = mongoose.connection;
db.on('open', () => {
  console.log('SUcccessfuly connect mongoDB');
});

module.exports = mongoose;
