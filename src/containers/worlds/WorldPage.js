import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import {
  fetchStories,
  fetchWorldStories,
  currentStory,
} from "../../actions/storiesActions.js";
import { fetchWorldNotes } from "../../actions/worldNotesActions.js";
import {
  fetchWorldCharacters,
  currentCharacter,
} from "../../actions/charactersActions.js";
import {
  currentLocation,
  fetchWorldLocations,
} from "../../actions/locationsActions.js";
import { deleteWorld, fetchWorld } from "../../actions/worldsActions.js";
import Display from "../../components/Display.js";
import { assignCrumbs } from "../../actions/breadcrumbActions";
import { getLocal } from "../../App.js";

class WorldPage extends Component {
  componentDidMount() {
    console.log("WorldPage props: ", this.props);
    this.props.currentStory(null);
    this.props.currentCharacter(null);
    this.props.currentLocation(null);
    this.props.fetchWorldStories(getLocal("world"));
    this.props.fetchWorldCharacters(getLocal("world"));
    this.props.fetchWorldLocations(getLocal("world"));
    this.props.fetchWorldNotes(getLocal("world"));
    this.props.assignCrumbs([
      ["/tome", "Home"],
      ["/tome/worlds", "Worlds"],
      [`/tome/worlds/${getLocal("world").id}`, getLocal("world").name],
    ]);
  }

  redirectOnDelete = () => {
    this.props.history.push(`/tome/worlds`);
  };

  handleDeleteWorld = () => {
    this.props.deleteWorld(this.props.world, this.redirectOnDelete);
  };

  refreshWorld = () => {
    this.props.fetchWorld(getLocal("world").id);
  };

  render() {
    console.log("WorldPage props: ", this.props);
    let world = getLocal("world");
    return (
      <Display
        {...this.props}
        handleDelete={this.handleDeleteWorld}
        refreshItem={this.refreshWorld}
        img_alt={world.name}
        category={"worlds"}
        item={world}
        title={world.name}
        text={world.description}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    worlds: state.worlds.worlds,
    logged_in: state.auth.logged_in,
    world: state.worlds.world,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStories: () => dispatch(fetchStories()),
    currentStory: (story) => dispatch(currentStory(story)),
    currentCharacter: (character) => dispatch(currentCharacter(character)),
    currentLocation: (location) => dispatch(currentLocation(location)),
    fetchWorldStories: (world) => dispatch(fetchWorldStories(world)),
    fetchWorldCharacters: (world) => dispatch(fetchWorldCharacters(world)),
    fetchWorldLocations: (world) => dispatch(fetchWorldLocations(world)),
    fetchWorldNotes: (world) => dispatch(fetchWorldNotes(world)),
    deleteWorld: (world, redirect) => dispatch(deleteWorld(world, redirect)),
    fetchWorld: (id) => dispatch(fetchWorld(id)),
    assignCrumbs: (trail) => dispatch(assignCrumbs(trail)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(WorldPage));
