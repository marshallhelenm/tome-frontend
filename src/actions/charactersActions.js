const BASE_URL = "http://localhost:3000/";

export const setCharacters = characters => {
  // console.log("setting these characters: ", characters);
  return {
    type: "SET_CHARACTERS",
    payload: characters
  };
};

export const setStoryCharacters = characters => {
  // console.log("setting these story_characters: ", characters);
  return {
    type: "SET_STORY_CHARACTERS",
    payload: characters
  };
};

export const currentCharacter = character => {
  // console.log("setting this character: ", character);
  // console.log("set character");
  return {
    type: "CURRENT_CHARACTER",
    payload: character
  };
};

export const deleteCharacter = (character, story, world, redirect) => {
  // console.log("deleting this character: ", character);
  return dispatch => {
    return fetch(BASE_URL + `characters/${character.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ character })
    }).then(() => {
      fetchStoryCharacters(story);
      fetchWorldCharacters(world);
      redirect();
    });
  };
};

export const fetchWorldCharacters = world => {
  let user = JSON.parse(localStorage.getItem("user"));
  // console.log("running fetchWorldCharacters. current world: ", world);

  return dispatch => {
    return fetch(BASE_URL + "getcharacters", {
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
      .then(characters => {
        // console.log(
        //   "fetchWorldCharacters found these characters: ",
        //   characters
        // );
        dispatch(setCharacters(characters));
      });
  };
};

export const fetchStoryCharacters = story => {
  // console.log(
  //   "in fetchStoryCharacters fetching characters for a story. story: ",
  //   story
  // );

  return dispatch => {
    return fetch(BASE_URL + "getstorycharacters", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        story: story
      })
    })
      .then(res => res.json())
      .then(story_characters => {
        dispatch(setStoryCharacters(story_characters));
        console.log(
          "fetchStoryCharacters found these story characters: ",
          story_characters
        );
      });
  };
};
