const express = require('express');
const router = express.Router();
// require UserDet schema
const UserDet = require('../models/userDetailsSchema');

module.exports = router;


// __________________________________________________________________
// get all userDetails
router.get('/usersDetails' , async(req, res) => {
    const allUsersDetails = await UserDet.find();
    res.json(allUsersDetails);
});

// get userDetails by id
router.get('/usersDetails/:id' , async(req, res) => {
    const oneUserDetails = await UserDet.findById(req.params.id).exec();
    res.json(oneUserDetails);
});

// add userDetails
router.post('/usersDetails' , async(req, res) => {
    const createdUserDet = await UserDet.create(req.body);
    // console.log(req.body);
    res.json(createdUserDet);
    // console.log(createdUserDet);
});

// update userDetails by id 
router.put('/usersDetails/:id' , async(req, res) => {
    const updatedUserDet = await UserDet.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updatedUserDet);
});

// delete userDetails by id 
router.delete('/usersDetails/:id' , async(req, res) => {
    const UserDetToDelete = await UserDet.findByIdAndDelete(req.params.id);
    res.json({message: "UserDet deleted !"});
});
