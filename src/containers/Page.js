import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Worlds, WorldPage, NewWorld, EditWorld } from "./worlds";
import { Stories, StoryPage, EditStory, NewStory } from "./stories";
import {
  CharacterPage,
  Characters,
  NewCharacter,
  EditCharacter,
} from "./characters";
import {
  LocationPage,
  Locations,
  NewLocation,
  EditLocation,
} from "./locations";
import { WorldNote, WorldNotes, NewWorldNote } from "./world_notes";
import { StoryNote, StoryNotes, NewStoryNote } from "./story_notes";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import { Main } from "grommet";
// import UnderConstruction from "../components/UnderConstruction";

class Page extends Component {
  render() {
    // console.log("Page props: ", this.props);
    return (
      <Main>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          {/* <Route path="/" exact component={derConstruction/>} /> */}
          <Route path="/signup" exact component={SignUpPage} />

          <Route path="/tome/worlds" exact component={Worlds} />
          <Route path="/tome/new/worlds" component={NewWorld} />
          <Route path="/tome/worlds/:id" component={WorldPage} />
          <Route path="/tome/edit/worlds/:id" component={EditWorld} />

          <Route path="/tome/stories" exact component={Stories} />
          <Route path="/tome/stories/:id" exact component={StoryPage} />
          <Route path="/tome/new/stories" component={NewStory} />
          <Route path="/tome/edit/stories/:id" component={EditStory} />

          <Route path="/tome/characters" exact component={Characters} />
          <Route path="/tome/characters/:id" exact component={CharacterPage} />
          <Route path="/tome/new/characters" component={NewCharacter} />
          <Route path="/tome/edit/characters/:id" component={EditCharacter} />

          <Route path="/tome/locations" exact component={Locations} />
          <Route path="/tome/locations/:id" exact component={LocationPage} />
          <Route path="/tome/new/locations" component={NewLocation} />
          <Route path="/tome/edit/locations/:id" component={EditLocation} />

          <Route path="/tome/story_notes" exact component={StoryNotes} />
          <Route path="/tome/story_notes/:id" exact component={StoryNote} />
          <Route path="/tome/new/story_notes" exact component={NewStoryNote} />

          <Route path="/tome/world_notes" exact component={WorldNotes} />
          <Route path="/tome/world_notes/:id" exact component={WorldNote} />
          <Route path="/tome/new/world_notes" exact component={NewWorldNote} />
        </Switch>
      </Main>
    );
  }
}

export default Page;
