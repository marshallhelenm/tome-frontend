import React, { Component } from "react";
import "../../css/notebook.css";
import "../../css/tooplate_style.css";
import { setLoggedOut } from "../../actions/authActions";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import LogOutButton from "../../components/navButtons/LogOutButton";
import WorldNavMenu from "./WorldNavMenu";
import StoriesNavMenu from "./StoriesNavMenu";
import LocationsNavMenu from "./LocationsNavMenu";
import CharactersNavMenu from "./CharactersNavMenu";
import StoryNotesNavMenu from "./StoryNotesNavMenu";
import WorldNotesNavMenu from "./WorldNotesNavMenu";
import WorldsButton from "../../components/navButtons/WorldsButton";
import WorldButton from "../../components/navButtons/WorldButton";
import StoryButton from "../../components/navButtons/StoryButton";
import StoryNavMenu from "./StoryNavMenu";
import StoryNoteNavMenu from "./StoryNoteNavMenu";
import WorldNoteNavMenu from "./WorldNoteNavMenu";
import { getLocal } from "../../App";

class NavMenu extends Component {
  // Will create methods etc to make sure that menu shows correct things at the correct times
  render() {
    // console.log("navmenu props: ", this.props);
    return (
      <div id="tabs">
        <div className="tabs">
          <Route path="/tome" render={props => <WorldsButton {...props} />} />
          <Route
            path="/tome/worlds/:id"
            render={props => <WorldNavMenu {...props} />}
          />

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
            path="/tome/characters"
            render={props => <CharactersNavMenu {...props} />}
          />
          <Route
            path="/tome/story_notes"
            exact
            render={props => <StoryNotesNavMenu {...props} />}
          />
          <Route
            path="/tome/story_notes/:id"
            render={props => <WorldNoteNavMenu {...props} />}
          />
          <Route
            path="/tome/world_notes"
            exact
            render={props => <WorldNotesNavMenu {...props} />}
          />
          <Route
            path="/tome/world_notes/:id"
            render={props => <WorldNoteNavMenu {...props} />}
          />
          <Route
            path="/tome/locations"
            render={props => <LocationsNavMenu {...props} />}
          />
          <Route
            path="/tome/new/stories"
            render={props => (
              <WorldButton {...props} world={getLocal("world")} />
            )}
          />
          <Route
            path="/tome/new/story_notes"
            render={props => {
              return (
                <>
                  <WorldButton {...props} world={getLocal("world")} />
                  <StoryButton {...props} story={this.props.stories.story} />
                </>
              );
            }}
          />
          <Route path="/tome" render={props => <LogOutButton {...props} />} />
          {/* <Route path="/stories" render={props => <StoriesButton {...props} />} /> */}
        </div>
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
