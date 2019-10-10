const initialState = {
    worlds: []
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case 'SET_WORLDS':
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