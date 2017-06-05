/*

*/

module.exports = {
	"call": (app) => {
		// Action Tags
		app.use((req, res, next) => {
			// Get Query
			var actionTag = req.query;
			// Find Asked Query
			if(actionTag.live == "") {
				// Set Appropriate Local Varibles to True
				app.locals.isLive = true;
				app.locals.giveEnabled = false;
			}
			else if(actionTag.give == "") {
				// Set Appropriate Local Varibles to True
				app.locals.giveEnabled = true;
				app.locals.isLive = false;
			}
			// Set Locals To False
			else {
				// Set All Varibles To False
				app.locals.isLive = false;
				app.locals.giveEnabled = false;
			}
			// Go To Next
			next();
		});

		// To-Do: Video Tag
	}
}