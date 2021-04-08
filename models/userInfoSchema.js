const mongoose = require('mongoose');

const usersInfoSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    age : Number
},{
    timestamps: true,
    skipversionning: true
    // versionkey: false
});

module.exports = mongoose.model('users' , usersInfoSchema);