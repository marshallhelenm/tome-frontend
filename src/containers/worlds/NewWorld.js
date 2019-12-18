import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/notebook.css";
import "../../css/tooplate_style.css";
import { fetchWorlds, currentWorld } from "../../actions/worldsActions.js";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import NewForm from "../NewForm";
import { setLocal } from "../../App";

const BASE_URL = "http://localhost:3000/";
class NewWorld extends Component {
  createWorld = e => {
    e.preventDefault();
    console.log("creating world");
    let world = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      user_id: JSON.parse(localStorage.getItem("user")).user.id,
      img_url: document.getElementById("secret_url_collection").textContent
    };
    console.log(world);

    fetch(BASE_URL + "worlds/new", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ world })
    })
      .then(response => response.json())
      .then(newWorld => {
        console.log("newWorld: ", newWorld);
        this.props.currentWorld(newWorld);
        setLocal("world", newWorld);
        this.props.history.push(`/tome/worlds/${newWorld.id}`);
      });
  };

  render() {
    console.log("NewWorld props: ", this.props);
    return <NewForm type="worlds" handleNew={this.createWorld} />;
  }
}

const mapStateToProps = state => {
  return {
    worlds: state.worlds.worlds,
    logged_in: state.auth.logged_in
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWorlds: () => dispatch(fetchWorlds()),
    currentWorld: world => dispatch(currentWorld(world))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(NewWorld));
