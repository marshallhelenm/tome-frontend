const BASE_URL = "http://localhost:3000/";

export const setWorlds = worlds => {
  return {
    type: "SET_WORLDS",
    payload: worlds
  };
};

export const fetchWorlds = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
      
    return fetch(BASE_URL + "getworlds", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user: user })
    })
      .then(res => res.json())
      .then(worlds => dispatch(setWorlds(worlds)));
  };
};

export const currentWorld = (world) =>
{
  console.log('set world')
  return {
    type: 'CURRENT_WORLD',
    payload: world
  }
}
