import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import { currentStory } from "../../actions/storiesActions.js";

const BASE_URL = "http://localhost:3000/";


const EditStory = props => {
  const editStory = e => {
    e.preventDefault();
    console.log("saving changes to story");

    fetch(BASE_URL+`stories/${props.story.id}`, {
        method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: document.getElementById("name").value,
        description: document.getElementById("description").value,
        user: JSON.parse(localStorage.getItem("user")),
        currentStory: props.story
      })
    })
      .then(response => response.json())
      .then(story => {
        console.log("story: ", story);
        props.currentStory(story);
        props.history.push(`/tome/stories/${story.id}`);
      });
  };

  return (
    <>
      <EditForm {...props} item={props.story} handleEdit={editStory} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    logged_in: state.auth.logged_in,
    story: state.stories.story
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentStory: story => dispatch(currentStory(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(EditStory));
