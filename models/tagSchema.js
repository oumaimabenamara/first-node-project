const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    title: String,
    description: String,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref:'post'}]
},
{
    versionkey: false ,
    timestamps: true
});

module.exports = mongoose.model('tag', tagSchema);