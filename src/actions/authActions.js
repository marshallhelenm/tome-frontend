export const setLoggedIn = (token=null) => {
    return {
        type: 'SET_LOGGED_IN',
        payload: token || localStorage.getItem('token')
    }
}

export const setLoggedOut = () => {
    return {
        type: 'SET_LOGGED_OUT',
        payload: localStorage.getItem('token')
    }
}