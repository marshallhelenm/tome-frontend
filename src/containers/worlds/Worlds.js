import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/2018_notebook/css/coda-slider.css";
import "../../css/2018_notebook/tooplate_style.css";
import Gallery from "../Gallery.js";
import { fetchWorldCharacters } from "../../actions/charactersActions.js";
import { fetchWorldLocations } from "../../actions/locationsActions.js";
import { fetchWorlds, currentWorld } from "../../actions/worldsActions.js";
import composedAuthHOC from "../../HOC/AuthHOC.js";

const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

class Worlds extends Component {
  componentDidMount() {
    this.props.fetchWorlds(this.props);
    // this.props.fetchWorldCharacters(this.props.story);
    // this.props.fetchWorldLocations(this.props.story);
  }
  render() {
    console.log("Worlds props: ", this.props);
    return (
      <Gallery
        {...this.props}
        // fetchItems={this.props.fetchWorlds}
        currentItem={this.props.currentWorld}
        defaultIMG={IMG}
        items={this.props.worlds.worlds}
        type="worlds"
        title={"Your Worlds"}
      />
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
    currentWorld: world => dispatch(currentWorld(world)),
    fetchWorldCharacters: story => dispatch(fetchWorldCharacters(story)),
    fetchWorldLocations: story => dispatch(fetchWorldLocations(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Worlds));
