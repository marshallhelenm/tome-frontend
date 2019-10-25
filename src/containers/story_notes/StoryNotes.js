import React, { Component } from "react";
import Gallery from "../Gallery.js";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import {
  fetchStoryNotes,
  currentStoryNote
} from "../../actions/storyNotesActions.js";

const IMG =
  "https://cdn.pixabay.com/photo/2016/04/30/13/11/texture-1362877_1280.jpg";

class StoryNotes extends Component {

  componentDidMount(){
    console.log("story notes props: ", this.props);
    this.props.fetchStoryNotes(this.props.stories.story)
  }

  render() {
    return (
      <Gallery
        {...this.props}
        currentItem={this.props.currentStoryNote}
        defaultIMG={IMG}
        items={this.props.story_notes.story_notes}
        type="story_notes"
        title={"Story Notes"}
        // title={this.props.stories.story.title}
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
    fetchStoryNotes: story => dispatch(fetchStoryNotes(story)),
    currentStoryNote: story_note => dispatch(currentStoryNote(story_note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(StoryNotes));
