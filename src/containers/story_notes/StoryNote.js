import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import {
  currentStoryNote,
  deleteStoryNote
} from "../../actions/storyNotesActions.js";

const BASE_URL = "http://localhost:3000/";

const StoryNote = props => {
  console.log("Story Note page props: ", props);

  const handleDeleteNote = () => {
    props.deleteStoryNote(props.story_notes.story_note);
    props.history.push("/tome/story_notes");
  };

  const editNote = e => {
    e.preventDefault();
    console.log("saving changes to story_note");

    let note = {
      title: document.getElementById("name").value,
      content: document.getElementById("description").value,
      story_id: props.stories.story.id,
      img_url: document.getElementById("secret_url_collection").textContent
    };

    fetch(BASE_URL + `story_notes/${props.story_notes.story_note.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        note: { ...note, note_id: props.story_notes.story_note }
      })
    });
  };

  return (
    <EditForm
      {...props}
      handleDelete={handleDeleteNote}
      item={props.story_notes.story_note}
      handleEdit={editNote}
    />
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentStoryNote: note => dispatch(currentStoryNote(note)),
    deleteStoryNote: note => dispatch(deleteStoryNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(StoryNote));