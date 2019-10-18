import React from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { connect } from "react-redux";
import "../css/tome.css";
import DeleteModal from "./DeleteModal.js";
import StoryPageButtons from "../containers/stories/StoryPageButtons.js";
import AddToStory from "./AddToStory.js";

const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

const Display = props => {
  console.log("Display props: ", props);

  const clickEdit = () => {
    props.history.push(`/tome/edit/${props.category}/${props.item.id}`);
  };

  return (
    <>
      <div className="content_section">
        <img
          src={props.IMG ? props.IMG : IMG}
          alt={props.img_alt ? props.img_alt : "an antique map"}
          className={"image_wrapper image_fl display_img"}
        />
        {/* <img src={src} alt={alt} /> */}
        <h2>{props.title}</h2>
      </div>
      {props.category === "stories" ? (
        <div>
          <StoryPageButtons {...props} addItem={props.addItem} deleteItem={props.deleteItem} />
        </div>
      ) : null}
      <div className="content_section last_section">
        <p>{props.text}</p>
      </div>
      <input
        type="submit"
        value="Edit"
        id="edit-btn"
        name="submit"
        className="submit_btn"
        onClick={clickEdit}
      />
      <DeleteModal
        handleDelete={props.handleDelete}
        name={props.title ? props.title : props.name}
      />
      {props.addItem ? <AddToStory addItem={props.addItem} /> : null}
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(composedAuthHOC(Display));
