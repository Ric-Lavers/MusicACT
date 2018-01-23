var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const keys = require('../config/keys');
mongoose.connect(keys.MONGO_URI, {//get started mongoose guides.
  useMongoClient: true
});

const db = mongoose.connection;
db.on('open', () => {
  console.log('Succcessfuly connect mongoDB');
});

module.exports = mongoose;
