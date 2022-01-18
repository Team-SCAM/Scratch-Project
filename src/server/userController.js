const bcrypt = require('bcryptjs')
const models = require('./models.js');

const userController = {};


/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.getAllUsers = (req, res, next) => {
  models.User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};

/**
* createUser - create and save a new User into the database.
*/
userController.createUser = async (req, res, next) => {
  // write code here
  const {username, password} = req.body;
  if (!username || !password) return next('Missing username or password in userController.createUser');
  console.log(username, password)
  try{
  const user = await models.User.create({username, password})
  res.locals.user = user
  return next()
  }
  catch(error){
  console.log(error)}
};




/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = (req, res, next) => {
  const {username, password} = req.body;
  if (!username || !password) return next('Missing username or password in userController.verifyUser');

  models.User.findOne({username}, (err, user) => {
    console.log(user)
    if (err) {
      // database error
      return next('Error in userController.verifyUser: ' + JSON.stringify(err));
    } else if (!user) {
      // no user was found
      res.send('false')
      //res.redirect('localhost:3000/signup')
    } else {console.log(password, user.password)
      // user was found, compare the password to the hashed one
      bcrypt.compare(password, user.password)
        //const result = password === user.password
        .then(result => {
          if (!result) {
            console.log(result)
            // password did not match
            res.send('false password')
          }
          else {
            // password did match, save user for following middlewares
            res.locals.user = user;
            return next();
          }
        })
        .catch(err => {
          // error while bcrypt was running
          return next('Error in userController.verifyUser: ' + JSON.stringify(err));
        })
    }
  })
}

module.exports = userController;
