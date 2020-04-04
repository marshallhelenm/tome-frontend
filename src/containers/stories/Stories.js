import React, { Component } from "react";
import Gallery from "../Gallery.js";
import {
  fetchStories,
  fetchWorldStories,
  currentStory
} from "../../actions/storiesActions.js";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import {
  currentCharacter,
  setStoryCharacters
} from "../../actions/charactersActions.js";
import {
  fetchWorldLocations,
  currentLocation
} from "../../actions/locationsActions.js";
import { assignCrumbs } from "../../actions/breadcrumbActions";
import { getLocal } from "../../App.js";

const IMG =
  "https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_1280.jpg";

class Stories extends Component {
  componentDidMount() {
    console.log("Stories props: ", this.props);
    this.props.fetchWorldStories(getLocal("world"));
    this.props.currentStory(null);
    this.props.currentCharacter(null);
    this.props.currentLocation(null);
    this.props.setStoryCharacters([]);
    this.props.assignCrumbs([
      ["/tome", "Home"],
      ["/tome/worlds", "Worlds"],
      [`/tome/worlds/${getLocal("world").id}`, getLocal("world").name],
      ["/tome/stories", "Stories"]
    ]);
  }

  render() {
    // console.log("stories props: ", this.props);
    return (
      <Gallery
        {...this.props}
        currentItem={this.props.currentStory}
        defaultIMG={IMG}
        items={
          this.props.stories.world_stories
            ? this.props.stories.world_stories
            : []
        }
        item_type="story"
        type="stories"
        title={`Tales of ${getLocal("world").name}`}
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
    fetchStories: () => dispatch(fetchStories()),
    fetchWorldStories: world => dispatch(fetchWorldStories(world)),
    currentStory: story => dispatch(currentStory(story)),
    currentCharacter: character => dispatch(currentCharacter(character)),
    currentLocation: location => dispatch(currentLocation(location)),
    fetchWorldLocations: story => dispatch(fetchWorldLocations(story)),
    setStoryCharacters: characters => dispatch(setStoryCharacters(characters)),
    assignCrumbs: trail => dispatch(assignCrumbs(trail))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Stories));
