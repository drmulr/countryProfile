var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Using Handlebars here
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

//Database Connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE
});

// Serve index.handlebars to the root route
app.get("/", function(req, res) {
    res.render("index");
});

app.post("/api/join", function(req, res) {
  connection.query("INSERT INTO wycliffe (author, quote) VALUES (?, ?)", [
    req.body.author, req.body.quote
  ], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server faliure
      return res.status(500).end();
    }
    //NOTE === Need send back confirmation that email was added to list
    res.json({ id: result.insertId });
  });
});

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});