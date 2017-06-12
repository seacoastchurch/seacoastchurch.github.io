	/*

*/

module.exports = {
	"call":	(app) => {
		// Series
		app.get('/series',(req,res)=>{
			res.render('playlists');
			// To-Do: Add Data and Bindings
		});
		// Playlists
		app.get('/series/:name',(req,res)=>{
			res.render('videos');
			// To-Do: Add Data and Bindings
		});
	}
}