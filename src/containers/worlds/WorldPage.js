import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import {
  fetchStories,
  fetchWorldStories
} from "../../actions/storiesActions.js";
import Display from "../../components/Display.js";

const BASE_URL = "http://localhost:3000/";

class WorldPage extends Component {
  componentDidMount() {
    this.props.fetchWorldStories(this.props.world);
  }
  handleDeleteWorld = () => {
    this.deleteWorld(this.props.world);
  };
  deleteWorld = world => {
    console.log("deleting this world!");

    fetch(BASE_URL + `worlds/${world.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ world })
    }).then(() => {
      this.props.history.push(`/tome/worlds`);
    });
  };

  render() {
    console.log("WorldPage props: ", this.props);

    return (
      <Display
        {...this.props}
        handleDelete={this.handleDeleteWorld}
        IMG={this.props.world ? this.props.world.img : null}
        img_alt={this.props.world.name}
        category="worlds"
        item={this.props.world}
        title={this.props.world.name}
        text={this.props.world.description}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    worlds: state.worlds.worlds,
    logged_in: state.auth.logged_in,
    world: state.worlds.world
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchStories: () => dispatch(fetchStories()),
    fetchWorldStories: world => dispatch(fetchWorldStories(world))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(WorldPage));
