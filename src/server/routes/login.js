const express = require('express');
const router = express.Router();
const userController = require('../userController.js');
const cookieController = require('../cookieController.js');
const sessionController = require('../sessionController.js');


router.post('/verify', 
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    console.log('redirect ding')
    res.redirect('http://localhost:8080/')
  });


  module.exports = router