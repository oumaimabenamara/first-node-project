const mongoose = require('mongoose');

const userDetailsSchema = mongoose.Schema({
    adress: String,
    zipCode: String,
    city: String
},
{
    versionkey: false ,
    timestamps: true
});

module.exports = mongoose.model('userDetails', userDetailsSchema);