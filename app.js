/*

*/

//Get Local Files
	const database = require('./database');
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

// Modules
	// Get Express Module
	const express = require('express');
	// Get Handlebars Module
	const hbs = require('hbs');
	// Get Compression Module
	const compression = require('compression');
	// Get Helmet Module
	const helmet = require('helmet');

// Set Up Application
	var app = express();
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

// Give Access To Static Files
app.use(express.static(__dirname + '/public'));

// Call Routes
	homeRoute.call(app);
	videoRoute.call(app);
	ministryRoute.call(app);
	lifeRoute.call(app);
	aboutRoute.call(app);
	adminRoute.call(app);

// send 404 error
	app.use((req, res, next) => {
		res.render('404');
	});

// Set Port
app.listen(app.get('port'), () => {
	console.log('Server Active!');
});