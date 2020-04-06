import React from "react";
import CharactersButton from "../../components/navButtons/CharactersButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import WorldNotesButton from "../../components/navButtons/WorldNotesButton";
import { connect } from "react-redux";
import WorldButton from "../../components/navButtons/WorldButton";
import { getLocal } from "../../App";

const WorldNoteNavMenu = props => {
  return (
    <>
      <WorldButton story={getLocal("world")} />
      <WorldNotesButton />
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

export default connect(mapStateToProps)(WorldNoteNavMenu);
