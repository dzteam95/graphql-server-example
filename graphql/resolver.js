
const Todo = require('./todo');
const todoItem = require('../models/todoItem');
const mongoose = require('mongoose');
const TodoItem = mongoose.model('TodoItem', todoItem);


function respond(err, savedTodoItem, res) {
  if (err) {
    return res.status(500).json({error: err});
  }
  return res.json(result);
}

const todoListController = {
   getTodo: (req, res) => {
    TodoItem.findById(req.params.id, (err, todoItem) => {
    return respond(err, todoItem, res);
    });
  },

    createTodo: ({input}) => {
        const newTodoItem = new TodoItem(input);
        newTodoItem.save((err, savedTodoItem) => {
        });
        return new TodoItem(newTodoItem);
    },
    updateTodo: ({id, input}) => {
      TodoItem.findByIdAndUpdate(id, input,(err, todoItem) => {
          });
        return TodoItem(input);
     },

     deleteTodo: ({id, input}) => {
      TodoItem.findOneAndDelete(id, input,(err, todoItem) => {
          });
        return TodoItem(input);
     },
};


module.exports = todoListController;