/*

*/

module.exports = {
	"call": (app) => {
		app.get('/ministries',(req,res)=>{
			res.render('ministry');
		});
			// Individual Ministries
			app.get('/ministries/youth',(req,res)=>{
					res.render('youth');
					// To-Do: Add Data and Bindings
				});
			app.get('/ministries/mens',(req,res)=>{
					res.render('men');
					// To-Do: Add Data and Bindings
				});	
			app.get('/ministries/womens',(req,res)=>{
					res.render('women');
					// To-Do: Add Data and Bindings
				});	
			app.get('/ministries/collegeandcareer',(req,res)=>{
					res.render('college');
					// To-Do: Add Data and Bindings
				});		
	}
}