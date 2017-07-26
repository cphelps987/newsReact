//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");


//port
const PORT = process.env.PORT || 3000;

const db = process.env.MONGODB_URI || "mongodb://localhost/nyt";

mongoose.connect(db, function(error) {

    if(error) {
        throw error;
    }
    else {
        console.log("connected to mongoose");
    }
});

// Require Note and Article js file inside models dir
//const Note = require("./models/Note.js");
//const Article = require("./models/Article.js");

// Our scraping tools
const request = require("request");
const cheerio = require("cheerio");
mongoose.Promise = Promise;

// Initialize Express
const app = express();

// Make public a static dir for it not to confuse routes
app.use(express.static("public"));

app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// Use morgan and body parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));


// Listen on port 3000
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

