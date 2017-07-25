// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Results = require("../components/Results");
var Search = require("../components/Search");
var Saved = require("../components/Search");
var ResultsChild = require("../components/Child/ResultsChild");
var SearchChild = require("../components/Child/SearchChild");
var SavedChild = require("../components/Child/SavedChild");



// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

          <Route path="results" component={Results}>
             <Route path="resultsChild" component={ResultsChild} />
             <IndexRoute component={ResultsChild} />
          </Route>

          <Route path="search" component={Search}>
              <Route path="searchChild" component={SearchChild} />
              <IndexRoute component={SearchChild} />
          </Route>

        <Route path="saved" component={Saved}>
            <Route path="savedChild" component={SavedChild} />
            <IndexRoute component={SavedChild} />
        </Route>

        <IndexRoute component={Results} />

    </Route>
  </Router>

);
