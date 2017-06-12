/*
	This script executes and starts the app all functions and usablity end up being called in this script.

*/

//Get Local Files
	// Get Routes
	const homeRoute = require('./server/routes/home');
	const videoRoute = require('./server/routes/video');
	const ministryRoute = require('./server/routes/ministry');
	const lifeRoute = require('./server/routes/life');
	const aboutRoute = require('./server/routes/about');
	const adminRoute = require('./server/routes/admin');

	// Get Middleware
	const queryHandler = require('./server/middleware/queryHandler');
	const errorHandler = require('./server/middleware/errorHandler');
	const webToggle = require('./server/middleware/websiteToggle');
	const tabNamer = require('./server/middleware/tabNamer');

// Modules
	// Get Express Module
	const express = require('express');
	// Get Handlebars Module
	const hbs = require('hbs');
	// Get Helmet Module
	const helmet = require('helmet');
	// Get Firebase Module
	const firebase = require('firebase');
	// Get Favicon Module
	const favicon = require('serve-favicon');
	// Get Path Module
	const path = require('path');

// Initialize and Set up Database
	firebase.initializeApp({
		apiKey: "AIzaSyARRdqdJbSWBeR7Kdu37Fad-zQduJtNJh0",
	    authDomain: "website-61d7f.firebaseapp.com",
	    databaseURL: "https://website-61d7f.firebaseio.com",
	    projectId: "website-61d7f",
	    storageBucket: "website-61d7f.appspot.com",
	    messagingSenderId: "209368419751"
	});
	const database = firebase.database().ref();
	const auth = firebase.auth();

// Set Up Application
	var app = express();
	app.use(favicon(path.join(__dirname, 'public', 'assets', 'favicon.ico')));
	hbs.registerPartials(__dirname + '/views/partials/components');
	hbs.registerPartials(__dirname + '/views/partials/generals');
	app.set('port',process.env.PORT || 3000);
	app.set('view engine', 'hbs');

// Security
	app.use(helmet());
	app.use(helmet.noCache());

// Call Middleware
	queryHandler.call(app);
	webToggle.call(app);
	tabNamer.call(app, hbs);
	checkForPage.call(app,database);

// Render Action Modal
var actionEnabled = true;
app.locals.renderAction = app.locals.isLive || app.locals.giveEnabled || actionEnabled;

// Give Access To Static Files
app.use(express.static(__dirname + '/public'));

// Call Routes
	homeRoute.call(app);
	videoRoute.call(app);
	ministryRoute.call(app);
	lifeRoute.call(app,database);
	aboutRoute.call(app);
	adminRoute.call(app);

// send 404 error
	app.use((req, res, next) => {
		res.status(404);
		res.render('error');
	});

// Set Port
app.listen(app.get('port'), () => {
	console.log('Server Active!');
});