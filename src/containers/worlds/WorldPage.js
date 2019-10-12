import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import { fetchStories, fetchWorldStories } from "../../actions/storiesActions.js";
import Display from "../../components/Display.js";

class WorldPage extends Component {
  // let src = props.world.img ? props.world.img : IMG
  // let alt = props.world.img ? props.world.title : 'an old map and compass'

  // need to fetch and set the current stories
  componentDidMount() {
    this.props.fetchWorldStories(this.props.world);
  }

  render() {
    console.log("WorldPage props: ", this.props);

    return (
      <Display
        IMG={this.props.world.img}
        img_alt={this.props.world.name}
        item={this.props.world}
        title={this.props.world.name}
        text={this.props.world.description}
      />
      // <div className="panel" id="world">
      //   <div className="content_section">
      //     <img src={IMG} alt={"an antique map"} />
      //     {/* <img src={src} alt={alt} /> */}
      //     <h2>{this.props.world.name}</h2>
      //   </div>
      //   <div className="content_section last_section">
      //     <p>{this.props.world.description}</p>
      //   </div>
      // </div>
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
