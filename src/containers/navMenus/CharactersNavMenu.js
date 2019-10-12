import React from "react";
import HomeButton from "../components/navButtons/HomeButton";
import CharactersButton from "../components/navButtons/CharactersButton";
import StoriesButton from "../components/navButtons/StoriesButton";
import StoryButton from "../components/navButtons/StoryButton";
import LocationsButton from "../components/navButtons/LocationsButton";
import WorldButton from "../components/navButtons/WorldButton";
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