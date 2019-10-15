import React, { Component } from "react";
import Gallery from "../Gallery.js";
import { fetchStories, currentStory } from "../../actions/storiesActions.js";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import { fetchWorldCharacters } from "../../actions/charactersActions.js";
import { fetchWorldLocations } from "../../actions/locationsActions.js";
import { fetchWorldStories } from "../../actions/storiesActions.js";
const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

class Stories extends Component {
  componentDidMount() {
    this.props.fetchWorldCharacters(this.props.story);
    this.props.fetchWorldStories(this.props.worlds.world)
    // this.props.fetchWorldLocations(this.props.story);
  }
  render() {
    console.log("stories props: ", this.props);
    return (
      <Gallery
        {...this.props}
        currentItem={this.props.currentStory}
        defaultIMG={IMG}
        items={this.props.stories.world_stories}
        type="stories"
        title={`Tales of ${this.props.worlds.world.name}`}
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
    fetchWorldStories: (world) => dispatch(fetchWorldStories(world)),
    currentStory: story => dispatch(currentStory(story)),
    fetchWorldCharacters: story => dispatch(fetchWorldCharacters(story)),
    fetchWorldLocations: story => dispatch(fetchWorldLocations(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Stories));
