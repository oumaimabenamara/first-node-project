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



// __________________________________________________________________
router.put('/users/affectDetails/:idUser/:idDetails', async(req, res) => {
    const UserPlusDetails = await User.findByIdAndUpdate(req.params.idUser, {usersDetails: req.params.idDetails}, {new: true});
    res.json({message: 'Details affected successfully !'});
});

router.put('/users/desaffectDetails/:idUser/:idDetails', async(req, res) => {
    const UserMoinsDetails = await User.findByIdAndUpdate(req.params.idUser, {usersDetails: ""}, {new: true});
    res.json({message: 'Details desaffected successfully !'});
});

// __________________________________________________________________
router.put('/users/affectTodos/:idUser/:idTodo', async(req, res) => {
    const UserPlusTodo = await User.findByIdAndUpdate(req.params.idUser, {$push: {todos: req.params.idTodo}}, {new: true});
    res.json({message: 'Todos affected successfully !'});
});

router.put('/users/desaffectTodos/:idUser/:idTodo', async(req, res) => {
    const UserMoinsTodo = await User.findByIdAndUpdate(req.params.idUser, {$pull: {todos: req.params.idTodo}}, {new: true});
    res.json({message: 'Todos desaffected successfully !'});
});

// __________________________________________________________________
router.put('/users/affectTodos/:idUser/:idPost', async(req, res) => {
    const UserPlusPost = await User.findByIdAndUpdate(req.params.idUser, {$push: {posts: req.params.idPost}}, {new: true});
    res.json({message: 'Posts affected successfully !'});
});

router.put('/users/desaffectTodos/:idUser/:idPost', async(req, res) => {
    const UserMoinsPost = await User.findByIdAndUpdate(req.params.idUser, {$pull: {posts: req.params.idPost}}, {new: true});
    res.json({message: 'Posts desaffected successfully !'});
});
