// Include React
var React = require("react");
//router
var Link = require("react-router").Link;

//other files
var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");

//helper - ajax
var helpers = require("../helper/helper");

// Create the Main component
var Main = React.createClass({

    getInitialState: function(){
        return{
            searchTerm: "",
            startDate: "",
            endDate: "",
            results: "",
            saved: []
        }
    },

  // Here we render the component
  render: function() {

        return (

            <div className="container">
                <div className="jumbotron">
                    <h2><strong>New York Times Article Scrapper</strong></h2>

                </div>

                <div className="row">
                    {this.props.children}
                </div>

            </div>

        );
  }
});

// Export the component back for use in other files
module.exports = Main;
