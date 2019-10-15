import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/2018_notebook/css/coda-slider.css";
import "../../css/2018_notebook/tooplate_style.css";
import { fetchWorlds, currentWorld } from "../../actions/worldsActions.js";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import NewForm from "../NewForm";

const BASE_URL = "http://localhost:3000/";

class NewWorld extends Component {
  createWorld = e => {
    e.preventDefault();
    console.log("creating world");
    let world = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      user: JSON.parse(localStorage.getItem("user"))
    };
    
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
