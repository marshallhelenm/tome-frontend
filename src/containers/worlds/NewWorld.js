import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWorlds, currentWorld } from "../../actions/worldsActions.js";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import NewForm from "../NewForm";
import { setLocal, BASE_URL } from "../../App";

const NewWorld = ({ currentWorld, history, logged_in, fetchWorlds }) => {
  const createWorld = (values) => {
    let world = {
      ...values,
      img_url: document.getElementById("secret_url_collection").textContent,
    };
    console.log("creating world");
    fetch(BASE_URL + "worlds/new", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ world }),
    })
      .then((response) => response.json())
      .then((newWorld) => {
        console.log("newWorld: ", newWorld);
        currentWorld(newWorld);
        setLocal("world", newWorld);
        history.push(`/tome/worlds/${newWorld.id}`);
      });
  };

  return <NewForm type="worlds" handleNew={createWorld} />;
};

const mapStateToProps = (state) => {
  return {
    worlds: state.worlds.worlds,
    logged_in: state.auth.logged_in,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorlds: () => dispatch(fetchWorlds()),
    currentWorld: (world) => dispatch(currentWorld(world)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(NewWorld));
