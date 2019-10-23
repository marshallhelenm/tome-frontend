import React from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { connect } from "react-redux";
import "../css/tome.css";
import DeleteModal from "./DeleteModal.js";
import StoryPageButtons from "../containers/stories/StoryPageButtons.js";
import AddToStory from "./AddToStory.js";
import WorldPageButtons from "../containers/worlds/WorldPageButtons.js";
import { Segment, Button } from "semantic-ui-react";
import ImgCarousel from "../containers/ImgCarousel.js";

const Display = props => {
  console.log("Display props: ", props);


  const clickEdit = () => {
    props.history.push(`/tome/edit/${props.category}/${props.item.id}`);
  };

  return (
    <>
      <div className="content_section">
        {/* {props.IMG ? (
          <img
            src={props.IMG}
            alt={props.img_alt ? props.img_alt : "an antique map"}
            className={"image_wrapper image_fl display_img"}
          />
        ) : null} */}
        {/* <img src={src} alt={alt} /> */}
        <h2>{props.title}</h2>
      </div>
      <div className="content_section">
        <ImgCarousel images={props.item.images} item={props.item} refreshItem={props.refreshItem} />
      </div>
      {props.category === "stories" ? (
        <div className="content_section">
          <StoryPageButtons
            {...props}
            addItem={props.addItem}
            deleteItem={props.deleteItem}
          />
        </div>
      ) : null}
      {props.category === "worlds" ? (
        <div className="content_section">
          <WorldPageButtons {...props} />
        </div>
      ) : null}
      <div className="content_section last_section">
        {props.text ? <Segment>{props.text}</Segment> : null}
        <Button
          type="submit"
          value="Edit"
          id="edit-btn"
          name="submit"
          className="submit_btn"
          onClick={clickEdit}
        >
          Edit
        </Button>
        <DeleteModal
          handleDelete={props.handleDelete}
          name={props.title ? props.title : props.name}
        />
        {props.addItem ? <AddToStory addItem={props.addItem} /> : null}
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
