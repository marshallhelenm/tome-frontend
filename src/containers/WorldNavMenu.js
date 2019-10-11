import React from "react";
import StoriesButton from "../components/StoriesButton";
import CharactersButton from "../components/CharactersButton";
import LocationsButton from "../components/LocationsButton";

const WorldNavMenu = () => {
  return (
    <>
      <StoriesButton />
      <CharactersButton />
      <LocationsButton />
    </>
  );
};

export default WorldNavMenu;
