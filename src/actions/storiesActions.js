const BASE_URL = "http://localhost:3000/";

export const setStories = stories => {
  return {
    type: "SET_STORIES",
    payload: stories
  };
};

export const setWorldStories = stories => {
  return {
    type: "SET_WORLD_STORIES",
    payload: stories
  };
};

export const currentStory = story => {
  // console.log("set story");
  return {
    type: "CURRENT_STORY",
    payload: story
  };
};

export const deleteStory = (story, world, redirect) => {
  // console.log("deleting this story!");
  console.log("redirect: ", redirect, world, story);
  return dispatch => {
    return fetch(BASE_URL + `stories/${story.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ story })
    }).then(() => {
      fetchWorldStories(world);
      redirect();
    });
  };
};

export const fetchStories = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    return fetch(BASE_URL + "getstories", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    // console.log("running fetchWorldStories. world: ", world);
    return fetch(BASE_URL + "getworldstories", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        story: { user_id: user, world_id: world.id }
      })
    })
      .then(res => res.json())
      .then(stories => dispatch(setWorldStories(stories)));
  };
};

export const fetchStory = id => {
  return dispatch => {
    return fetch(BASE_URL + `getstory`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ story: {id: id} })
    })
      .then(res => res.json())
      .then(story => dispatch(currentStory(story)));
  };
};
