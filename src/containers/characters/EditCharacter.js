import React, { Component } from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import {
  currentCharacter,
  deleteCharacter
} from "../../actions/charactersActions.js";
import { getLocal, setLocal, BASE_URL } from "../../App";

class EditCharacter extends Component {
  handleDeleteCharacter = () => {
    this.props.deleteCharacter(getLocal("character"));
    this.props.history.push(`/tome/characters`);
  };

  editCharacter = e => {
    e.preventDefault();
    console.log("saving changes to character");

    let character = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      user: JSON.parse(localStorage.getItem("user")).id,
      character_id: getLocal("character").id,
      img_url: document.getElementById("secret_url_collection").textContent
    };

    fetch(BASE_URL + `characters/${getLocal("character").id}`, {
      method: "PATCH",
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
      .then(character => {
        console.log("character: ", character);
        this.props.currentCharacter(character);
        setLocal("character", character);
        this.props.history.push(`/tome/characters/${character.id}`);
      });
  };
  render() {
    console.log("Edit Character Form props: ", this.props);
    return (
      <>
        <EditForm
          {...this.props}
          item={getLocal("character")}
          handleEdit={this.editCharacter}
          handleDelete={this.handleDeleteCharacter}
          item_type="characters"
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    logged_in: state.auth.logged_in,
    character: state.characters.character
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentCharacter: character => dispatch(currentCharacter(character)),
    deleteCharacter: character => dispatch(deleteCharacter(character))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(EditCharacter));
