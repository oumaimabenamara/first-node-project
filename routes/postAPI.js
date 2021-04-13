const express = require('express');
const router = express.Router();
// require Post schema
const Post = require('../models/postSchema');

module.exports = router;


// __________________________________________________________________
// get all Posts
router.get('/posts' , async(req, res) => {
    const allPosts = await Post.find();
    res.json(allPosts);
});

// get post by id
router.get('/posts/:id' , async(req, res) => {
    const onePost = await Post.findById(req.params.id).exec();
    res.json(onePost);
});

// add post
router.post('/posts' , async(req, res) => {
    const createdPost = await Post.create(req.body);
    // console.log(req.body);
    res.json(createdPost);
    // console.log(createdPost);
});

// update post by id 
router.put('/posts/:id' , async(req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updatedPost);
});

// delete post by id 
router.delete('/posts/:id' , async(req, res) => {
    const PostToDelete = await Post.findByIdAndDelete(req.params.id);
    res.json({message: "Post deleted !"});
});



// __________________________________________________________________
router.put('/posts/affectTags/:idPost/:idTag', async(req, res) => {
    const postPlusNewTag = await Post.findByIdAndUpdate(req.params.idPost, {$push: {tags: req.params.idTag}}, {new: true});
    res.json({message: 'Tag affected successfully !'});
});

router.put('/posts/desaffectPosts/:idPost/:idTag', async(req, res) => {
    const postMoinsNewTag = await Post.findByIdAndUpdate(req.params.idPost, {$pull: {tags: req.params.idTag}}, {new: true});
    console.log(postMoinsNewTag);
    res.json({message: 'tag desaffected successfully !'});
});