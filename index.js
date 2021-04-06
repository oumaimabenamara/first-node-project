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



app.get('/', (req, res) => {
  res.send('Hello Katoutou!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})