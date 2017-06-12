/*

*/

module.exports = {
	"call": (app) => {
		app.get('/about_us',(req,res)=>{
				res.render('about');
				// To-Do: Add Data and Bindings
			});
	}
}