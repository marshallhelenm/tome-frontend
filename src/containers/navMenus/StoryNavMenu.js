import React from "react";
import StoriesButton from "../../components/navButtons/StoriesButton";
import CharactersButton from "../../components/navButtons/CharactersButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import WorldsButton from "../../components/navButtons/WorldsButton";
import StoryNotesButton from "../../components/navButtons/StoryNotesButton";
import { connect } from "react-redux";

const StoryNavMenu = () => {
  return (
    <>
      <WorldsButton />
      <StoriesButton />
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

export default connect(mapStateToProps)(StoryNavMenu);
