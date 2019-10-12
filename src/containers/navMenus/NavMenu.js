import React, { Component } from "react";
import "../../css/2018_notebook/css/coda-slider.css";
import "../../css/2018_notebook/tooplate_style.css";
import { setLoggedOut } from "../../actions/authActions";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import LogOutButton from "../../components/navButtons/LogOutButton";
import WorldNavMenu from "./WorldNavMenu";
import StoriesNavMenu from "./StoriesNavMenu";
import CharactersNavMenu from "./CharactersNavMenu";
import LocationsNavMenu from "./LocationsNavMenu";

class NavMenu extends Component {
  // Will create methods etc to make sure that menu shows correct things at the correct times

  render() {
    return (
      <div id="menu">
        <ul className="navigation">
          <Route path="/tome/worlds/:id" render={props => <WorldNavMenu />} />
          <Route path="/tome/stories" render={props => <StoriesNavMenu />} />
          <Route
            path="/tome/characters"
            render={props => <CharactersNavMenu />}
          />
          <Route
            path="/tome/locations"
            render={props => <LocationsNavMenu />}
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
