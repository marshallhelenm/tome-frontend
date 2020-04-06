import React from "react";
import StoriesButton from "../../components/navButtons/StoriesButton";
import CharactersButton from "../../components/navButtons/CharactersButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import StoryButton from "../../components/navButtons/StoryButton";
import StoryNotesButton from "../../components/navButtons/StoryNotesButton";
import { connect } from "react-redux";
import WorldButton from "../../components/navButtons/WorldButton";

const StoryNotesNavMenu = props => {
  return (
    <>
      <WorldButton />
      <StoriesButton />
      <StoryButton story={props.stories.story} />
      <StoryNotesButton />
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

export default connect(mapStateToProps)(StoryNotesNavMenu);
