const initialState = {
    worlds: []
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case 'SET_WORLDS':
            return {
                worlds: action.payload
            }
        default:
            return state;
    }
}

export default reducer;