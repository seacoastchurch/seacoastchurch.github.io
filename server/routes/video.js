/*

*/

module.exports = {
	"call":	(app) => {
		var currentPlaylist = 'none';
		var currentVideo = 'none';
		app.get('/playlist',(req,res)=>{
			res.render('playlists');
			// To-Do: Add Data and Bindings
		});
			// Playlists
			app.get('/playlist/:name',(req,res)=>{
				res.render('videos');
				// To-Do: Add Data and Bindings
			});
	}
}