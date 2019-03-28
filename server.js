var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "./app/public")));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// // Import routes and give the server access to them.
// var apiRoutes = require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js")(app);
// require("./app/routing/apiRoutes.js")(app);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});