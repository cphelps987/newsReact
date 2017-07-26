//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const Article = require('./models/Articles.js');
//port
const PORT = process.env.PORT || 8080;

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

// Routes
// Sends everything to html
app.get('/', function(req, res){
    res.sendFile('./public/index.html');
})
// Gets Articles
app.get('/api/saved', function(req, res) {
    Article.find({})
        .exec(function(err, doc){
            if(err){
                console.log(err);
            } else {
                res.send(doc);
            }
        })
});
// Post Article
app.post('/api/saved', function(req, res){
    const newArticle = new Article({
        title: req.body.title,
        date: req.body.date,
        url: req.body.url
    });

    newArticle.save(function(err, doc){
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.json(doc);
        }
    });
});
// Delete Article
app.delete('/api/saved/:id', function(req, res){
    Article.find({'_id': req.params.id}).remove()
        .exec(function(err, doc) {
            res.send(doc);
        });
});

// Listen on port 3000
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

