import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import NewForm from "../NewForm";
import { connect } from "react-redux";
import {
  currentWorldNote,
  deleteWorldNote
} from "../../actions/worldNotesActions.js";
import { setLocal, BASE_URL } from "../../App";

const NewWorldNote = props => {
  console.log("New Note page props: ", props);

  const createNote = e => {
    e.preventDefault();
    console.log("creating note");

    let note = {
      title: document.getElementById("name").value,
      content: document.getElementById("description").value,
      world_id: props.worlds.world.id,
      img_url: document.getElementById("secret_url_collection").textContent
    };

    fetch(BASE_URL + `world_notes/new`, {
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
        props.currentWorldNote(note);
        setLocal("note", note);
        props.hiworld.push(`/tome/world_notes/${note.id}`);
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
    currentWorldNote: note => dispatch(currentWorldNote(note)),
    deleteWorldNote: note => dispatch(deleteWorldNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(NewWorldNote));
