import React from "react";
import HomeButton from "../components/navButtons/HomeButton";
import CharactersButton from "../components/navButtons/CharactersButton";
import LocationsButton from "../components/navButtons/LocationsButton";
import WorldButton from "../components/navButtons/WorldButton";
import { connect } from "react-redux";

const LocationsNavMenu = props => {
  return (
    <>
      <HomeButton />
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
