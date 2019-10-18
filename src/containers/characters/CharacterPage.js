import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import {
  deleteCharacter,
  fetchStoryCharacters,
  fetchWorldCharacters
} from "../../actions/charactersActions.js";
import Display from "../../components/Display.js";

const BASE_URL = "http://localhost:3000/";

const IMG =
  "https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg";

class CharacterPage extends Component {
  redirectOnDelete = () => {
    this.props.history.push(`/tome/characters`);
  };
  handleDeleteCharacter = () => {
    this.props.deleteCharacter(
      this.props.character,
      this.props.stories.story,
      this.props.worlds.world,
      this.redirectOnDelete
    );
  };

  addItemToStory = story_id => {
    console.log("adding story: ", story_id);
    fetch(BASE_URL + `story_characters`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        character_id: this.props.character.id,
        story_id: story_id
      })
    })
    .then(response=>response.json())
    .then(story => {
      console.log(story);
      fetchStoryCharacters(story);
    });
  };


  render() {
    console.log("CharacterPage props: ", this.props);

    return (
      <Display
        {...this.props}
        category="characters"
        handleDelete={this.handleDeleteCharacter}
        addItem={this.addItemToStory}
        IMG={this.props.character.img ? this.props.character.img : IMG}
        img_alt={this.props.character.name}
        item={this.props.character}
        title={this.props.character.name}
        text={this.props.character.description}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    characters: state.characters.characters,
    character: state.characters.character
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteCharacter: (character, story, world, redirect) =>
      dispatch(deleteCharacter(character, story, world, redirect)),
    fetchStoryCharacters: story => dispatch(fetchStoryCharacters(story)),
    fetchWorldCharacters: world => dispatch(fetchWorldCharacters(world))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(CharacterPage));
