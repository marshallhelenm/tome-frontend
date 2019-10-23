import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/coda-slider.css";
import "../../css/tooplate_style.css";
import { fetchStories, currentStory } from "../../actions/storiesActions.js";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import NewForm from "../NewForm";

const BASE_URL = "http://localhost:3000/";

class NewStory extends Component {
  createStory = e => {
    e.preventDefault();
    console.log("creating story");
    let story = {
      title: document.getElementById("name").value,
      description: document.getElementById("description").value,
      user: JSON.parse(localStorage.getItem("user")).id,
      world: this.props.worlds.world.id,
      img_url: document.getElementById("secret_url_collection").textContent
    };
    fetch(BASE_URL + "stories/new", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        story
      })
    })
      .then(response => response.json())
      .then(newStory => {
        console.log("newStory: ", newStory);
        this.props.currentStory(newStory);
        this.props.history.push(`/tome/stories/${newStory.id}`);
      });
  };

  render() {
    console.log("NewStory props: ", this.props);
    return <NewForm type="stories" handleNew={this.createStory} />;
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    stories: state.stories.stories,
    logged_in: state.auth.logged_in
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
)(composedAuthHOC(NewStory));
