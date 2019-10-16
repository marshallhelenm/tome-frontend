const BASE_URL = "http://localhost:3000/";

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
      body: JSON.stringify({ story_note })
    })
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
      body: JSON.stringify({ story })
    })
      .then(res => res.json())
      .then(notes => dispatch(setStoryNotes(notes)));
  };
};
