const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'tag'}]
},
{
    versionkey: false ,
    timestamps: true
});

module.exports = mongoose.model('post', postSchema);