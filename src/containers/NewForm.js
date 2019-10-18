import React from "react";
import composedAuthHOC from "../HOC/AuthHOC";
import axios from "axios";

const NewForm = props => {
  // state={selectedFile: null}
  console.log("new form props: ", props);

  const storyItem = () => {
    return props.stories.story;
  };

  // const handleFileSelect = (e) => {
  //   this.setState({selectedFile: e.target.files[0]})
  // }

  // const fileUploadHandler = () => {
  //   axios.post('')
  // }

  return (
    <div className={"col_380 float_l"} id="NewForm">
      <h1>New {props.type}</h1>
      <form onSubmit={props.handleNew}>
        <div id="story_id">{storyItem() ? props.stories.story.id : null}</div>

        {/* <div>
          <input type='file' onChange={handleFileSelect} />

        </div> */}

        <div>
          <label htmlFor="name">
            {props.type === "story" || props.type === "Note"
              ? "Title:"
              : "Name:"}
          </label>
          <input
            id="name"
            type="text"
            placeholder={
              props.type === "story" || props.type === "Note" ? "Title" : "Name"
            }
            className="input_field"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id={props.type === "Note" ? "note-content" : "description"}
            placeholder={props.type === "Note" ? "Content" : "Description"}
            className="input_field"
          />
        </div>
        <input
          type="submit"
          value="Save"
          id="submit"
          name="submit"
          className={"submit_btn"}
        />
      </form>
    </div>
  );
};

export default composedAuthHOC(NewForm);
