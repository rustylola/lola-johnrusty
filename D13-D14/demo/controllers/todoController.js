const Todo = require('../models/todoModel');

const createTodo = async (req,res) => {
    try {
        const {title, description} = req.body;
        const todo = new Todo({
            title,
            description
        });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({error:'Server Error'});
    }
}

// Get All Todo
const getAllTodos = async (req,res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({error:'Server Error'});
    }
}

// Get Todo Id
const getTodoById = async (req,res) =>{
    try {
        // GET access to the parameters in the link
        // example : sample.com/getTodyById/21
        const {id} = req.params;
        const todo = await Todo.findById(id);
        if(!todo){
            return res.status(404).json({
                error: 'Todo not found'
            });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({error:'Server Error'});
    }
}

// Update Todo
const updateTodo = async (req, res) =>{
    try {
        const {id} = req.params;
        const {title, description} = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id,{
            title, 
            description
        });
        if(!updatedTodo){
            return res.status(404).json({error: 'Todo not found'});
        }
        res.status(200).json({message: 'Update Successfully'});
    } catch (error) {
        res.status(500).json({error:'Server Error'});
    }
}

// Delete Todo
const deleteTodo = async (req,res) =>{
    try {
        // GET access to the parameters in the link
        // example : sample.com/getTodyById/21
        const {id} = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if(!deletedTodo){
            return res.status(404).json({
                error: 'Todo not found'
            });
        }
        res.status(200).json({message: 'Delete Successfully'});
    } catch (error) {
        res.status(500).json({error:'Server Error'});
    }
}

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};