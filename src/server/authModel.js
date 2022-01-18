/*


const mongoose = require('mongoose');
const MONGO_URI_AUTH = 'mongodb+srv://Cennak123:Faramarz123@cluster0.fdobf.mongodb.net/Sweat_Tracker_Auth?retryWrites=true&w=majority'

// mongoose.connect(MONGO_URI_AUTH, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   dbName: 'Sweat_Tracker_Auth' 
// })
// .then(() => console.log('Connected to Mongo DB Auth'))
// .catch(err => console.log(err));

const Schema = mongoose.Schema;


// const sessionSchema = new Schema({
//   cookieId: { type: String, required: true, unique: true },
//   createdAt: { type: Date, expires: 30, default: Date.now }
// });

// const Session = mongoose.model('Session', sessionSchema);



const conn = mongoose.createConnection(MONGO_URI_AUTH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Sweat_Tracker_Auth' 
})



const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now }
});
const Session = conn.model('Session', sessionSchema);






const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');


const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});
const User= conn.model('User', userSchema);

// const userSchema = new Schema({
//   username: {type: String, required: true, unique: true},
//   password: {type: String, required: true}
// });

// mongoose middleware that will run before the save to the collection happens
// the callback here CANNOT be written in arrow function as the context of 'this' is important
userSchema.pre('save', function(next) {
  // within this context, 'this' refers to the document about to be saved
  // in our case, it should have properties username and password
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    // reassign the document's password to it's hashed version
    this.passwrod = hash;
    // this next call makes mongoose move on to the saving the document
    return next();
  })
});

// const User = mongoose.model('User', userSchema);













module.exports = {
  Session,
  User
}

*/