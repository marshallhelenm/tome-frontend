import React from "react";
import EditForm from "../EditForm.js";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import { currentWorld, deleteWorld } from "../../actions/worldsActions.js";

const BASE_URL = "http://localhost:3000/";

const EditWorld = props => {
  console.log("EditWorld props: ", props);

  const handleDeleteWorld = () => {
    this.props.deleteWorld(this.props.world);
    this.props.history.push(`/tome/worlds`);
  };

  const editWorld = e => {
    e.preventDefault();
    console.log("saving changes to world");

    fetch(BASE_URL + `worlds/${props.world.id}`, {
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
        currentWorld: props.world
      })
    })
      .then(response => response.json())
      .then(world => {
        console.log("world: ", world);
        props.currentWorld(world);
        props.history.push(`/tome/worlds/${world.id}`);
      });
  };

  return (
    <>
      <EditForm
        {...props}
        item={props.world}
        handleEdit={editWorld}
        handleDelete={handleDeleteWorld}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    logged_in: state.auth.logged_in,
    world: state.worlds.world
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentWorld: world => dispatch(currentWorld(world)),
    deleteWorld: world => dispatch(deleteWorld(world))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(EditWorld));
