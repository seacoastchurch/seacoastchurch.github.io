/*

*/

//Get Local Files
const database = require('./database');

// Get Express Module
const express = require('express');
// Get Express Mailer Module
const mailer = require('express-mailer');
// Get Handlebars Module
const hbs = require('hbs');

// Set Up Application
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Initialize Varibles
var currentGroup = "none";
var currentPlaylist = "none";
var siteActive = true;
var currentVideo = 'None';
var currentPath = app.path();

// Handlebar Helpers
hbs.registerHelper("name",() => {
	// Function
});
// Express Middleware
app.use((req, res, next) => {
	if (siteActive) {
		console.log('Site Ready');
		next();
	}
	else {
		console.log('Site Currently Under Maintenance');
		res.render('maintenance');
	}
});

// Give Access To Static Files
app.use(express.static(__dirname + '/public'));

// Set up HTTP Route Handlers
	// Home
	app.get('/',(req,res)=>{
		res.render('home');
	});

	// Videos
	app.get('/playlist',(req,res)=>{
		res.render('playlists');
	});
		// Playlists
		app.get('/playlist/' + currentPlaylist,(req,res)=>{
			res.render('playlists');
		});
		// Videos
		app.get('/playlist/' + currentPlaylist + '/' + currentVideo,(req,res)=>{
			res.render('playlists');
		});

	// Ministry
	app.get('/ministries',(req,res)=>{
		res.render('ministry');
	});
		// Individual Ministries
		app.get('/youth',(req,res)=>{
				res.render('youth');
			});
		app.get('/mens',(req,res)=>{
				res.render('men');
			});	
		app.get('/womens',(req,res)=>{
				res.render('women');
			});	
		app.get('/collegeandcareer',(req,res)=>{
				res.render('college');
			});		

	// Life Groups
	app.get('/lifegroups',(req,res)=>{
		res.render('lifegroup');
	});
		// Individual Life Groups
		app.get('/lifegroups/' + currentGroup,(req,res)=>{
			res.render('group');
		});
	// About
	app.get('/about',(req,res)=>{
		res.render('about');
	});

// Redirect to valid handler
app.use((req, res, next) => {
	res.render('404');
});

// Set Port
app.listen(3000, () => {
	console.log('Server Activated!');
});