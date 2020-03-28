const initialState = {
  world_notes: []
};

const reducer = (state = initialState, action) => {
  console.log('in world notes reducer')
  switch (action.type) {
    case "SET_WORLD_NOTES":
      return {
        ...state,
        world_notes: action.payload
      };
    case "CURRENT_WORLD_NOTE":
      return {
        ...state,
        world_note: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
