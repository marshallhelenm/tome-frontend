import React, { useState } from "react";
import composedAuthHOC from "../HOC/AuthHOC";
import { connect } from "react-redux";
import URLInputs from "../components/URLInputs";
import {
  Box,
  Button,
  Form,
  Heading,
  FormField,
  TextInput,
  TextArea,
} from "grommet";

const NewForm = ({ stories, handleNew, type }) => {
  const INITIAL_STATE =
    type === "story" || type === "Note"
      ? { title: "", content: "" }
      : { name: "", description: "" };
  const [value, setValue] = useState(INITIAL_STATE);

  const storyItem = () => {
    return stories.story;
  };
  return (
    <Box id="NewForm">
      <Heading>New {type}</Heading>
      <Form
        onSubmit={() => handleNew(value)}
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({ INITIAL_STATE })}
      >
        <div id="story_id">{storyItem() ? stories.story.id : null}</div>
        <FormField
          name="name"
          htmlfor="name"
          label={type === "story" || type === "Note" ? "Title" : "Name"}
        >
          <TextInput
            id="name"
            type="text"
            placeholder={type === "story" || type === "Note" ? "Title" : "Name"}
            className="input_field"
          />
        </FormField>
        <FormField
          htmlfor={
            type === "story" || type === "Note" ? "content" : "description"
          }
          label={type === "Note" ? "Content" : "Description"}
        >
          <TextArea
            id={type === "story" || type === "Note" ? "content" : "description"}
            name={
              type === "story" || type === "Note" ? "content" : "description"
            }
            placeholder={type === "Note" ? "Content" : "Description"}
          />
        </FormField>
        <URLInputs />
        <Button primary type="submit" id="submit" label="Submit" />
      </Form>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addBreadCrumb: (path, displayName) =>
//       dispatch(addBreadCrumb(path, displayName)),
//     removeOneCrumb: () => dispatch(removeOneCrumb())
//   };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(composedAuthHOC(NewForm));
