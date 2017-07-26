
// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
const ArticleSchema = new Schema({
    // title is a required string
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    date: {
        type: Date,
        default: Date.now,
        required: "Date is Required"
    },
    url: {
        type: String,
        required: true,
        required: "URL is Required",
        unique: true
    }
});

// Create the Article model with the ArticleSchema
const Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
