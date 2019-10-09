const initialState = {
    logged_in: false,
    token: null
}

const reducer = (state=initialState, action) => {
    console.log('action', action)
    switch (action.type){
        case 'SET_LOGGED_IN':
            return {
                logged_in: true,
                token: action.payload
            }
        case 'SET_LOGGED_OUT':
            return {
                logged_in: false,
                token: null
            }
        default:
            return state;
    }
}

export default reducer;