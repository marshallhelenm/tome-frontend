import { combineReducers } from "redux";
import worlds from "./worldsReducer.js";
import auth from "./authReducer.js";
import stories from "./storiesReducer.js";
import characters from "./charactersReducer.js";
import locations from "./locationsReducer.js";
import story_notes from "./storyNotesReducer.js";

export default combineReducers({
  worlds,
  auth,
  stories,
  characters,
  locations,
  story_notes
});
