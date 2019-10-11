import React from "react";
import HomeButton from "../components/HomeButton";
import CharactersButton from "../components/CharactersButton";
import LocationsButton from "../components/LocationsButton";

const StoriesNavMenu = () => {
  // will need to bring in state of current world for purposes of world button. which i haven't made yet.
  return (
    <>
      <HomeButton />
      {/* a button to take you back to the current world: */}
      {/* <WorldButton world={} /> */}
      <CharactersButton />
      <LocationsButton />
    </>
  );
};

export default StoriesNavMenu;
