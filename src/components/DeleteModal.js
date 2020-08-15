import React, { useState } from "react";
import { Layer, Button, Box, Heading } from "grommet";
import composedAuthHOC from "../HOC/AuthHOC";

const DeleteModal = ({ handleDelete, name }) => {
  const [show, setShow] = useState(false);

  return (
    <Box>
      <Button label="Delete" onClick={() => setShow(true)} />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          id="delete-modal"
        >
          <Heading>Are you sure you want to delete {name}?</Heading>
          <Box>
            This action is permanent, and cannot be undone!
            <Box direction="row">
              <Button label="Delete" onClick={handleDelete} />
              <Button
                label="Cancel"
                onClick={() => {
                  setShow(false);
                }}
              />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default composedAuthHOC(DeleteModal);
