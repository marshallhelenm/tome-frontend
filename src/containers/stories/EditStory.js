import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import { currentStory, deleteStory } from "../../actions/storiesActions.js";

const BASE_URL = "https://wbtome-backend.herokuapp.com/"
;

const EditStory = props => {
  console.log("Edit Story Form props: ", props);

  const handleDeleteStory = () => {
    this.props.deleteStory(this.props.story);
    this.props.history.push(`/tome/stories`);
  };

  const editStory = e => {
    e.preventDefault();
    console.log("saving changes to story");

    let story = {
      title: document.getElementById("name").value,
      description: document.getElementById("description").value,
      id: props.story.id,
      img_url: document.getElementById("secret_url_collection").textContent
    };

    fetch(BASE_URL + `stories/${props.story.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ story })
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
      <EditForm
        {...props}
        item={props.story}
        handleEdit={editStory}
        handleDelete={handleDeleteStory}
        item_type="stories"
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    story: state.stories.story
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentStory: story => dispatch(currentStory(story)),
    deleteStory: story => dispatch(deleteStory(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(EditStory));
