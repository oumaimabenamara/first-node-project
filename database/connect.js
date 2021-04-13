const mongoose = require('mongoose')


async function connect()
{
    const options = {
        useNewUrlParser: true ,
        useUnifiedTopology: true
    };

    // connect to database
    // mongoose.connect('mongodb://localhost:27017/myappUsers', {useNewUrlParser: true});
    // const success = await mongoose.connect('mongodb://localhost:27017/myapp', options);
    // console.log(success);
    mongoose.connect('mongodb://localhost:27017/myapp', options).then(success => {
        console.warn('success')}).catch(err => {console.error('error')});
};

connect();


