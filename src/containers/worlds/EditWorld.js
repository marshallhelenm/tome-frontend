import React, { Component } from "react";
import EditForm from "../EditForm.js";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import { currentWorld, deleteWorld } from "../../actions/worldsActions.js";
import { getLocal, setLocal } from "../../App.js";

const BASE_URL = "https://wbtome-backend.herokuapp.com/";
class EditWorld extends Component {
  handleDeleteWorld = () => {
    this.props.deleteWorld(this.props.world);
    this.props.history.push(`/tome/worlds`);
  };

  editWorld = e => {
    e.preventDefault();
    console.log("saving changes to world");
    let world = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      user_id: JSON.parse(localStorage.getItem("user")).user.id,
      currentWorld: getLocal("world").id,
      img_url: document.getElementById("secret_url_collection").textContent
    };

    fetch(BASE_URL + `worlds/${this.props.world.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ world })
    })
      .then(response => response.json())
      .then(world => {
        console.log("world: ", world);
        this.props.currentWorld(world);
        setLocal("world", world);
        this.props.history.push(`/tome/worlds/${world.id}`);
      });
  };
  render() {
    console.log("EditWorld props: ", this.props);
    return (
      <>
        <EditForm
          {...this.props}
          item={this.props.world}
          handleEdit={this.editWorld}
          handleDelete={this.handleDeleteWorld}
          item_type="worlds"
        />
      </>
    );
  }
}

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
