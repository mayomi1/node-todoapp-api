/**
 * Created by mayomi on 7/26/17.
 */
'use strict';
const Todo = require('../models/todo');

exports.addTodo = function (req, res, next) {
    //Collect the input for form
    let todoTitle = req.body.todoTitle;
    let todoDate = req.body.todoDate;

    // check if title field is empty
    if (!todoTitle) {
        return res.status(401).json({error: true, msg: "Todo title is required"})
    }


    //Save the input by creating a new instance of the Todo schema
    const newTodo = new Todo({
        title: todoTitle,
        date: todoDate
    });
    newTodo.save(function (err, theTodo) {
        //If an error occur
        if (err) {
            next(err);
        }
        return res.status(201).json({error: false, Todo: theTodo})
    })
};

exports.editTodo = function (req, res, next) {
    let todoId = req.params.todoId;
    let todoTitle = req.body.todoTitle;
    let todoDate = req.body.todoDate;

    Todo.findByIdAndUpdate(todoId,
        {"title": todoTitle, "date": todoDate},
        function (err, theUpdatedTodo) {
            if (err) {
                next(err);
            }
            return res.status(200).json({error: false, Todo: theUpdatedTodo});
        })
};

exports.deleteTodo = (req, res, next)=> {
    let todoId = req.params.todoId;
    Todo.findOneAndRemove(todoId, function (err) {
        if (err) {
            next(err);
        }
        return res.status(200).json({error: false, msg: "Successfully Deleted"});
    });
};


exports.getAllTodo = (req, res, next)=> {
    Todo.find({}, function (err, allTodo) {
        if (err) {
            next(err);
        }
        return res.status(200).json({error: false, Todos: allTodo})
    });
};

exports.getOneTodo = (req, res, next)=> {
    let todoId = req.params.todoId;
    Todo.findById(todoId, (err, todo)=> {
        if (err) {
            next(err);
        }
        return res.status(200).json({error: false, todo: todo})
    });
};
