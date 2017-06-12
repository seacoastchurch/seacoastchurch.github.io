/*

*/

// Get Express Mailer Module
const mailer = require('express-mailer');
// Get TLS Module
const tls = require('tls');

module.exports = {
	"call": (app,database) => {
		app.get('/lifegroups',(req,res)=>{
				database.child('readOnly/lifeGroups').once('value').then((snap) => {
					res.render('lifegroup',{
						"groupList": snap.val()
					});
				});
			});
				// Individual Life Groups
				app.get('/lifegroups/:name',(req,res)=>{
					var lifeGroupExists = false;
					database.child('readOnly/lifeGroups').once('value').then((snap) => {
						const group = req.path.split("/").pop();
						const groupObj = snap.val();
						for (var i in groupObj) { 
							if(groupObj[i].url == group){
								var lifeGroupExists = true;
								var desiredGroup = groupObj[i];
								break;
							}
						}
						if (lifeGroupExists == true){
							res.render('group', {
								'group': desiredGroup
							});
						}
						else {
							res.render('error')
						}
					});

				});
	}
}