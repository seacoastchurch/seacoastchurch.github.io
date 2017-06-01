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
app.disable('x-powered-by');
hbs.registerPartials(__dirname + '/views/partials/components');
hbs.registerPartials(__dirname + '/views/partials/generals');
app.set('port',process.env.PORT || 3000);
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
		// To-Do: Add Data and Bindings
	});

	// Videos
	app.get('/playlist',(req,res)=>{
		res.render('playlists');
		// To-Do: Add Data and Bindings
	});
		// Playlists
		app.get('/playlist/' + currentPlaylist,(req,res)=>{
			res.render('videos');
			// To-Do: Add Data and Bindings
		});

	// Ministry
	app.get('/ministries',(req,res)=>{
		res.render('ministry');
		// To-Do: Add Data and Bindings
	});
		// Individual Ministries
		app.get('/youth',(req,res)=>{
				res.render('youth');
				// To-Do: Add Data and Bindings
			});
		app.get('/mens',(req,res)=>{
				res.render('men');
				// To-Do: Add Data and Bindings
			});	
		app.get('/womens',(req,res)=>{
				res.render('women');
				// To-Do: Add Data and Bindings
			});	
		app.get('/collegeandcareer',(req,res)=>{
				res.render('college');
				// To-Do: Add Data and Bindings
			});		

	// Life Groups
	app.get('/lifegroups',(req,res)=>{
		res.render('lifegroup');
		// To-Do: Add Data and Bindings
	});
		// Individual Life Groups
		app.get('/lifegroups/' + currentGroup,(req,res)=>{
			res.render('group');
			// To-Do: Add Data and Bindings
		});
	// About
	app.get('/about',(req,res)=>{
		res.render('about');
		// To-Do: Add Data and Bindings
	});

// Redirect to valid handler
app.use((req, res, next) => {
	res.render('404');
	// To-Do: Add Data and Bindings
});

// Set Port
app.listen(app.get('port'), () => {
	console.log('Server Active!');
});