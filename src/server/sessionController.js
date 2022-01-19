const models = require('./models.js');

const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
sessionController.isLoggedIn = (req, res, next) => {
  // documents in the sessions collection will expire due to the schema expire setting
  models.Session.findOne({cookieId: req.cookies.ssid}, (err, session) => {
    if (err) {
      // database error
      return next('Error in sessionController.isLoggedIn: ' + JSON.stringify(err));
    } else if (!session) {
      // no session found
      res.redirect('/login'); // the readme does specifically say re-route to '/signup' which does not make sense!
    } else {
      // session found
      return next();
    }
  })
};

/**
* startSession - create and save a new Session into the database.
  This is the middleware that we pass in either when somebody logs in or signs up
*/
sessionController.startSession = (req, res, next) => {
  models.Session.create({ cookieId: res.locals.user.id}, (err, session) => {
    if (err) return next('Error in sessionController.startSession: ' + JSON.stringify(err));
    else return next();
  });
};

module.exports = sessionController;
