/*

*/

// Get Express Mailer Module
const mailer = require('express-mailer');
// Get TLS Module
const tls = require('tls');

module.exports = {
	"call": (app) => {
		var currentGroup = 'none';
		app.get('/lifegroups',(req,res)=>{
				res.render('lifegroup');
				// To-Do: Add Data and Bindings
			});
				// Individual Life Groups
				app.get('/lifegroups/:name',(req,res)=>{
					res.render('group');
					// To-Do: Add Data and Bindings
				});
	}
}