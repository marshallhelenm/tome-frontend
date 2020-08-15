import React from "react";
import EditForm from "../EditForm.js";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import { currentWorld, deleteWorld } from "../../actions/worldsActions.js";
import { setLocal, BASE_URL } from "../../App.js";

const EditWorld = ({ deleteWorld, history, world }) => {
  const handleDeleteWorld = () => {
    deleteWorld(world);
    history.push(`/tome/worlds`);
  };

  const editWorld = (values) => {
    console.log("saving changes to world");
    let world = {
      ...values,
      img_url: document.getElementById("secret_url_collection").textContent,
    };

    fetch(BASE_URL + `worlds/${world.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ world }),
    })
      .then((response) => response.json())
      .then((world) => {
        console.log("world: ", world);
        currentWorld(world);
        setLocal("world", world);
        history.push(`/tome/worlds/${world.id}`);
      });
  };
  return (
    <>
      <EditForm
        item={world}
        handleEdit={editWorld}
        handleDelete={handleDeleteWorld}
        item_type="worlds"
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    world: state.worlds.world,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    currentWorld: (world) => dispatch(currentWorld(world)),
    deleteWorld: (world) => dispatch(deleteWorld(world)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(EditWorld));
