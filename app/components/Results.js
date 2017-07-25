
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
                      <h2>Basic Table</h2>
                      <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                      <table className="table">
                        <thead>
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                        </tr>
                        <tr>
                          <td>Mary</td>
                          <td>Moe</td>
                          <td>mary@example.com</td>
                        </tr>
                        <tr>
                          <td>July</td><button type="submit" className="btn btn-default">Submit</button>
                          <td>Dooley</td><button type="submit" className="btn btn-default">Submit</button>
                          <td>july@example.com</td> <button type="submit" className="btn btn-default">Submit</button>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
        );
    }
});


module.exports = Search;


