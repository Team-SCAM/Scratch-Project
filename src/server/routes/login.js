const express = require('express');
const router = express.Router();
const userController = require('../userController.js');
const cookieController = require('../cookieController.js');
const sessionController = require('../sessionController.js');

router.post('/', 
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    res.redirect('http://localhost:3000/calendar/retrieveAll')
  });


  module.exports = router