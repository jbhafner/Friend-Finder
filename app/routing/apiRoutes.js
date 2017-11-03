// ============ APIROUTES.JS - SERVES API REQUESTS ============= //

// ============ REQUIRE/LOAD NPM MODULES ============= //
var bodyParser = require('body-parser');
var path = require('path');

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({
//   type: "application/vnd.api+json"
// }));

// ------------ Load friends.js data --------------- //
var friendList = require('../data/friends.js');

// ------------ Handles API calls --------------- //
module.exports = function(app) {

		app.get('/api/friends', function (req, res) {
			res.json(friendList);
		});		

		app.post('/api/friends', function (req, res) {
			var newFriendDetails = req.body;
			var newFriendScoresArray = req.body.scores;
			var newFriendMarker = -1;
			var newFriendScore = 100;
			var currentFriendScore = 0;
			console.log('postFriend function ran');
			console.log('req.body: ', req.body);
			console.log('req.body.scores: ', req.body.scores);
			console.log('friendList[0]: ', friendList[0]);
			console.log('friendList[0].scores[0]: ', friendList[0].scores[0]);


			// Loop through all friends to determine friend with closest score
			for (i=0; i < friendList.length; i++) {
				console.log('i = ', i);
				for (j=0; j < newFriendScoresArray.length; j++) {
					console.log('j = ', j)
					console.log('friendList[i].scores[j]: ',friendList[i].scores[j]);
					currentFriendScore = currentFriendScore + Math.abs(friendList[i].scores[j] - newFriendScoresArray[j]);
				}
				if (currentFriendScore <= newFriendScore) {
					newFriendMarker = i;
					newFriendScore = currentFriendScore;
				}
				currentFriendScore = 0;
			}
			friendList.push(newFriendDetails);
			newFriendMatch = friendList[newFriendMarker];
			res.json(newFriendMatch);
		});
};
