const express = require('express');
const router = express.Router();
// require Tag schema
const Tag = require('../models/tagSchema');

module.exports = router;


// __________________________________________________________________
// get all tags
router.get('/tags' , async(req, res) => {
    const allTags = await Tag.find();
    res.json(allTags);
});

// get tag by id
router.get('/tags/:id' , async(req, res) => {
    const oneTag = await Tag.findById(req.params.id).exec();
    res.json(oneTag);
});

// add tags
router.post('/tags' , async(req, res) => {
    const createdTag = await Tag.create(req.body);
    // console.log(req.body);
    res.json(createdTag);
    // console.log(createdTag);
});

// update tags by id 
router.put('/tags/:id' , async(req, res) => {
    const updatedTag = await Tag.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updatedTag);
});

// delete tags by id 
router.delete('/tags/:id' , async(req, res) => {
    const TagToDelete = await Tag.findByIdAndDelete(req.params.id);
    res.json({message: "Tag deleted !"});
});