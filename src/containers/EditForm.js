import React from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { connect } from "react-redux";

const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

const EditForm = props => {
  console.log("Edit Form Props: ", props);

  return (
    <>
      <div className={"col_380 float_l"} id="NewForm">
        <img
          src={props.IMG ? props.IMG : IMG}
          alt={props.img_alt ? props.img_alt : "an antique map"}
          className={"image_wrapper image_fl display_img"}
        />
        <form onSubmit={props.handleEdit}>
          <h3>[Image Upload Stuff Will Go Here]</h3>
          <label htmlFor="name">{props.type === "story" || props.type === "Note" ? "Title:" : "Name:"}</label>
          <input
            id='name'
            type="text"
            placeholder={props.type === "story" || props.type === "Note" ? "Title" : "Name"}
            defaultValue={props.item.title ? props.item.title : props.item.name}
            className="input_field"
          />
          <label htmlFor="description">Description:</label>
          <textarea id={props.type === "Note" ? "note-content" : "description"} className="input_field" placeholder='Description' defaultValue={props.item.description} />
          <input
            type="submit"
            value="Save"
            id="submit"
            name="submit"
            className={"submit_btn"}
          />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(composedAuthHOC(EditForm));
