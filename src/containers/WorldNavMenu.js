import React from "react";
import StoriesButton from "../components/StoriesButton";
import CharactersButton from "../components/CharactersButton";
import LocationsButton from "../components/LocationsButton";
import HomeButton from "../components/HomeButton";
import WorldsButton from "../components/WorldsButton";

const WorldNavMenu = () => {
  return (
    <>
      <HomeButton />
      <WorldsButton />
      <StoriesButton />
      <CharactersButton />
      <LocationsButton />
    </>
  );
};

export default WorldNavMenu;
