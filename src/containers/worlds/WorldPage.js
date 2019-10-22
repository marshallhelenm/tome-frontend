import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import {
  fetchStories,
  fetchWorldStories,
  currentStory
} from "../../actions/storiesActions.js";
import {
  fetchWorldCharacters,
  currentCharacter
} from "../../actions/charactersActions.js";
import {
  currentLocation,
  fetchWorldLocations
} from "../../actions/locationsActions.js";
import { deleteWorld } from "../../actions/worldsActions.js";
import Display from "../../components/Display.js";
import { assignCrumbs } from "../../actions/breadcrumbActions";

class WorldPage extends Component {
  componentDidMount() {
    console.log("WorldPage props: ", this.props);
    this.props.currentStory(null);
    this.props.currentCharacter(null);
    this.props.currentLocation(null);
    this.props.fetchWorldStories(this.props.world);
    this.props.fetchWorldCharacters(this.props.world);
    this.props.fetchWorldLocations(this.props.world);
    this.props.assignCrumbs([
      ["/tome", "Home"],
      ["/tome/worlds", "Worlds"],
      [
        `/tome/worlds/${this.props.worlds.world.id}`,
        this.props.worlds.world.name
      ]
    ]);
  }

  redirectOnDelete = () => {
    this.props.history.push(`/tome/worlds`);
  };

  handleDeleteWorld = () => {
    this.props.deleteWorld(this.props.world, this.redirectOnDelete);
  };
 
  render() {
    return (
      <Display
        {...this.props}
        handleDelete={this.handleDeleteWorld}
        IMG={this.props.world ? this.props.world.images[0].url : null}
        img_alt={this.props.world.name}
        category={"worlds"}
        item={this.props.world}
        title={this.props.world.name}
        text={this.props.world.description}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    worlds: state.worlds.worlds,
    logged_in: state.auth.logged_in,
    world: state.worlds.world
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchStories: () => dispatch(fetchStories()),
    currentStory: story => dispatch(currentStory(story)),
    currentCharacter: character => dispatch(currentCharacter(character)),
    currentLocation: location => dispatch(currentLocation(location)),
    fetchWorldStories: world => dispatch(fetchWorldStories(world)),
    fetchWorldCharacters: world => dispatch(fetchWorldCharacters(world)),
    fetchWorldLocations: world => dispatch(fetchWorldLocations(world)),
    deleteWorld: (world, redirect) => dispatch(deleteWorld(world, redirect)),
    assignCrumbs: trail => dispatch(assignCrumbs(trail))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(WorldPage));
