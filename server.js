/*

*/

//Get Local Files
const database = require('./database');

// Get express Module
const express = require('express');
// Get Handlebars Module
const hbs = require('hbs');

// Set Up Application
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Handlebar Helpers

// Express Middleware

// Give Access To Static Files
app.use(express.static(__dirname + '/public'))

// Set up HTTP Route Handlers
	// Root
	app.get('/',(req,res)=>{
		res.render('home');
	});
	//About
	app.get('/about',(req,res)=>{
		res.render('about');
	});


// Set Local Host Port
app.listen(3000);


// Test To See if Server is Activated
console.log('Server Activated!');