import React from "react";
import StoriesButton from "../../components/navButtons/StoriesButton";
import CharactersButton from "../../components/navButtons/CharactersButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import WorldButton from "../../components/navButtons/WorldButton";
import StoryNotesButton from "../../components/navButtons/StoryNotesButton";
import { connect } from "react-redux";

const StoryNavMenu = props => {
  return (
    <>
      <WorldButton world={props.worlds.world} />
      <StoriesButton />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(StoryNavMenu);
