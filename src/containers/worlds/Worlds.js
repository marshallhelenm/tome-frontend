import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/notebook.css";
import "../../css/tooplate_style.css";
import Gallery from "../Gallery.js";
import {
  currentCharacter,
  setStoryCharacters
} from "../../actions/charactersActions.js";
import {
  fetchWorldLocations,
  currentLocation,
  setStoryLocations
} from "../../actions/locationsActions.js";
import { fetchWorlds, currentWorld } from "../../actions/worldsActions.js";
import { currentStory } from "../../actions/storiesActions.js";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import { assignCrumbs } from "../../actions/breadcrumbActions";
import { getLocal } from "../../App.js";

const IMG =
  "https://img2.cgtrader.com/items/677143/ec4642a3bc/globe-antique-3d-model-max-fbx.jpg";

class Worlds extends Component {
  componentDidMount() {
    this.props.fetchWorlds(this.props);
    this.props.currentStory(null);
    this.props.currentWorld(null);
    this.props.currentCharacter(null);
    this.props.currentLocation(null);
    this.props.setStoryCharacters([]);
    this.props.setStoryLocations([]);
    this.props.assignCrumbs([["/tome", "Home"], ["/tome/worlds", "Worlds"]]);
  }
  render() {
    // console.log("Worlds props: ", this.props);
    return (
      <Gallery
        {...this.props}
        // fetchItems={this.props.fetchWorlds}
        currentItem={this.props.currentWorld}
        defaultIMG={IMG}
        items={getLocal("worlds")}
        type="worlds"
        item_type="world"
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
    currentStory: story => dispatch(currentStory(story)),
    currentCharacter: character => dispatch(currentCharacter(character)),
    currentLocation: location => dispatch(currentLocation(location)),
    setStoryCharacters: characters => dispatch(setStoryCharacters(characters)),
    setStoryLocations: locations => dispatch(setStoryLocations(locations)),
    assignCrumbs: trail => dispatch(assignCrumbs(trail))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Worlds));
