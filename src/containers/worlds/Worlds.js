import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/2018_notebook/css/coda-slider.css";
import "../../css/2018_notebook/tooplate_style.css";
import Gallery from "../Gallery.js";
import {
  currentCharacter,
  setStoryCharacters
} from "../../actions/charactersActions.js";
import {
  fetchWorldLocations,
  currentLocation
} from "../../actions/locationsActions.js";
import { fetchWorlds, currentWorld } from "../../actions/worldsActions.js";
import { currentStory } from "../../actions/storiesActions.js";
import composedAuthHOC from "../../HOC/AuthHOC.js";

const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

class Worlds extends Component {
  componentDidMount() {
    this.props.fetchWorlds(this.props);
    this.props.currentStory(null);
    this.props.currentWorld(null);
    this.props.currentCharacter(null);
    this.props.currentLocation(null);
    this.props.setStoryCharacters([]);
  }
  render() {
    console.log("Worlds props: ", this.props);
    return (
      <Gallery
        {...this.props}
        // fetchItems={this.props.fetchWorlds}
        currentItem={this.props.currentWorld}
        defaultIMG={IMG}
        items={this.props.worlds.worlds}
        type="worlds"
        title={"Your Worlds"}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWorlds: () => dispatch(fetchWorlds()),
    currentWorld: world => dispatch(currentWorld(world)),
    fetchWorldLocations: story => dispatch(fetchWorldLocations(story)),
    currentStory: story => dispatch(currentStory(story)),
    currentCharacter: character => dispatch(currentCharacter(character)),
    currentLocation: location => dispatch(currentLocation(location)),
    setStoryCharacters: characters => dispatch(setStoryCharacters(characters))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Worlds));
