const express = require('express');
const bodyParser =require('body-parser');

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');



mongoose.Promise = global.Promise;

const app = express(); // create express app

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
  next();
});

app.use(bodyParser.urlencoded({extended: true})); // parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.json()); // parse requests of content-type - application/json

// Require Notes routes
require('./app/routes/note.routes.js')(app);

//creating simple route for get request
app.get('/', (req, res)=>{
    res.json({
        "Message":"Welcome to Easy Notes"
    });
})

// Connecting to the database
mongoose.connect(dbConfig.url,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connected to db");
    }).catch(err=>{
        console.log(err);
        process.exit();
    })

//listen on port 3000
app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});