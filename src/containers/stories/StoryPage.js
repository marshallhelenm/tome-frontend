import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import { fetchStoryCharacters } from "../../actions/charactersActions.js";
import { fetchStoryLocations } from "../../actions/locationsActions.js";
import Display from "../../components/Display.js";
import { deleteStory } from "../../actions/storiesActions";

class StoryPage extends Component {
  componentDidMount() {
    console.log("StoryPage props: ", this.props);
    this.props.fetchStoryCharacters(this.props.stories.story);
    this.props.fetchStoryLocations(this.props.stories.story);
  }
  redirectOnDelete = () => {
    this.props.history.push(`/tome/stories`);
  };

  handleDeleteStory = () => {
    this.props.deleteStory(
      this.props.stories.story,
      this.props.worlds.world,
      this.redirectOnDelete
    );
  };

  render() {
    console.log("StoryPage props: ", this.props);

    return (
      <Display
        {...this.props}
        category="stories"
        handleDelete={this.handleDeleteStory}
        IMG={this.props.stories.story.img}
        img_alt={this.props.stories.story.title}
        item={this.props.stories.story}
        title={this.props.stories.story.title}
        text={this.props.stories.story.description}
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
    fetchStoryCharacters: story => dispatch(fetchStoryCharacters(story)),
    fetchStoryLocations: story => dispatch(fetchStoryLocations(story)),
    deleteStory: (story, world, redirect) =>
      dispatch(deleteStory(story, world, redirect))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(StoryPage));
