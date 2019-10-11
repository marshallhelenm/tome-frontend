import React, { Component } from "react";
import Gallery from "./Gallery.js";
import { fetchStories, currentStory } from "../actions/storiesActions.js";
import { connect } from "react-redux";
import composedAuthHOC from "../HOC/AuthHOC.js";

const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

class Stories extends Component {


  render() {
    console.log("stories props: ", this.props);
    return (
      <Gallery
        {...this.props}
        // fetchItems={this.props.fetchStories}
        currentItem={this.props.currentStory}
        defaultIMG={IMG}
        items={this.props.stories}
        type="stories"
        title={`Tales of ${this.props.story}`}
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
    currentStory: story => dispatch(currentStory(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Stories));
