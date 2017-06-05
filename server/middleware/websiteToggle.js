/*

*/

module.exports = {
	"call": (app) => {
		var siteActive = true;
		app.use((req, res, next) => {
			if (siteActive) next();
			else res.render('maintenance');
		})
	}
}