import React, { Component } from "react";
import "../css/2018_notebook/css/coda-slider.css";
import "../css/2018_notebook/tooplate_style.css";
import LoginPage from "./LoginPage.js";
import SignUpPage from "./SignUpPage.js";
import Worlds from "./worlds/Worlds.js";
import WorldPage from "./worlds/WorldPage.js";
import Stories from "./stories/Stories.js";
import StoryPage from "./stories/StoryPage.js";
import Characters from "./characters/Characters.js";
import CharacterPage from "./characters/CharacterPage.js";
import Locations from "./locations/Locations.js";
import LocationPage from "./locations/LocationPage.js";
import { Route } from "react-router-dom";

class Page extends Component {
  render() {
    console.log("Page props: ", this.props);
    return (
      <div id="content">
        <div className="scroll">
          <div className="scrollContainer">
    <div className="panel" >

            <Route path="/" exact render={props => <LoginPage {...props} />} />
            <Route path="/" exact render={props => <SignUpPage {...props} />} />

            <Route
              path="/tome/worlds"
              exact
              render={props => <Worlds {...props} />}
            />
            <Route
              path="/tome/worlds/:id"
              render={props => <WorldPage {...props} />}
            />

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
              path="/tome/locations"
              exact
              render={props => <Locations {...props} />}
            />
            <Route
              path="/tome/locations/:id"
              exact
              render={props => <LocationPage {...props} />}
            />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
