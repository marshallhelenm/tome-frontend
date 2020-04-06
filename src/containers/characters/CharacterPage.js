import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import {
  deleteCharacter,
  fetchStoryCharacters,
  fetchCharacter
} from "../../actions/charactersActions.js";
import Display from "../../components/Display.js";
import { assignCrumbs, addBreadCrumb } from "../../actions/breadcrumbActions";
import { getLocal, BASE_URL } from "../../App.js";

class CharacterPage extends Component {
  componentDidMount() {
    console.log("CharacterPage props: ", this.props);
    this.props.addBreadCrumb(
      `/tome/characters/${getLocal("character").id}`,
      getLocal("character").name
    );
  }

  redirectOnDelete = () => {
    this.props.history.push(`/tome/characters`);
  };
  handleDeleteCharacter = () => {
    this.props.deleteCharacter(
      getLocal("character"),
      getLocal("story"),
      getLocal("world"),
      this.redirectOnDelete
    );
  };

  refreshCharacter = () => {
    this.props.fetchCharacter(getLocal("character").id);
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
        character_id: getLocal("character").id,
        story_id: story_id
      })
    })
      .then(response => response.json())
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
        refreshItem={this.refreshCharacter}
        addItem={this.addItemToStory}
        img_alt={getLocal("character").name}
        item={getLocal("character")}
        title={getLocal("character").name}
        text={getLocal("character").description}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    characters: getLocal("characters"),
    character: getLocal("character")
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteCharacter: (character, story, world, redirect) =>
      dispatch(deleteCharacter(character, story, world, redirect)),
    fetchStoryCharacters: story => dispatch(fetchStoryCharacters(story)),
    fetchCharacter: id => dispatch(fetchCharacter(id)),
    assignCrumbs: trail => dispatch(assignCrumbs(trail)),
    addBreadCrumb: (path, displayName) =>
      dispatch(addBreadCrumb(path, displayName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(CharacterPage));
