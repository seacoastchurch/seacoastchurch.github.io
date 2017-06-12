/*

*/

module.exports = {
	"call": (app) => {
		// Action Tags
		app.use((req, res, next) => {
			// Get Query
			var actionTag = req.query;
			// Set Locals To False
			app.locals.isLive = false;
			app.locals.giveEnabled = false;
			// Find Asked Query
			if(actionTag.live == "") {
				// Set Appropriate Local Varibles to True
				app.locals.isLive = true;
			}
			if(actionTag.give == "") {
				// Set Appropriate Local Varibles to True
				app.locals.giveEnabled = true;
			}
			// Go To Next
			next();
		});
	}
}