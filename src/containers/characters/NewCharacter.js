import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/2018_notebook/css/coda-slider.css";
import "../../css/2018_notebook/tooplate_style.css";
import {
  fetchCharacters,
  currentCharacter
} from "../../actions/charactersActions.js";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import NewForm from "../NewForm";

const BASE_URL = "http://localhost:3000/";


class NewCharacter extends Component {
  createCharacter = e => {
    e.preventDefault();
    console.log("creating character");
    let character = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      user: JSON.parse(localStorage.getItem("user")),
      world: this.props.worlds.world
    };
    fetch(BASE_URL + "characters/new", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        character
      })
    })
      .then(response => response.json())
      .then(newCharacter => {
        console.log("newCharacter: ", newCharacter);
        this.props.currentCharacter(newCharacter);
        this.props.fetchCharacters(this.props);
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
    fetchCharacters: () => dispatch(fetchCharacters()),
    currentCharacter: character => dispatch(currentCharacter(character))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(NewCharacter));
