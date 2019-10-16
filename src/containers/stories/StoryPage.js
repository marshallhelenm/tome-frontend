import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import { fetchStoryCharacters } from "../../actions/charactersActions.js";
import { fetchStoryLocations } from "../../actions/locationsActions.js";
import Display from "../../components/Display.js";

const BASE_URL = "http://localhost:3000/";

class StoryPage extends Component {
  componentDidMount() {
    console.log("StoryPage props: ", this.props);
    this.props.fetchStoryCharacters(this.props.stories.story);
    this.props.fetchStoryLocations(this.props.stories.story);
  }

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
    ...state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchStoryCharacters: story => dispatch(fetchStoryCharacters(story)),
    fetchStoryLocations: story => dispatch(fetchStoryLocations(story))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(StoryPage));
