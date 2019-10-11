const BASE_URL = "http://localhost:3000/";

export const setCharacters = characters => {
  console.log('in dispatcher setCharacters setting characters: ', characters)
  return {
    type: "SET_CHARACTERS",
    payload: characters
  };
};

export const fetchCharacters = () => {

  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    return fetch(BASE_URL + "getcharacters", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user: user })
    })
      .then(res => res.json())
      .then(characters => dispatch(setCharacters(characters)));
  };
};

export const fetchWorldCharacters = world => {
  console.log('running fetchWorldCharacters. world: ', world)
  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    return fetch(BASE_URL + "getworldcharacters", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ 
        user: user, 
        world: world
      })
    })
      .then(res => res.json())
      .then(characters => dispatch(setCharacters(characters)));
  };
}

export const currentCharacter = (character) =>
{
  console.log('set character')
  return {
    type: 'CURRENT_CHARACTER',
    payload: character
  }
}
