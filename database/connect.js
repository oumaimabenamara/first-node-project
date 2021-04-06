const mongoose = require('mongoose')

// connect to database
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});