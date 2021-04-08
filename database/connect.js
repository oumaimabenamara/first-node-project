const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true ,
    useUnifiedTopology: true
}

// connect to database
// mongoose.connect('mongodb://localhost:27017/myappUsers', {useNewUrlParser: true});
mongoose.connect('mongodb://localhost:27017/myapp', options);
