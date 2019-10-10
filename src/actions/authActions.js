export const setLoggedIn = () => {
    return {
        type: 'SET_LOGGED_IN',
        payload: localStorage.getItem('token')
    }
}

export const setLoggedOut = () => {
    return {
        type: 'SET_LOGGED_OUT',
        payload: localStorage.getItem('token')
    }
}