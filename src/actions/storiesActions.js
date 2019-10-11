const BASE_URL = "http://localhost:3000/";

export const setStories = stories => {
  console.log('in dispatcher setStories setting stories: ', stories)
  return {
    type: "SET_STORIES",
    payload: stories
  };
};

export const fetchStories = () => {

  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    return fetch(BASE_URL + "getstories", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user: user })
    })
      .then(res => res.json())
      .then(stories => dispatch(setStories(stories)));
  };
};

export const fetchWorldStories = world => {
  console.log('running fetchWorldStories. world: ', world)
  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    return fetch(BASE_URL + "getworldstories", {
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
      .then(stories => dispatch(setStories(stories)));
  };
}

export const currentStory = (story) =>
{
  console.log('set story')
  return {
    type: 'CURRENT_STORY',
    payload: story
  }
}
