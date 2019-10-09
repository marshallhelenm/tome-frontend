const BASE_URL = "http://localhost:3000/";

export const setWorlds = worlds => {
    return {
        type: 'SET_WORLDS',
        payload: worlds
    }
}

export const fetchWorlds = () => {
    return dispatch => {
        return fetch(BASE_URL + 'worlds')
            .then(res => res.json())
            .then(worlds => dispatch(setWorlds(worlds)))
    }
}