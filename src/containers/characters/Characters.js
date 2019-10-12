import React, { Component } from "react";
import Gallery from "./Gallery.js";
import {
  fetchCharacters,
  currentCharacter,
  fetchStoryCharacters
} from "../actions/charactersActions.js";
import { connect } from "react-redux";
import composedAuthHOC from "../HOC/AuthHOC.js";

const IMG =
  "https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg";

class Characters extends Component {
  componentDidMount() {
    this.props.stories.story ? this.props.fetchStoryCharacters(this.props.stories.story) :
    this.props.fetchCharacters(this.props);
  }

  render() {
    console.log("characters props: ", this.props);
    return (
      <Gallery
        {...this.props}
        currentItem={this.props.currentCharacter}
        defaultIMG={IMG}
        items={this.props.characters.story_characters ? this.props.characters.story_characters : this.props.characters.characters}
        type="characters"
        title={"Characters"}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters()),
    fetchStoryCharacters: () => dispatch(fetchStoryCharacters()),
    currentCharacter: character => dispatch(currentCharacter(character))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Characters));
