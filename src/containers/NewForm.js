import React from "react";
import composedAuthHOC from "../HOC/AuthHOC";

const NewForm = props => {
  // handleNew comes in as a prop with whatever the correct dispatch for the thing type is

  return (
      <div className={"col_380 float_l"} id="NewForm">
        <h1>New {props.type}</h1>
        <form onSubmit={props.handleNew}>
          <h3>[Image Upload Stuff Will Go Here]</h3>
          <label for="name">
            {props.type === "story" ? "Title:" : "Name:"}
          </label>
          <input
            id="name"
            type="text"
            placeholder={props.type === "story" ? "Title" : "Name"}
            className="input_field"
          />
          <label for="description">Description:</label>
          <textarea id="description" className="input_field" />
          <input
            type="submit"
            value="Submit"
            id="submit"
            name="submit"
            className={"submit_btn"}
          />
        </form>
      </div>
  );
};

export default composedAuthHOC(NewForm);
