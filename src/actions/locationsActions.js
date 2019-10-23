const BASE_URL = "http://localhost:3000/";

export const setLocations = locations => {
  // console.log("setting these locations: ", locations);
  return {
    type: "SET_LOCATIONS",
    payload: locations
  };
};

export const setStoryLocations = locations => {
  // console.log("setting these story_locations: ", locations);
  return {
    type: "SET_STORY_LOCATIONS",
    payload: locations
  };
};

export const currentLocation = location => {
  // console.log("setting this location: ", location);
  // console.log("set location");
  return {
    type: "CURRENT_LOCATION",
    payload: location
  };
};

export const deleteLocation = (location, story, world, redirect) => {
  // console.log("deleting this location: ", location);
  return dispatch => {
    return fetch(BASE_URL + `locations/${location.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ location: {location_id: location.id} })
    }).then(() => {
      fetchStoryLocations(story);
      fetchWorldLocations(world);
      redirect();
    });
  };
};

export const fetchWorldLocations = world => {
  let user = JSON.parse(localStorage.getItem("user"));
  // console.log("running fetchWorldLocations. current world: ", world);

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
        world_id: world.id
      })
    })
      .then(res => res.json())
      .then(locations => {
        // console.log(
        //   "fetchWorldLocations found these locations: ",
        //   locations
        // );
        dispatch(setLocations(locations));
      });
  };
};

export const fetchStoryLocations = story => {
  // console.log(
  //   "in fetchStoryLocations fetching locations for a story. story: ",
  //   story
  // );

  return dispatch => {
    return fetch(BASE_URL + "getstorylocations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        story_location: {story_id: story.id}
      })
    })
      .then(res => res.json())
      .then(story_locations => {
        dispatch(setStoryLocations(story_locations));
        console.log(
          "fetchStoryLocations found these story locations: ",
          story_locations
        );
      });
  };
};
