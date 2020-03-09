import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import NewForm from "../NewForm";
import { connect } from "react-redux";
import {
  currentStoryNote,
  deleteStoryNote
} from "../../actions/storyNotesActions.js";
import { setLocal } from "../../App";

const BASE_URL = "https://wbtome-backend.herokuapp.com/";
const NewStoryNote = props => {
  console.log("New Note page props: ", props);

  const createNote = e => {
    e.preventDefault();
    console.log("creating note");

    let note = {
      title: document.getElementById("name").value,
      content: document.getElementById("description").value,
      story_id: props.stories.story.id,
      img_url: document.getElementById("secret_url_collection").textContent
    };

    fetch(BASE_URL + `story_notes/new`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ note })
    })
      .then(resp => resp.json())
      .then(note => {
        console.log("new note: ", note);
        props.currentStoryNote(note);
        setLocal("note", note);
        props.history.push(`/tome/story_notes/${note.id}`);
      });
  };

  return <NewForm {...props} type="Note" handleNew={createNote} />;
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
)(composedAuthHOC(NewStoryNote));
