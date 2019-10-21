const initialState = {
  stories: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STORIES":
      return {
        ...state,
        stories: action.payload
      };
    case "SET_WORLD_STORIES":
      return {
        ...state,
        world_stories: action.payload
      };
    case "CURRENT_STORY":
      return {
        ...state,
        story: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
