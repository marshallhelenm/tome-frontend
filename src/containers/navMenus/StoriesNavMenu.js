import React from "react";
import CharactersButton from "../../components/navButtons/CharactersButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import WorldButton from "../../components/navButtons/WorldButton";
import { connect } from "react-redux";
import StoriesButton from "../../components/navButtons/StoriesButton";

const StoriesNavMenu = props => {
  return (
    <>
      <WorldButton world={props.worlds.world} />
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

export default connect(mapStateToProps)(StoriesNavMenu);
