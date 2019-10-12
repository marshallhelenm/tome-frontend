import React from "react";
import HomeButton from "../components/HomeButton";
import CharactersButton from "../components/CharactersButton";
import StoriesButton from "../components/StoriesButton";
import StoryButton from "../components/StoryButton";
import LocationsButton from "../components/LocationsButton";
import WorldButton from "../components/WorldButton";
import { connect } from "react-redux";

const CharactersNavMenu = props => {
  return (
    <>
      <HomeButton />
      <WorldButton world={props.worlds.world} />
      {props.stories.story? <StoryButton story={props.stories.story} /> : null}
      <StoriesButton />
      <CharactersButton />
      <LocationsButton />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(CharactersNavMenu);
