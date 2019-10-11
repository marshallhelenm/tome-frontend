import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { connect } from "react-redux";
import { fetchStories, fetchWorldStories } from "../actions/storiesActions.js";

const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

class Display extends Component {
  // let src = props.world.img ? props.world.img : IMG
  // let alt = props.world.img ? props.world.title : 'an old map and compass'

  // need to fetch and set the current stories
  componentDidMount() {
    this.props.fetchWorldStories(this.props.world);
  }

  render() {
    console.log("Display props: ", this.props);
    return (
      <div className="panel" id="world">
        <div className="content_section">
          <img src={IMG} alt={"an antique map"} />
          {/* <img src={src} alt={alt} /> */}
          <h2>{this.props.world.name}</h2>
        </div>
        <div className="content_section last_section">
          <p>{this.props.world.description}</p>
        </div>
      </div>
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
)(composedAuthHOC(Display));
