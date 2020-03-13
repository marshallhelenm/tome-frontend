import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import {
  currentStoryNote,
  deleteStoryNote,
  fetchStoryNote
} from "../../actions/storyNotesActions.js";
import ImgCarousel from "../ImgCarousel";
import { BASE_URL } from '../../App'

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
        note: { ...note, note_id: props.story_notes.story_note.id }
      })
    });
  };

  const refreshStoryNote = () => {
    this.props.fetchStoryNote(this.props.story_notes.story_note.id);
  };

  return (
    <>
      <ImgCarousel
        images={props.story_notes.story_note.images}
        item={props.story_notes.story_note}
        refreshItem={refreshStoryNote}
      />
      <EditForm
        {...props}
        type='Note'
        handleDelete={handleDeleteNote}
        item={props.story_notes.story_note}
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
    currentStoryNote: note => dispatch(currentStoryNote(note)),
    deleteStoryNote: note => dispatch(deleteStoryNote(note)),
    fetchStoryNote: id => dispatch(fetchStoryNote(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(StoryNote));
