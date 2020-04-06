import React from "react";
import StoriesButton from "../../components/navButtons/StoriesButton";
import CharactersButton from "../../components/navButtons/CharactersButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import { connect } from "react-redux";
import WorldNotesButton from "../../components/navButtons/WorldNotesButton";

const WorldNavMenu = () => {
  return (
    <>
      <StoriesButton />
      <CharactersButton />
      <LocationsButton />
      <WorldNotesButton />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(WorldNavMenu);
