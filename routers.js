/**
 * Created by mayomi on 7/26/17.
 */
const TodoController = require('./controllers/todo');

const express = require('express');


module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router(),
        todoRoutes = express.Router();


    // Set auth routes as subgroup/middleware to apiRoutes
    apiRoutes.use('/todo', todoRoutes);

    //List all todos
    todoRoutes.get('/', TodoController.getAllTodo);


    //show one todo
    todoRoutes.get('/:todoId', TodoController.getOneTodo);

    // Route to add/create a todo list
    todoRoutes.post('/create', TodoController.addTodo);

    //Route to edit the todo list
    todoRoutes.patch('/edit/:todoId', TodoController.editTodo);

    //Route to delete a todo list
    todoRoutes.delete('/delete/:todoId', TodoController.deleteTodo);

    // Set url for API group routes
    app.use('/api', apiRoutes);
};


