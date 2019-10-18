const initialState = {
  locations: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCATIONS":
      return {
        ...state,
        locations: action.payload
      };
    case "SET_STORY_LOCATIONS":
      return {
        ...state,
          story_locations: action.payload
      };
    case "CURRENT_LOCATION":
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
