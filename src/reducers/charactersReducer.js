const initialState = {
  characters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      console.log("in characters reducer setting characters: ", action.payload);

      return {
        ...state,
        characters: action.payload
      };
    case "CURRENT_CHARACTER":
      console.log("in current character", { ...state, character: action.payload });
      return {
        ...state,
        character: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
