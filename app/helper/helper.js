

//look at axios docs and 100 days of coding
const axios = require('axios');

const key = "3416517b01a04bba84fa9dba8f7437e0";

const helpers = {
    runQuery: function(topic, startDate, endDate){
        // Scrape from website
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" + topic + "&begin_date=" + startDate + "0101&end_date=" + endDate + "0101";

        return axios.get(queryURL)
            .then(function(response){
                let newResults = [];
                let fullResults = response.data.response.docs;
                let counter = 0;
                // Get articles that meet search params
                for(let i = 0; i < fullResults.length; i++){
                    if(counter > 4) {
                        return newResults;
                    }
                    if(fullResults[counter].headline.main && fullResults[counter].pub_date && fullResults[counter].web_url) {
                        newResults.push(fullResults[counter]);
                        counter++;
                    }
                }
                return newResults;
            })
    },
    // Save Articles to database
    postArticle: function(title, date, url){
        axios.post('/api/saved', {title: title, date: date, url: url})
            .then(function(results){
                console.log("Saved to MongoooseDB");
                return(results);
            })
    }
};


module.exports = helpers;


