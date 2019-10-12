const BASE_URL = "http://localhost:3000/";

export const setLocations = locations => {
  return {
    type: "SET_LOCATIONS",
    payload: locations
  };
};

export const setStoryLocations = locations => {
  return {
    type: "SET_STORY_LOCATIONS",
    payload: locations
  };
};

export const fetchLocations = () => {

  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    console.log('in fetchLocations fetching locations')
    return fetch(BASE_URL + "getlocations", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user: user })
    })
      .then(res => res.json())
      .then(locations => dispatch(setLocations(locations)));
  };
};

export const fetchStoryLocations = story => {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log('in fetchStoryLocations fetching locations for a story')
  return dispatch => {
    return fetch(BASE_URL + "getstorylocations", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ 
        user: user, 
        story: story
      })
    })
      .then(res => res.json())
      .then(locations => dispatch(setStoryLocations(locations)));
  };
}

export const currentLocation = (location) =>
{
  console.log('set location')
  return {
    type: 'CURRENT_LOCATION',
    payload: location
  }
}
