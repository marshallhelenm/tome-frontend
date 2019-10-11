const initialState = {
    worlds: []
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case 'SET_WORLDS':
      console.log("in worlds reducer setting worlds: ", action.payload);

            return {
                ...state,
                worlds: action.payload
            }
        case 'CURRENT_WORLD':
            console.log('in current world', {...state, world: action.payload})
            return {
                ...state,
                world: action.payload
            }
        default:
            return state;
    }
}

export default reducer;