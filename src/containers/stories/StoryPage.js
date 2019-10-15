import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import {
  fetchStories,
  fetchWorldStories
} from "../../actions/storiesActions.js";
import { fetchStoryCharacters } from "../../actions/charactersActions.js";
import { fetchStoryLocations } from "../../actions/locationsActions.js";
import Display from "../../components/Display.js";

const BASE_URL = "http://localhost:3000/";

class StoryPage extends Component {
  componentDidMount() {
    console.log("StoryPage props: ", this.props);
    this.props.fetchStoryCharacters(this.props.stories.story);
    // this.props.fetchStoryLocations(this.props.story);
  }
  // need to change the above to call on characters and locations instead

  handleDeleteStory = () => {
    this.deleteStory(this.props.story);
  };
  deleteStory = story => {
    console.log("deleting this story!");

    fetch(BASE_URL + `stories/${story.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ story })
    }).then(() => {
      this.props.history.push(`/tome/stories`);
    });
  };

  render() {
    console.log("StoryPage props: ", this.props);

    return (
      <Display
        {...this.props}
        category="stories"
        handleDelete={this.handleDeleteStory}
        IMG={this.props.story.img}
        img_alt={this.props.story.title}
        item={this.props.story}
        title={this.props.story.title}
        text={this.props.story.description}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    stories: state.stories.stories,
    logged_in: state.auth.logged_in,
    story: state.stories.story
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchStories: () => dispatch(fetchStories()),
    fetchWorldStories: story => dispatch(fetchWorldStories(story)),
    fetchStoryCharacters: story => dispatch(fetchStoryCharacters(story)),
    fetchStoryLocations: story => dispatch(fetchStoryLocations(story))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(StoryPage));
