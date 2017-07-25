// Include React
var React = require("react");

var Chat = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Child #1</h3>
            </div>
            <div className="panel-body">

              <p>
                <a className="btn btn-warning btn-sm">Show Grandchild #1</a>
                <a className="btn btn-success btn-sm">Show Grandchild #2</a>
              </p>

              <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">Grandchild #1</h3>
                </div>
                <div className="panel-body">
                  Panel content
                </div>
              </div>

              <div className="panel panel-success">
                <div className="panel-heading">
                  <h3 className="panel-title">Grandchild #2</h3>
                </div>
                <div className="panel-body">
                  Panel content
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
});

// Export the component ba`2ck for use in other files
module.exports = Chat;
