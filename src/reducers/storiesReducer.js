const initialState = {
  stories: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STORIES":
      console.log("in stories reducer setting stories: ", action.payload);

      return {
        ...state,
        stories: action.payload
      };
    case "CURRENT_STORY":
      console.log("in current story", { ...state, story: action.payload });
      return {
        ...state,
        story: action.payload
      };
    default:
      return state;
  }
};

export default reducer;