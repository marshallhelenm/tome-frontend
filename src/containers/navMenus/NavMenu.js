import React, { Component } from "react";
import "../../css/coda-slider.css";
import "../../css/tooplate_style.css";
import { setLoggedOut } from "../../actions/authActions";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import LogOutButton from "../../components/navButtons/LogOutButton";
import WorldNavMenu from "./WorldNavMenu";
import StandardNavMenu from "./StandardNavMenu";
import WorldsButton from "../../components/navButtons/WorldsButton";
import HomeButton from "../../components/navButtons/HomeButton";

class NavMenu extends Component {
  // Will create methods etc to make sure that menu shows correct things at the correct times
  render() {
    // console.log("navmenu props: ", this.props);
    return (
      <div id="tabs">
        <ul className="tabs">
          <Route
            path="/tome"
            render={props => {
              return (
                <>
                  <HomeButton {...props} />
                  <WorldsButton {...props} />
                </>
              );
            }}
          />
          <Route
            path="/tome/worlds/:id"
            render={props => <WorldNavMenu {...props} />}
          />

          <Route
            path="/tome/stories"
            exact
            render={props => <StandardNavMenu {...props} />}
          />

          <Route
            path="/tome/characters"
            exact
            render={props => <StandardNavMenu {...props} />}
          />
          <Route
            path="/tome/locations"
            exact
            render={props => <StandardNavMenu {...props} />}
          />
          <Route path="/tome" render={props => <LogOutButton {...props} />} />
          {/* <Route path="/stories" render={props => <StoriesButton {...props} />} /> */}
        </ul>
      </div>
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
