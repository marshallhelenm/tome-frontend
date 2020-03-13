import React from "react";
import StoriesButton from "../../components/navButtons/StoriesButton";
import WorldButton from "../../components/navButtons/WorldButton";
import { connect } from "react-redux";

const StoryNavMenu = props => {
  return (
    <>
      <WorldButton world={props.worlds.world} />
      <StoriesButton />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(StoryNavMenu);
