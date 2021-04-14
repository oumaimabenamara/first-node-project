// create an app
const express = require('express');
const app = express();
const port = 3000;

// connect to database
// const connect = require('./database/connect');

// cors config
const cors = require('cors');
app.use(cors());

// morgan config
const morgan = require('morgan');
app.use(morgan('dev'));

// body_parser config
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// import connection to database
const connect = require('./database/connect');

// import routings
const todoAPI = require('./routes/todoAPI');
const userAPI = require('./routes/userAPI');

const userDetailsAPI = require('./routes/userDetailsAPI');
const postAPI = require('./routes/postAPI');
const tagAPI = require('./routes/tagAPI');

const mailAPI = require('./routes/mailAPI');

// require env
// const dotenv = require('dotenv');
// dotenv.config();
require('dotenv').config();
// console.log(process.env.EMAIL);

// require schedule
const schedule = require('./schedule');

// use routings
// app.use('', userAPI);
app.use('/api/v1', userAPI);
// app.use('', todoAPI);
app.use('/api/v2', todoAPI);

app.use('/api/v3', userDetailsAPI);
app.use('/api/v4', postAPI);
app.use('/api/v5', tagAPI);

app.use('', mailAPI)


// __________________________________________________________________
app.get('/', (req, res) => {
  res.json({message: 'Hello Katoutou!'});
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })




