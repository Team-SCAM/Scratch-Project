const express = require('express');
const router = express.Router();
const userController = require('../userController.js');
const cookieController = require('../cookieController.js');
const sessionController = require('../sessionController.js');

router.post('/', 
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    res.redirect('http://localhost:8080')
  });


  module.exports = router