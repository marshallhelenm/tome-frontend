import React from "react";
import { connect } from "react-redux";
import CharactersButton from "../../components/navButtons/CharactersButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import WorldButton from "../../components/navButtons/WorldButton";

const LocationsNavMenu = props => {
  return (
    <>
      <WorldButton world={props.worlds.world} />
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

export default connect(mapStateToProps)(LocationsNavMenu);
