/*

*/

module.exports = {
	"call": (app) => {
		// Get Request
		app.get('/',(req,res)=>{
			// Call Page
			res.render('home');
			// To-Do: Add Data and Bindings
	});
	}
}