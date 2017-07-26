
// Include React
const React = require("react");
const Saved = require('./Saved');

const Results = React.createClass({

    getInitialState: function(){
        return {
            title: "",
            date: "",
            url: "",
            results: []
        }
    },

    // Here we render the component
    render: function() {

        return (
        <div>
            <div className="container">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Results</h3>
                  </div>
                  <div className="panel-body">

                      <ul className="list-group">
                          <li className="list-group-item">Cras justo odio<button type="submit" className="btn btn-default center-align">Save</button></li>
                          <li className="list-group-item">Dapibus ac facilisis in<button type="submit" className="btn btn-default t">Save</button> </li>
                          <li className="list-group-item">Morbi leo risus<button type="submit" className="btn btn-default t">Save</button></li>
                          <li className="list-group-item">Porta ac consectetur ac<button type="submit" className="btn btn-default ">Save</button></li>
                          <li className="list-group-item">Vestibulum at eros<button type="submit" className="btn btn-default">Save</button></li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            <Saved />
        </div>
        );
    }
});


module.exports = Results;


