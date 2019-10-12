import React from "react";
import HomeButton from "../components/HomeButton";
import CharactersButton from "../components/CharactersButton";
import LocationsButton from "../components/LocationsButton";
import WorldButton from "../components/WorldButton";
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
