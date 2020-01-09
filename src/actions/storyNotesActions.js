import { setLocal } from "../App";

const BASE_URL = "https://wbtome-backend.herokuapp.com/"
;

export const setStoryNotes = story_notes => {
  return {
    type: "SET_STORY_NOTES",
    payload: story_notes
  };
};

export const currentStoryNote = story_note => {
  console.log("set story note");
  return {
    type: "CURRENT_STORY_NOTE",
    payload: story_note
  };
};

export const deleteStoryNote = story_note => {
  console.log("deleting story_note");
  return dispatch => {
    return fetch(BASE_URL + `story_notes/${story_note.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ note: { note_id: story_note.id } })
    });
  };
};

export const fetchStoryNotes = story => {
  console.log("running fetchStoryNotes. story: ", story);

  return dispatch => {
    return fetch(BASE_URL + "getstory_notes", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ note: { story_id: story.id } })
    })
      .then(res => res.json())
      .then(notes => {
        setLocal("story_notes", notes);
        dispatch(setStoryNotes(notes));
      });
  };
};

export const fetchStoryNote = id => {
  return dispatch => {
    return fetch(BASE_URL + `getstory_note`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ story_note: { id: id } })
    })
      .then(res => res.json())
      .then(story_note => {
        setLocal("story_note", story_note);
        dispatch(currentStoryNote(story_note));
      });
  };
};
