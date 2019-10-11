export const setLoggedIn = () => {
    // localStorage.setItem('logged_in', 'true')
    return {
        type: 'SET_LOGGED_IN',
        payload: localStorage.getItem('token')
    }
}

export const setLoggedOut = () => {
    // localStorage.setItem('logged_in', 'false')
    return {
        type: 'SET_LOGGED_OUT',
        payload: localStorage.getItem('token')
    }
}