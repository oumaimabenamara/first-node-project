const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: String,
    description: String
},
{
    timestamps: true,
    versionkey: false
});

module.exports = mongoose.model('todo', todoSchema);