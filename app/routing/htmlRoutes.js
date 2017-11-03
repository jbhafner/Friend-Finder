// ============ HTMLROUTES.JS - SERVES HTML PAGES ============= //

// ============ REQUIRE/LOAD NPM MODULES ============= //
var path = require('path');

// ------------ Routes to serve HTML pages --------------- //
module.exports = function(app) {

	// Get home page
	app.get('/', function (req,res) {
		console.log('router.get / selected');
		res.sendFile(path.join(__dirname,'../public/home.html'));
	});

	// Get Survey page
	app.get('/survey', function (req,res) {
		// res.render('survey');

		res.sendFile(path.join(__dirname,'../public/survey.html'));

	});

	// Get Home Page if any other url selected
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname,'../public/home.html'));
	});
};