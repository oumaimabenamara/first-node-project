const express = require('express');
const router = express.Router();
// require todo schema
const Todo = require('../models/todoSchema');

module.exports = router;


// __________________________________________________________________
// get all todos
router.get('/todos' , async(req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// get todo by id
router.get('/todos/:id' , async(req, res) => {
    const todo = await Todo.findById(req.params.id).exec();
    res.json(todo);
});

// add todo
router.post('/todos' , async(req, res) => {
    const createdTodo = await Todo.create(req.body);
    // console.log(req.body);
    res.json(createdTodo);
    // console.log(createdTodo);
});

// update toodo by id 
router.put('/todos/:id' , async(req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updatedTodo);
});

// delete todo by id 
router.delete('/todos/:id' , async(req, res) => {
    const todoToDelete = await Todo.findByIdAndDelete(req.params.id);
    res.json({message: "todo deleted !"});
});
