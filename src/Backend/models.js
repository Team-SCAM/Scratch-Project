const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://Cennak123:Faramarz123@cluster0.fdobf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
dbName: 'myFirstDatabase'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;

  const eventSchema = new Schema({
    title: String,
    body: String
  });
  const Event = mongoose.model('event', eventSchema);

  module.exports = {
  Event
  };