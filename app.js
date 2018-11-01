/******************************************************************************
* Add landing page
* Add campgrounds page that lists all campgrounds

Each campground has:
* Name
* Image
******************************************************************************/


var express = require("express");
var app = express();

app.set("view engine", "ejs");

// ============================================================================
// ROUTES
// ============================================================================

// root ROUTE
app.get("/", function(req, res){
  res.render("landing");
});


// ============================================================================
// START SERVER
// ============================================================================
app.listen(3000, function(){
  console.log("Yelpcamp server has started...");
})