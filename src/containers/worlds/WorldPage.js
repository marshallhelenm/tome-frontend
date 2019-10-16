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

class WorldPage extends Component {
  componentDidMount() {
    console.log("WorldPage props: ", this.props);
    this.props.fetchWorldStories(this.props.world);
    this.props.fetchWorldCharacters(this.props.world);
    this.props.fetchWorldLocations(this.props.world);
    this.props.currentStory(null);
    this.props.currentCharacter(null);
    this.props.currentLocation(null);
  }

  handleDeleteWorld = () => {
    this.props.deleteWorld(this.props.world);
    this.props.history.push(`/tome/worlds`);
  };

  render() {
    return (
      <Display
        {...this.props}
        handleDelete={this.handleDeleteWorld}
        IMG={this.props.world ? this.props.world.img : null}
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
    deleteWorld: world => dispatch(deleteWorld(world))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(WorldPage));
