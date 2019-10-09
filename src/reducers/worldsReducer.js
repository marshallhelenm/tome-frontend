const initialState = {
    worlds: []
}

const reducer = (state=initialState, action) => {
    console.log('action', action)
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