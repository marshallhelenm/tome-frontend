const BASE_URL = "http://localhost:3000/";

export const setCharacters = characters => {
  return {
    type: "SET_CHARACTERS",
    payload: characters
  };
};

export const setStoryCharacters = characters => {
  return {
    type: "SET_STORY_CHARACTERS",
    payload: characters
  };
};

export const fetchCharacters = () => {

  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    console.log('in fetchCharacters fetching characters')
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

export const fetchStoryCharacters = story => {
  console.log('in fetchStoryCharacters fetching characters for a story')

  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    return fetch(BASE_URL + "getstorycharacters", {
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
      .then(characters => dispatch(setStoryCharacters(characters)));
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










// {"user"=>

//   {
//   "user"=>
//     {"id"=>9, 
//     "username"=>"helen", 
//     "password"=>nil, 
//     "default_world_id"=>nil, 
//     "worlds"=>[{"id"=>4, "name"=>"Wellspring", "description"=>nil, "user_id"=>9, "default_story_id"=>nil, "created_at"=>"2019-10-10T15:48:28.387Z", "updated_at"=>"2019-10-10T15:48:28.387Z"}, {"id"=>5, "name"=>"Peasant's Crusade", "description"=>nil, "user_id"=>9, "default_story_id"=>nil, "created_at"=>"2019-10-10T15:48:28.396Z", "updated_at"=>"2019-10-10T15:48:28.396Z"}]
//     }, 
//   "token"=>"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5fQ.mhhGpwlgYkGC8XbPev_V-WDwrITMCFEf6PT2SKtIGNk"
// }, 

// "story"=>
// {
//   "id"=>5, "title"=>"a title", "description"=>nil, "story_notes"=>[], "characters"=>[{"id"=>10, "name"=>"Sally", "description"=>nil, "world"=>{"id"=>4, "name"=>"Wellspring", "description"=>nil, "user_id"=>9, "default_story_id"=>nil, "created_at"=>"2019-10-10T15:48:28.387Z", "updated_at"=>"2019-10-10T15:48:28.387Z"}}, {"id"=>11, "name"=>"Frank", "description"=>nil, "world"=>{"id"=>4, "name"=>"Wellspring", "description"=>nil, "user_id"=>9, "default_story_id"=>nil, "created_at"=>"2019-10-10T15:48:28.387Z", "updated_at"=>"2019-10-10T15:48:28.387Z"}}], "locations"=>[{"id"=>10, "name"=>"City", "description"=>nil, "world"=>{"id"=>4, "name"=>"Wellspring", "description"=>nil, "user_id"=>9, "default_story_id"=>nil, "created_at"=>"2019-10-10T15:48:28.387Z", "updated_at"=>"2019-10-10T15:48:28.387Z"}}, {"id"=>11, "name"=>"Ruins", "description"=>nil, "world"=>{"id"=>4, "name"=>"Wellspring", "description"=>nil, "user_id"=>9, "default_story_id"=>nil, "created_at"=>"2019-10-10T15:48:28.387Z", "updated_at"=>"2019-10-10T15:48:28.387Z"}}]
// }, 


// "controller"=>"characters", "action"=>"getstorycharacters", "character"=>{}}