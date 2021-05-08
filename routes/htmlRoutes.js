// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
const express = require("express");


var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------


  // npm install ejs
  // Template engine. (1) Where is 'views' (2) Type of ejs
  console.log(__dirname);
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");
  app.set(express.static("public"));

  app.get("/tables", function (req, res) {
    res.render(`pages/tables`, {tableData, waitListData});
  });

  app.get("/reserve", function (req, res) {
    res.render(`pages/reserve`);
    });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.render(`pages/home`);
    });
};
