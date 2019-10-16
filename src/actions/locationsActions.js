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

export const currentLocation = location => {
  console.log("set location");
  return {
    type: "CURRENT_LOCATION",
    payload: location
  };
};

export const deleteLocation = (location, story, world, redirect) => {
  console.log("deleting this location!");
  return dispatch => {
    return fetch(BASE_URL + `locations/${location.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ location })
    }).then(() => {
      fetchStoryLocations(story);
      fetchWorldLocations(world);
      redirect();
    });
  };
};

export const fetchWorldLocations = world => {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log("running fetchWorldLocations. current world: ", world);

  return dispatch => {
    return fetch(BASE_URL + "getlocations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: user,
        world: world
      })
    })
      .then(res => res.json())
      .then(locations => {
        console.log("what fetchWorldLocations returned: ", locations);
        dispatch(setLocations(locations));
      });
  };
};

export const fetchStoryLocations = story => {
  console.log("in fetchStoryLocations fetching locations for a story");

  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    return fetch(BASE_URL + "getstorylocations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: user,
        story: story
      })
    })
      .then(res => res.json())
      .then(locations => {
        console.log("what fetchStoryLocations returned: ", locations);
        dispatch(setStoryLocations(locations));
      });
  };
};
