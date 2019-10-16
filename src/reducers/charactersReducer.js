const initialState = {
  characters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        ...state,
        characters: action.payload
      };
    case "SET_STORY_CHARACTERS":
      return {
        ...state,
          story_characters: action.payload
      };
    case "CURRENT_CHARACTER":
      return {
        ...state,
        character: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
