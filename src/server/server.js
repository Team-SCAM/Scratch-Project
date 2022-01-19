const express = require('express');
const path = require('path');
const app = express();
const calendarRouter = require('./routes/calendar.js')
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const signupRouter = require('./routes/signup.js')
const loginRouter = require('./routes/login.js')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../src')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/calendar', calendarRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

app.use((req,res) => res.status(404).send('This is not the page you are looking for...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});





app.listen(3000, () => {
  console.log('Server listening on port 3000');
});