import { setLocal, BASE_URL } from "../App";

export const setWorldNotes = world_notes => {
  return {
    type: "SET_WORLD_NOTES",
    payload: world_notes
  };
};

export const currentWorldNote = world_note => {
  console.log("set world note");
  return {
    type: "CURRENT_WORLD_NOTE",
    payload: world_note
  };
};

export const deleteWorldNote = world_note => {
  console.log("deleting world_note");
  return dispatch => {
    return fetch(BASE_URL + `world_notes/${world_note.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ note: { note_id: world_note.id } })
    });
  };
};

export const fetchWorldNotes = world => {
  console.log("running fetchWorldNotes. world: ", world);

  return dispatch => {
    return fetch(BASE_URL + "getworld_notes", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ note: { world_id: world.id } })
    })
      .then(res => res.json())
      .then(notes => {
        setLocal("world_notes", notes);
        dispatch(setWorldNotes(notes));
      });
  };
};

export const fetchWorldNote = id => {
  return dispatch => {
    return fetch(BASE_URL + `getworld_note`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ world_note: { id: id } })
    })
      .then(res => res.json())
      .then(world_note => {
        setLocal("world_note", world_note);
        dispatch(currentWorldNote(world_note));
      });
  };
};
