import React, { Component } from "react";
import { setLoggedOut } from "../../actions/authActions";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
  WorldNavMenu,
  StoriesNavMenu,
  LocationsNavMenu,
  CharactersNavMenu,
  StoryNotesNavMenu,
  StoryNoteNavMenu,
  WorldNoteNavMenu,
  WorldNotesNavMenu,
  StoryNavMenu,
} from "./index.js";
import {
  WorldsButton,
  WorldButton,
  StoryButton,
  LogOutButton,
} from "../../components/navButtons/";
import { getLocal } from "../../App";
import { Box } from "grommet";

class NavMenu extends Component {
  render() {
    // console.log("navmenu props: ", this.props);
    return (
      <Box>
        <Route path="/tome" render={(props) => <WorldsButton {...props} />} />
        <Route
          path="/tome/worlds/:id"
          render={(props) => <WorldNavMenu {...props} />}
        />
        <Route
          path="/tome/new/stories"
          render={(props) => <StoriesNavMenu {...props} />}
        />

        <Route
          path="/tome/stories/:id"
          render={(props) => <StoryNavMenu {...props} />}
        />
        <Route
          path="/tome/stories"
          exact
          render={(props) => <StoriesNavMenu {...props} />}
        />
        <Route
          path="/tome/characters"
          render={(props) => <CharactersNavMenu {...props} />}
        />
        <Route
          path="/tome/new/characters"
          render={(props) => <CharactersNavMenu {...props} />}
        />
        <Route
          path="/tome/story_notes"
          exact
          render={(props) => <StoryNotesNavMenu {...props} />}
        />
        <Route
          path="/tome/story_notes/:id"
          render={(props) => <StoryNoteNavMenu {...props} />}
        />
        <Route
          path="/tome/world_notes"
          exact
          render={(props) => <WorldNotesNavMenu {...props} />}
        />
        <Route
          path="/tome/world_notes/:id"
          render={(props) => <WorldNoteNavMenu {...props} />}
        />
        <Route
          path="/tome/new/world_notes"
          exact
          render={(props) => <WorldNotesNavMenu {...props} />}
        />
        <Route
          path="/tome/locations"
          render={(props) => <LocationsNavMenu {...props} />}
        />
        <Route
          path="/tome/new/locations"
          render={(props) => <LocationsNavMenu {...props} />}
        />
        <Route
          path="/tome/new/stories"
          render={(props) => (
            <WorldButton {...props} world={getLocal("world")} />
          )}
        />
        <Route
          path="/tome/new/story_notes"
          render={(props) => {
            return (
              <>
                <WorldButton {...props} world={getLocal("world")} />
                <StoryButton {...props} story={this.props.stories.story} />
              </>
            );
          }}
        />
        <Route path="/tome" render={(props) => <LogOutButton {...props} />} />
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedOut: () => dispatch(setLoggedOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
