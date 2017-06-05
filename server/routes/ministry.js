/*

*/

module.exports = {
	"call": (app) => {
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
	}
}