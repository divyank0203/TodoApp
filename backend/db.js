// here we create all the schema for the data that we store in const {second} = 
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://divyankh444:8WHTMSTcKQDpIjGo@cluster0.ymjmmnx.mongodb.net/TodoApp');

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    completed: { type: Boolean, default: false}
})

const Todo = mongoose.model('todos', todoSchema);

module.exports = {
    Todo
}