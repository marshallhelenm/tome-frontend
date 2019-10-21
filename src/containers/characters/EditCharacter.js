import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import {
  currentCharacter,
  deleteCharacter
} from "../../actions/charactersActions.js";

const BASE_URL = "http://localhost:3000/";

const EditCharacter = props => {
  console.log("Edit Character Form props: ", props);

  const handleDeleteCharacter = () => {
    this.props.deleteCharacter(this.props.character);
    this.props.history.push(`/tome/characters`);
  };

  const editCharacter = e => {
    e.preventDefault();
    console.log("saving changes to character");

    fetch(BASE_URL + `characters/${props.character.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        user: JSON.parse(localStorage.getItem("user")),
        character: props.character
      })
    })
      .then(response => response.json())
      .then(character => {
        console.log("character: ", character);
        props.currentCharacter(character);
        props.history.push(`/tome/characters/${character.id}`);
      });
  };

  return (
    <>
      <EditForm
        {...props}
        item={props.character}
        handleEdit={editCharacter}
        handleDelete={handleDeleteCharacter}
        item_type='characters'
      />
    </>
  );
};

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
