const INITIAL_STATE = {
  nav: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_BREADCRUMB":
      console.log("adding breadcrumbs in reducer: ", action.payload);
      return {
        ...state,
        nav: [...state.nav, action.payload]
      };
    case "ROLLBACK_CRUMB":
      return {
        ...state,
        nav: state.nav.slice(0, action.payload + 1)
      };
    case "ASSIGN_CRUMBS":
      console.log("assigning breadcrumbs in reducer: ", action.payload);
      return {
        ...state,
        nav: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
