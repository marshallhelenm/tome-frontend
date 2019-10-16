import React from "react";
import StoriesButton from "../../components/navButtons/StoriesButton";
import CharactersButton from "../../components/navButtons/CharactersButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import WorldsButton from "../../components/navButtons/WorldsButton";
import StoryButton from "../../components/navButtons/StoryButton";
import { connect } from "react-redux";

const LocationNavMenu = props => {
  return (
    <>
      <WorldsButton />
      <StoriesButton />
      {props.stories.story ? <StoryButton story={props.stories.story} /> : null}
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

export default connect(mapStateToProps)(LocationNavMenu);
