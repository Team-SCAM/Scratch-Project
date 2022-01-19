const mongoose = require('mongoose')

const MONGO_URI = 'mongodb link'

mongoose.connect(MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
dbName: 'mongo db link'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;

  const eventSchema = new Schema({
    title: String,
    weight: Number,
    reps: Number,
    start: Date,
    end: Date

  });
  const Event = mongoose.model('event', eventSchema);





const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now }
});

const Session = mongoose.model('Session', sessionSchema);







const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');


const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

// mongoose middleware that will run before the save to the collection happens
// the callback here CANNOT be written in arrow function as the context of 'this' is important
userSchema.pre('save', function(next) {
  // within this context, 'this' refers to the document about to be saved
  // in our case, it should have properties username and password
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    // reassign the document's password to it's hashed version
    this.password = hash;
    // this next call makes mongoose move on to the saving the document
    return next();
  })
});

const User = mongoose.model('User', userSchema);






  module.exports = {
  Event,
  Session,
  User
  };