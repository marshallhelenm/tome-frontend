import React, { Component } from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import {
  currentStoryNote,
  deleteStoryNote,
  fetchStoryNote,
  fetchStoryNotes
} from "../../actions/storyNotesActions.js";
import ImgCarousel from "../ImgCarousel";
import { getLocal, setLocal, BASE_URL } from "../../App.js";

class StoryNote extends Component {
  componentDidMount() {
    console.log("Story Note page props: ", this.props);
    this.props.fetchStoryNote(getLocal("story_note").id);
  }

  handleDeleteNote = () => {
    this.props.deleteStoryNote(getLocal('story_note'));
    this.props.fetchStoryNotes(getLocal('story'))
    this.props.history.push("/tome/story_notes");
  };

  editNote = e => {
    e.preventDefault();
    console.log("saving changes to story_note");

    let note = {
      title: document.getElementById("name").value,
      content: document.getElementById("description").value,
      story_id: getLocal("story").id,
      img_url: document.getElementById("secret_url_collection").textContent
    };

    fetch(BASE_URL + `story_notes/${getLocal("story_note").id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        note: { ...note, note_id: getLocal("story_note").id }
      })
    })
      .then(res => res.json())
      .then(story_note => {
        setLocal("story_note", story_note);
      });
  };

  refreshStoryNote = () => {
    this.props.fetchStoryNote(getLocal("story_note").id);
  };

  render() {
    let story_note = getLocal("story_note");
    console.log("story_note: ", story_note);
    return (
      <>
        <ImgCarousel
          images={story_note.images}
          item={story_note}
          refreshItem={this.refreshStoryNote}
        />
        <EditForm
          {...this.props}
          type="Note"
          handleDelete={this.handleDeleteNote}
          item={story_note}
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
    currentStoryNote: note => dispatch(currentStoryNote(note)),
    deleteStoryNote: note => dispatch(deleteStoryNote(note)),
    fetchStoryNote: id => dispatch(fetchStoryNote(id)),
    fetchStoryNotes: id => dispatch(fetchStoryNotes(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(StoryNote));
