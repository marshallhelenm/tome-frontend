import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import MainContainer from "./containers/MainContainer.js";
import LoginPage from "./containers/LoginPage.js";
import SignUpPage from "./containers/SignUpPage.js";
import WorldPage from "./containers/WorldPage.js";

const App = props => {
  console.log("App props: ", props);
  return (
    <div className="App">
      {/* conditionally route based on logged in flag in store or use a higher order component */}
      <Router>
        <Route path="/home" render={props => <MainContainer {...props} />} />
        <Route path="/login" render={props => <LoginPage {...props} />} />
        <Route path="/login" render={props => <SignUpPage {...props} />} />
        <Route path="/worlds/:id" render={props => <WorldPage {...props} />} />
      </Router>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    logged_in: state.auth.logged_in,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(App);
