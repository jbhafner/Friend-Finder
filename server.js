// ============ SERVER.JS - MAIN MODULE ============= //

// ============ REQUIRE/LOAD NPM MODULES ============= //
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// ------------ Sets up the Express app --------------- //
// ------------ to handle data parsing --------------- //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// ============ DEFINE ROUTES ============= //
console.log('require apiRoutes and htmlRoutes');
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// ============ START LISTENER ON PORT ============= //

console.log('app STARTED listening on port ' + PORT);
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// ============ EXPORT APP ============= //
module.exports = app;