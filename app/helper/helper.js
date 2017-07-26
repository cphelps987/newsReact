

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
    //get api response
    api: function(){

        return axios.get('/api')
            .then(function(response){

                console.log(response);
                return response;
            });
    },
    //save results from the request in the api
    save: function(article){

        return axios.post('/api/saved', article)
            .then(function(results){

                console.log("api article in db");
            })
    },
    //get info from api
    get: function(){

        return axios.get('api/saved')
            .then(function(response){

                return response;

            })
    },
    //delete from api
    delete: function (article_id) {

        return axios.post('api/saved/delete/', article_id)
            .then(function(response){

                return response;
            })
    },


};


module.exports = helpers;


//nyt jax for node

/*var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
 url += '?' + $.param({
     'api-key': "3416517b01a04bba84fa9dba8f7437e0",
     'q': "dog",
     'begin_date': "19910819",
     'end_date': "20150819"
     });
 $.ajax({
     url: url,
     method: 'GET',
     }).done(function(result) {
     console.log(result);
     }).fail(function(err) {
     throw err;
 });*/