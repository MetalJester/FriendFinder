
//requires the data from the friends.js file
var friendsData = require("./../data/friends");

//
module.exports = function (app) {
    app.get("/api/survey", function (req, res) {
        res.json(friendsData);
    });

    //post request to add new user
    app.post("/api/post", function (req, res) {
        
        var newFriend = req.body;
        
        friendsData.findMatch(newFriend);
        
    });

    // POST REQUEST TO ADD NEW USER
    app.post("/api/post", function (req, res) {
        let newUser = req.body;

        // Find match and add user to the friends.users array
        friends.findMatch(newUser);
        //end request
        res.status(200).end();

    });
};