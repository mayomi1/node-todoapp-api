/**
 * Created by mayomi on 7/26/17.
 */
'use strict';
// Add all the package to be use
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const router = require('./routers');
const config = require('./config/main');


const server = app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');

// Database Connection
mongoose.connect(config.database,  {
    useMongoClient: true
});

//Set up bodyParse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS from client-side
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST,PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

router(app);