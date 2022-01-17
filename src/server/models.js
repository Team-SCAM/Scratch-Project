const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://moore76sc:Tomoe288476!@cluster0.gqcrs.mongodb.net/Sweat_Tracker?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
dbName: 'Sweat_Tracker'
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

  module.exports = {
  Event
  };