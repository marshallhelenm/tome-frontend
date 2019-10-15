import React from "react";
import { connect } from "react-redux";
import CharactersButton from "../../components/navButtons/CharactersButton";
import StoriesButton from "../../components/navButtons/StoriesButton";
import StoryButton from "../../components/navButtons/StoryButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import WorldButton from "../../components/navButtons/WorldButton";

const CharactersNavMenu = props => {
  return (
    <>
      <WorldButton world={props.worlds.world} />
      {props.stories.story ? <StoryButton story={props.stories.story} /> : null}
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
