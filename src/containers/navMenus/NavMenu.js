import React, { Component } from "react";
import "../../css/2018_notebook/css/coda-slider.css";
import "../../css/2018_notebook/tooplate_style.css";
import { setLoggedOut } from "../../actions/authActions";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import LogOutButton from "../../components/navButtons/LogOutButton";
import WorldNavMenu from "./WorldNavMenu";
import StoriesNavMenu from "./StoriesNavMenu";
import StoryNavMenu from "./StoryNavMenu";
import CharactersNavMenu from "./CharactersNavMenu";
import CharacterNavMenu from "./CharacterNavMenu";
import LocationsNavMenu from "./LocationsNavMenu";
import LocationNavMenu from "./LocationNavMenu";
import StoryNotesNavMenu from "./StoryNotesNavMenu";
import StoryNotesButton from "../../components/navButtons/StoryNotesButton";
import WorldsButton from "../../components/navButtons/WorldsButton";

class NavMenu extends Component {
  // Will create methods etc to make sure that menu shows correct things at the correct times
  render() {
    // console.log("navmenu props: ", this.props);
    return (
      <div id="menu">
        <ul className="navigation">
          <Route path="/tome" render={props => <WorldsButton {...props} />} />
          <>
            <Route
              path="/tome/worlds/:id"
              render={props => <WorldNavMenu {...props} />}
            />
            <Route
              path="/tome/new/worlds"
              render={props => <WorldNavMenu {...props} />}
            />
            <Route
              path="/tome/edit/worlds"
              render={props => <WorldNavMenu {...props} />}
            />
          </>
          <>
            <Route
              path="/tome/stories/:id"
              render={props => <StoryNavMenu {...props} />}
            />
            <Route
              path="/tome/stories"
              exact
              render={props => <StoriesNavMenu {...props} />}
            />
            <Route
              path="/tome/edit/stories"
              render={props => <StoriesNavMenu {...props} />}
            />
            <Route
              path="/tome/new/stories"
              render={props => <StoriesNavMenu {...props} />}
            />
          </>
          <>
            <Route
              path="/tome/characters/:id"
              render={props => <CharacterNavMenu {...props} />}
            />
            <Route
              path="/tome/characters"
              exact
              render={props => <CharactersNavMenu {...props} />}
            />
            <Route
              path="/tome/new/characters"
              render={props => <CharactersNavMenu {...props} />}
            />
          </>
          <>
            <Route
              path="/tome/locations/:id"
              render={props => <LocationNavMenu {...props} />}
            />
            <Route
              path="/tome/locations"
              exact
              render={props => <LocationsNavMenu {...props} />}
            />
            <Route
              path="/tome/new/locations"
              render={props => <LocationsNavMenu {...props} />}
            />
          </>
          <>
            <Route
              path="/tome/story_notes"
              render={props => <StoryNotesNavMenu {...props} />}
            />
            <Route
              path="/tome/new/story_notes"
              render={props => <StoryNotesNavMenu {...props} />}
            />
            <Route
              path="/tome/story_notes/:id"
              render={props => <StoryNotesButton />}
            />
          </>
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
