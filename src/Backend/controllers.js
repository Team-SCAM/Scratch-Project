const models = require('../models/calendarSchemas.js');

const calendarController = {};

calendarController.createEvent = async (req, res, next) => {
  try{
    let newEvent = await models.Event.create(req.body); //creates new event with schema from the request body
    return res.status(201).json({new_event: newevent}); //returns the newly created object back to the front end directly
  } catch{
    return res.status(400).send('Create article failed!');
  };
};
calendarController.getRecentEvents = async (req, res, next) => {
  try {
    res.locals.allEvents = await models.Event.find({}).sort({_id:-1}).limit(50); //retrieve 50 most recent events and stores in locals
    return next(); //send the events to front end via router
  } catch {
    return res.status(400).send('Failed to get recent events');
  };
};
calendarController.getAllEvents = async (req, res, next) => {
  try {
    res.locals.allEvents = await models.Event.find({}).sort({_id:-1}); //retrieve all events, sorts by most recent, and stores in locals
    return next(); //send the events to frontend via router
  } catch {
    return res.status(400).send('Failed to get all events');
  };
};
calendarController.updateEvent = async (req, res, next) => {
  try {
    res.locals.updatedEvent = await models.Event.updateOne({ _id: req.query.id}, req.query);//update event.....!!!this will need to be fixed!!!
    return next(); //send the updated event to frontend via router
  } catch {
    return res.status(400).send('Failed to update event!');
  };
};
calendarController.deleteEvent = async (req, res, next) => {
  try{
    await models.Article.findOneAndDelete({ _id: req.params.id});//deletes event via ID
    return res.status(201).send('Article deleted!');//sends string as a response
  } catch {
    return res.status(400).send('Failed to delete article!');
  };
};