import React, { Component } from "react";
import "../css/notebook1.css";
import "../css/notebook2.css";
import Polaroid from "../components/Polaroid";
import { fetchWorlds, currentWorld } from "../actions/worldsActions.js";
import { connect } from "react-redux";
import composedAuthHOC from "../HOC/AuthHOC.js";

const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

class Worlds extends Component {
  componentDidMount() {
    // console.log("fetching worlds");
    this.props.fetchWorlds(this.props);
  }
  generateCards = () => {
    // console.log("cards!", this.props.worlds);
    return this.props.worlds.map(world => {
      return (
        <Polaroid
          handleClick={this.clickWorld}
          world={world}
          key={world.name}
          id={world.id}
        />
      );
    });
  };

  clickWorld = e => {
    e.preventDefault();
    // set current world in state
    let world;
    this.props.worlds.forEach(w => {
      console.log(w.id, e.currentTarget.id)
      if (`${w.id}` === `${e.currentTarget.id}`){
        world = w
      }
      return world
    })
    console.log('world: ', world)
    this.props.currentWorld(world)
    this.props.history.push(`/worlds/${e.currentTarget.id}`);
  };

  render() {
    console.log("Worlds props: ", this.props);
    return (
      <div className="panel" id="worlds">
        <div className="content_section">
          <h2>Your Worlds</h2>
        </div>
        <div className="content_section last_section">
          {this.generateCards()}
          <Polaroid
            handleClick={this.clickWorld}
            id="new"
            img={IMG}
            text="New World"
          />
        </div>
      </div>
    );
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
    currentWorld: (world) => dispatch(currentWorld(world))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Worlds));
