const express = require('express');
const router = express.Router();

router.get('/recent', calendarController.getRecentEvents, (req, res) => {
  return res.status(201).json({entries: res.locals.recentEvents});
});

router.get('/retrieveOne', calendarController.getOneEvent, (req, res) => {
  return res.status(201).json({entries: res.locals.retrievedEvent})
});

router.get('/retrieveAll', calendarController.getAllEvents, (req, res) => {
  return res.status(201).json({entries: res.locals.allEvents})
});

router.post('/new', calendarController.createEvent);

router.put('/updateOne', calendarController.updateEvent, (req, res) => {
  return res.status(201).json({entries: res.locals.updatedEvent});
});

router.delete('/:id', calendarController.deleteEvent);




module.exports = router