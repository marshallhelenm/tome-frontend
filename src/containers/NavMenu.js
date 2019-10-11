import React, { Component } from "react";
import "../css/2018_notebook/css/coda-slider.css";
import "../css/2018_notebook/tooplate_style.css";
import { setLoggedOut } from "../actions/authActions";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import StoriesButton from "../components/StoriesButton";
import LogOutButton from "../components/LogOutButton";

class NavMenu extends Component {
  // Will create methods etc to make sure that menu shows correct things at the correct times



  render() {
    return (
      <Router>
        <div id="menu">
          <ul className="navigation">
            <Route path="/tome" render={props => (<LogOutButton {...props} />)} />
            {/* <Route path="/stories" render={props => <StoriesButton {...props} />} /> */}
          </ul>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoggedOut: () => dispatch(setLoggedOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu);
