import React from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { connect } from "react-redux";

const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

const WorldPage = props => {
  // let src = props.world.img ? props.world.img : IMG
  // let alt = props.world.img ? props.world.title : 'an old map and compass'


  console.log("WorldPage props: ", props);
  return (
    <div className="panel" id="world">
      <div className="content_section">
        {/* <img src={src} alt={alt} /> */}
        <h2>{props.world.name}</h2>
      </div>
      <div className="content_section last_section">
        <p>{props.world.description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      worlds: state.worlds.worlds,
      logged_in: state.auth.logged_in,
      world: state.worlds.world
    };
  };

export default connect(mapStateToProps)(composedAuthHOC(WorldPage));
