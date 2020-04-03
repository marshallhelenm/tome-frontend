import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import {
  currentWorldNote,
  deleteWorldNote,
  fetchWorldNote
} from "../../actions/worldNotesActions.js";
import ImgCarousel from "../ImgCarousel";
import { BASE_URL } from '../../App'

const WorldNote = props => {
  console.log("World Note page props: ", props);

  const handleDeleteNote = () => {
    props.deleteWorldNote(props.world_notes.world_note);
    props.history.push("/tome/world_notes");
  };

  const editNote = e => {
    e.preventDefault();
    console.log("saving changes to world_note");

    let note = {
      title: document.getElementById("name").value,
      content: document.getElementById("description").value,
      world_id: props.world_notes.world_note.world.id,
      img_url: document.getElementById("secret_url_collection").textContent
    };

    fetch(BASE_URL + `world_notes/${props.world_notes.world_note.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        note: { ...note, note_id: props.world_notes.world_note.id }
      })
    });
  };

  const refreshWorldNote = () => {
    this.props.fetchWorldNote(this.props.world_notes.world_note.id);
  };

  return (
    <>
      <ImgCarousel
        images={props.world_notes.world_note.images}
        item={props.world_notes.world_note}
        refreshItem={refreshWorldNote}
      />
      <EditForm
        {...props}
        type='Note'
        handleDelete={handleDeleteNote}
        item={props.world_notes.world_note}
        handleEdit={editNote}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentWorldNote: note => dispatch(currentWorldNote(note)),
    deleteWorldNote: note => dispatch(deleteWorldNote(note)),
    fetchWorldNote: id => dispatch(fetchWorldNote(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(WorldNote));
