

//look at axios docs and 100 days of coding
var axios = require('axios');


const helpers = {

    search: function(searchTerm, startDate, endDate) {

        const key = "3416517b01a04bba84fa9dba8f7437e0";

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term.searchTerm + "&begin_date=" + term.startDate + "&end_date=" + term.endDate + "&api-key=" + key;

        console.log("Helpers URL" + url);

        return new Promise (function (resolve, reject){

            axios.get(url)
                .then( function(response) {
                    console.log("Helpers Response" + response);
                    var resutls = [];
                    for (var i = 0; i < response.data.response.docs.length; i++) {
                        resutls.push({
                            title: response.data.response.docs[i].headline.main,
                            pub: response.data.response.docs[i].pub_date,
                            url: response.data.response.docs[i].web_url
                        })
                    }

                    if (resutls.length != 0){
                        console.log(resutls);
                        resolve(resutls);
                    } else {
                        reject (Error ("error"));
                    }

                });
        });


    },



};


module.exports = helpers;


