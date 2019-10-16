import React, { Component } from "react";
import Gallery from "../Gallery.js";
import {
  fetchWorldCharacters,
  currentCharacter,
  fetchStoryCharacters
} from "../../actions/charactersActions.js";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";

const IMG =
  "https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg";

class Characters extends Component {
  componentDidMount() {
    console.log("Characters props: ", this.props);
    console.log("story: ", this.props.stories.story);
    this.props.stories.story
      ? this.props.fetchStoryCharacters(this.props.stories.story)
      : this.props.fetchWorldCharacters(this.props.worlds.world);
  }

  render() {
    console.log("characters props: ", this.props);
    return (
      <Gallery
        {...this.props}
        currentItem={this.props.currentCharacter}
        defaultIMG={IMG}
        items={
          this.props.stories.story
            ? this.props.characters.story_characters
            : this.props.characters.characters
        }
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
    fetchWorldCharacters: world => dispatch(fetchWorldCharacters(world)),
    fetchStoryCharacters: story => dispatch(fetchStoryCharacters(story)),
    currentCharacter: character => dispatch(currentCharacter(character))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Characters));
