import React from "react";
import WorldsButton from "../../components/navButtons/WorldsButton";
import CharactersButton from "../../components/navButtons/CharactersButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import { connect } from "react-redux";
import WorldButton from "../../components/navButtons/WorldButton";
import { getLocal } from "../../App";

const WorldNotesNavMenu = props => {
  return (
    <>
      <WorldButton world={getLocal("world")} />
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

export default connect(mapStateToProps)(WorldNotesNavMenu);
