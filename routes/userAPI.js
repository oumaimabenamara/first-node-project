const express = require('express');
const router = express.Router();
// require user schema
const User = require('../models/userInfoSchema');

module.exports = router;


// __________________________________________________________________
router.get('/users' , async(req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/users', async(req, res) => {
    const createdUser = await User.create(req.body);
    res.json(createdUser);
});

router.get('/users/:id', async(req, res) => {
    // console.log(req.params.id);
    const user = await User.findById(req.param.id);
    res.json(user);
});

router.put('/users/:id', async(req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updatedUser);
});

router.delete('/users/:id', async(req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json({message: 'deleted !'});
});

router.get('/users/filter1/:minAge', async(req, res) => {
    console.log(req.params.minAge);
    const ageFilteredUsers = await User.find({"age" : {$gt : req.params.minAge}});
    res.json(ageFilteredUsers);
});
router.get('/users/filter2/:maxAge', async(req, res) => {
    const ageFilteredUsers = await User.find({"age" : {$lt : req.params.maxAge}});
    res.json(ageFilteredUsers);
});
// router.get('/users/:minAgee', async(req, res) => {
//     const ageFilteredUsers = await User.find({"minAge" : {$gte : req.params.minAgee}});
//     res.json(ageFilteredUsers);
// });
// router.get('/users/:maxAgee', async(req, res) => {
//     const ageFilteredUsers = await User.find({"maxAge" : {$gte : req.params.maxAgee}})
// });
router.get('/users/filter5/:minAgee/:maxAgee', async(req, res) => {
    const ageFilteredUsers = await User.find({ $and: [ { "age": { $gte : req.params.minAgee } }, {"age": { $lte : req.params.maxAgee } } ] });
    res.json(ageFilteredUsers);
});
// router.get('/users/:minAge:maxAge', async(req, res) => {
//     const ageFilteredUsers = await User.find({"minAge"})
// });