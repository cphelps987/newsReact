

// Include React
var React = require("react");


var Saved = React.createClass({

    getInitialState: function(){
        return {
            saved: []
        }
    },

    // Here we render the component
    render: function() {


        return (
                <div className="container">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Saved Articles</h3>
                            </div>
                            <div className="panel-body">

                                <ul className="list-group">
                                    <li className="list-group-item">Cras justo odio<button type="submit" className="btn btn-default">Remove</button></li>
                                    <li className="list-group-item">Dapibus ac facilisis in<button type="submit" className="btn btn-default">Remove</button> </li>
                                    <li className="list-group-item">Morbi leo risus<button type="submit" className="btn btn-default">Remove</button></li>
                                    <li className="list-group-item">Porta ac consectetur ac<button type="submit" className="btn btn-default">Remove</button></li>
                                    <li className="list-group-item">Vestibulum at eros<button type="submit" className="btn btn-default">Remove</button></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

        );
    }
});


module.exports = Saved;


