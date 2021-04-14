const mongoose = require('mongoose');

const usersInfoSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    photo: String,
    usersDetails: {type: mongoose.Schema.Types.ObjectId, ref: 'userDetails'},
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: 'todo'}],
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'post'}] 
},{
    timestamps: true,
    skipversionning: true
    // versionkey: false
});

module.exports = mongoose.model('users' , usersInfoSchema);