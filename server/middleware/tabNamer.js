/*

*/

module.exports = {
	"call": (app,hbs) => {
		app.use((req, res, next) => {
			hbs.registerHelper('pageName', (app) => {
				var tabName = req.path.split("/").pop();
				if (tabName == "") {
					tabName = "home";
				}
				formattedName = (tabName.charAt(0).toUpperCase() + tabName.substr(1,tabName.length-1)).replace("_"," ");
				return formattedName;
			});
			next();
		});
	}
}