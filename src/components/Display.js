import React from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { connect } from "react-redux";
import "../css/tome.css";


const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

const Display = props => {
  console.log("Display props: ", props);
  return (
    <>
      <div className="content_section">
        <img src={props.IMG ? props.IMG : IMG} alt={props.img_alt ? props.img_alt : "an antique map"} className={'image_wrapper image_fl display_img'} />
        {/* <img src={src} alt={alt} /> */}
        <h2>{props.title}</h2>
      </div>
      <div className="content_section last_section">
        <p>{props.text}</p>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(composedAuthHOC(Display));
