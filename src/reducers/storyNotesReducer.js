const initialState = {
  story_notes: []
};

const reducer = (state = initialState, action) => {
  // console.log('in story notes reducer')
  switch (action.type) {
    case "SET_STORY_NOTES":
      return {
        ...state,
        story_notes: action.payload
      };
    case "CURRENT_STORY_NOTE":
      return {
        ...state,
        story_note: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
