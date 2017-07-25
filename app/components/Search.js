
// Include React
var React = require("react");

var Search = React.createClass({

    // Here we render the component
    render: function() {

        return (

            <div className="container">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                  </div>
                      <div className="panel-body">
                        <div className="form-group">
                        {this.props.children}
                        </div>
                      </div>
                </div>
              </div>
            </div>
        );
    }
});


module.exports = Search;


