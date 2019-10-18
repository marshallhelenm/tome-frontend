import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import { fetchStoryCharacters, setStoryCharacters } from "../../actions/charactersActions.js";
import { fetchStoryLocations, setStoryLocations } from "../../actions/locationsActions.js";
import Display from "../../components/Display.js";
import { deleteStory } from "../../actions/storiesActions";

const BASE_URL = "http://localhost:3000/";

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

  deleteItemFromStory = (item_id, type) => {
    console.log('item_id: ', item_id)
    if (type === "character") {
      fetch(BASE_URL + `story_characters/${item_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          character_id: item_id,
          story_id: this.props.stories.story.id
        })
      })
        .then(response => response.json())
        .then(story_characters => {
          setStoryCharacters(story_characters);
        });
    } else if (type === "location") {
      fetch(BASE_URL + `story_locations/${item_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          location_id: item_id,
          story_id: this.props.stories.story.id
        })
      })
        .then(response => response.json())
        .then(story_locations => {
          console.log(story_locations);
          setStoryLocations(story_locations);
        });
    }
  };

  render() {
    console.log("StoryPage props: ", this.props);

    return (
      <Display
        {...this.props}
        category="stories"
        handleDelete={this.handleDeleteStory}
        deleteItem={this.deleteItemFromStory}
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
    setStoryCharacters: story_characters => dispatch(setStoryCharacters(story_characters)),
    fetchStoryLocations: story => dispatch(fetchStoryLocations(story)),
    setStoryLocations: story_locations => dispatch(setStoryLocations(story_locations)),
    deleteStory: (story, world, redirect) =>
      dispatch(deleteStory(story, world, redirect))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(StoryPage));
