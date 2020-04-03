import React, { Component } from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import {
  currentWorldNote,
  deleteWorldNote,
  fetchWorldNote
} from "../../actions/worldNotesActions.js";
import ImgCarousel from "../ImgCarousel";
import { BASE_URL, getLocal, setLocal } from "../../App";

class WorldNote extends Component {
  componentDidMount() {
    console.log("World Note page props: ", this.props);
    this.props.fetchWorldNote(getLocal("world_note").id);
  }

  handleDeleteNote = () => {
    this.props.deleteWorldNote(getLocal("world_note"));
    this.props.history.push("/tome/world_notes");
  };

  editNote = e => {
    e.preventDefault();
    console.log("saving changes to world_note");

    let note = {
      title: document.getElementById("name").value,
      content: document.getElementById("description").value,
      world_id: getLocal("world").id,
      img_url: document.getElementById("secret_url_collection").textContent
    };

    fetch(BASE_URL + `world_notes/${getLocal("world_note").id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        note: { ...note, note_id: getLocal("world_note").id }
      })
    })
      .then(res => res.json())
      .then(world_note => {
        setLocal("world_note", world_note);
      });
  };

  refreshWorldNote = () => {
    this.props.fetchWorldNote(getLocal("world_note").id);
  };

  render() {
    let world_note = getLocal("world_note");
    console.log("world_note: ", world_note);
    return (
      <>
        <ImgCarousel
          images={world_note.images}
          item={world_note}
          refreshItem={this.refreshWorldNote}
        />
        <EditForm
          {...this.props}
          type="Note"
          handleDelete={this.handleDeleteNote}
          item={world_note}
          handleEdit={this.editNote}
        />
      </>
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
    currentWorldNote: note => dispatch(currentWorldNote(note)),
    deleteWorldNote: note => dispatch(deleteWorldNote(note)),
    fetchWorldNote: id => dispatch(fetchWorldNote(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(WorldNote));
