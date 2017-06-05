/*

*/

module.exports = {
	"call": (app) => {
		app.get('/about',(req,res)=>{
				res.render('about');
				// To-Do: Add Data and Bindings
			});
	}
}