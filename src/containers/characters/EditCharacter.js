import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import { currentCharacter } from "../../actions/charactersActions.js";

const BASE_URL = "http://localhost:3000/";

const EditCharacter = props => {
    console.log('Edit Character Form props: ', props)
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
      <EditForm {...props} item={props.character} handleEdit={editCharacter} />
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
    currentCharacter: character => dispatch(currentCharacter(character))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(EditCharacter));
