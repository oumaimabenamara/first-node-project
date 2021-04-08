const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    title: String,
    description: String
},
{
    versionkey: false ,
    timestamps: true
});

module.exports = mongoose.model('tag', tagSchema);