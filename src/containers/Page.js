import React, { Component } from "react";
import "../css/notebook.css";
import "../css/tooplate_style.css";
// import LoginPage from "./LoginPage.js";
// import SignUpPage from "./SignUpPage.js";
import Worlds from "./worlds/Worlds.js";
import WorldPage from "./worlds/WorldPage.js";
import NewWorld from "./worlds/NewWorld.js";
import Stories from "./stories/Stories.js";
import StoryPage from "./stories/StoryPage.js";
import NewStory from "./stories/NewStory.js";
import EditStory from "./stories/EditStory.js";
import Characters from "./characters/Characters.js";
import CharacterPage from "./characters/CharacterPage.js";
import Locations from "./locations/Locations.js";
import LocationPage from "./locations/LocationPage.js";
import NewLocation from "./locations/NewLocation.js";
import EditLocation from "./locations/EditLocation.js";
import { Route } from "react-router-dom";
import EditCharacter from "./characters/EditCharacter.js";
import NewCharacter from "./characters/NewCharacter";
import EditWorld from "./worlds/EditWorld";
import StoryNotes from "./story_notes/StoryNotes";
import StoryNote from "./story_notes/StoryNote";
import BreadCrumb from "../components/BreadCrumb";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import NewNote from "./story_notes/NewNote";
import UnderConstruction from "../components/UnderConstruction";

class Page extends Component {
  render() {
    // console.log("Page props: ", this.props);
    return (
      <div id="page">
        <div id="breadcrumbs">
          <Route path="/" render={props => <BreadCrumb />} />
        </div>
        <div className="inner-page">
          <>
            <Route path="/" exact render={props => <LoginPage {...props} />} />
            {/* <Route path="/" exact render={props => <UnderConstruction/>} /> */}
            <Route
              path="/signup"
              exact
              render={props => <SignUpPage {...props} />}
            />
          </>
          <>
            <Route
              path="/tome/worlds"
              exact
              render={props => <Worlds {...props} />}
            />
            <Route
              path="/tome/new/worlds"
              render={props => <NewWorld {...props} />}
            />
            <Route
              path="/tome/worlds/:id"
              render={props => <WorldPage {...props} />}
            />
            <Route
              path="/tome/edit/worlds/:id"
              render={props => <EditWorld {...props} />}
            />
          </>
          <>
            <Route
              path="/tome/stories"
              exact
              render={props => <Stories {...props} />}
            />
            <Route
              path="/tome/stories/:id"
              exact
              render={props => <StoryPage {...props} />}
            />
            <Route
              path="/tome/new/stories"
              render={props => <NewStory {...props} />}
            />
            <Route
              path="/tome/edit/stories/:id"
              render={props => <EditStory {...props} />}
            />
          </>
          <>
            <Route
              path="/tome/characters"
              exact
              render={props => <Characters {...props} />}
            />
            <Route
              path="/tome/characters/:id"
              exact
              render={props => <CharacterPage {...props} />}
            />
            <Route
              path="/tome/new/characters"
              render={props => <NewCharacter {...props} />}
            />
            <Route
              path="/tome/edit/characters/:id"
              render={props => <EditCharacter {...props} />}
            />
          </>
          <>
            <Route
              path="/tome/locations"
              exact
              render={props => <Locations {...props} />}
            />
            <Route
              path="/tome/locations/:id"
              exact
              render={props => <LocationPage {...props} />}
            />
            <Route
              path="/tome/new/locations"
              render={props => <NewLocation {...props} />}
            />
            <Route
              path="/tome/edit/locations/:id"
              render={props => <EditLocation {...props} />}
            />
          </>
          <>
            <Route
              path="/tome/story_notes"
              exact
              render={props => <StoryNotes {...props} />}
            />
            <Route
              path="/tome/story_notes/:id"
              exact
              render={props => <StoryNote {...props} />}
            />
            <Route
              path="/tome/new/story_notes"
              exact
              render={props => <NewNote {...props} />}
            />
          </>
        </div>
      </div>
    );
  }
}

export default Page;
