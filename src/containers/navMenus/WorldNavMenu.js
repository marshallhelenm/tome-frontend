import React from "react";
import StoriesButton from "../../components/navButtons/StoriesButton";
import CharactersButton from "../../components/navButtons/CharactersButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import HomeButton from "../../components/navButtons/HomeButton";
import WorldsButton from "../../components/navButtons/WorldsButton";

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
