import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/coda-slider.css";
import "../../css/tooplate_style.css";
import {
  fetchWorldCharacters,
  currentCharacter
} from "../../actions/charactersActions.js";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import NewForm from "../NewForm";

const BASE_URL = "http://localhost:3000/";

class NewCharacter extends Component {
  createCharacter = e => {
    e.preventDefault();
    console.log("creating character");

    fetch(BASE_URL + "characters/new", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        world: this.props.worlds.world,
        story_id: document.getElementById("story_id").innerText
      })
    })
      .then(response => response.json())
      .then(newCharacter => {
        console.log("newCharacter: ", newCharacter);
        this.props.currentCharacter(newCharacter);
        
        // this.props.fetchWorldCharacters(this.props);
        this.props.history.push(`/tome/characters/${newCharacter.id}`);
      });
  };

  render() {
    console.log("NewCharacter props: ", this.props);
    return <NewForm type="characters" handleNew={this.createCharacter} />;
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    characters: state.characters.characters,
    logged_in: state.auth.logged_in
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWorldCharacters: () => dispatch(fetchWorldCharacters()),
    currentCharacter: character => dispatch(currentCharacter(character))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(NewCharacter));
