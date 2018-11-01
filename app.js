


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

// list all campgrounds
app.get("/campgrounds", function(req, res){
  // dummy data for campgrounds
  var campgrounds = [
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_1280.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2015/07/10/17/24/night-839807_1280.jpg"}
  ]

  // pass campgrounds data to list all campgrounds on campgrounds.ejs
  res.render("campgrounds", {campgrounds: campgrounds});
});

// ============================================================================
// START SERVER
// ============================================================================
app.listen(3000, function(){
  console.log("Yelpcamp server has started...");
});