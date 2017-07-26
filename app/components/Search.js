
// Include React
const React = require("react");
const axios = require('axios');

const Results = require('./Results');
const Saved = require('./Saved');

const helper = require('../helper/helper');



const Search = React.createClass({


    // Here we render the component
    render: function() {

        {/*constructor(props);*/}

        this.state = {
            searchTerm: '',
            startDate: 1900,
            endDate: 2017,
        };

        console.log(this.state);


        return (
            <div>

            <div className="container">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label>Topic:</label>
                      <input type="text" className="form-control" id="topic"></input>
                    </div>
                    <div className="form-group">
                      <label>Start Year:</label>
                      <input type="text" className="form-control" id="startYr"></input>
                    </div>
                    <div className="form-group">
                      <label>End Year:</label>
                      <input type="text" className="form-control" id="EndYr"></input>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <Results>
                {this.state}
            </Results>
        </div>
        );
    }
});

module.exports = Search;


