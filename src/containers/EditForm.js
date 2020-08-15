import React, { useState } from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import DeleteModal from "../components/DeleteModal.js";
import { connect } from "react-redux";
import URLInputs from "../components/URLInputs.js";
import { Box, Form, FormField, TextInput, Button, TextArea } from "grommet";

const EditForm = ({ item, handleEdit, type, handleDelete }) => {
  const INITIAL_STATE =
    type === "story" || type === "Note"
      ? { title: item.title, content: item.content }
      : { name: item.name, description: item.description };
  const [value, setValue] = useState(INITIAL_STATE);

  return (
    <Box id="NewForm">
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({ INITIAL_STATE })}
        onSubmit={() => handleEdit(value)}
      >
        <FormField
          name="name"
          htmlfor="name"
          label={type === "story" || type === "Note" ? "Title" : "Name"}
        >
          <TextInput
            id="name"
            type="text"
            placeholder={type === "story" || type === "Note" ? "Title" : "Name"}
            defaultValue={value.title ? value.title : value.name}
            className="input_field"
          />
        </FormField>
        <FormField
          htmlfor="text"
          label={type === "Note" ? "Content" : "Description"}
        >
          <TextArea
            id="text"
            name="text"
            placeholder={type === "Note" ? "Content" : "Description"}
            defaultValue={value.description ? value.description : value.content}
          />
        </FormField>
        <URLInputs />
        <Button primary type="submit" id="submit" label="Save" />
        <DeleteModal
          handleDelete={handleDelete}
          name={item.title ? item.title : item.name}
        />
      </Form>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(composedAuthHOC(EditForm));
