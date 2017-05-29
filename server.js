//Get Local Files
const database = require('./database');

// Get express Module
const express = require('express');

// Get Handlebars Module
const hbs = require('handlebars');

// Initiate Express
var app = express();


// Set up HTTP Route Handlers
// Root
app.get('/',(req,res)=>{
	res.send('<h1>helloWorld!</h1>')
})

//About
app.get('/about',(req,res)=>{
	res.send("About")
});


// Set Local Host Port
app.listen(3000);



// Test To See if Server is Activated
console.log('Server Activated!');