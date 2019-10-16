import React from "react";
import composedAuthHOC from "../HOC/AuthHOC";

const NewForm = props => {
  console.log("new form props: ", props);

  const storyItem = () => {
    return props.stories.story;
  };

  return (
    <div className={"col_380 float_l"} id="NewForm">
      <h1>New {props.type}</h1>
      <form onSubmit={props.handleNew}>
        <h3>[Image Upload Stuff Will Go Here]</h3>
        <div id="story_id">{storyItem() ? props.stories.story.id : null}</div>
        <label htmlFor="name">
          {props.type === "story" || props.type === "Note" ? "Title:" : "Name:"}
        </label>
        <input
          id="name"
          type="text"
          placeholder={
            props.type === "story" || props.type === "Note" ? "Title" : "Name"
          }
          className="input_field"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id={props.type === "Note" ? "note-content" : "description"}
          placeholder={props.type === "Note" ? "Content" : "Description"}
          className="input_field"
        />
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
