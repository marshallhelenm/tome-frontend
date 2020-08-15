import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import { Button, Box } from "grommet";
import { connect } from "react-redux";

const StoryPageButtons = (props) => {
  console.log("WorldPageButtons Props: ", props);
  return (
    <Box direction="row" pad="small">
      <Button primary href="/tome/world_notes" label="World Notes" />
      <Button primary href="/tome/characters" label="Characters" />
      <Button primary href="/tome/locations" label="Locations" />
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(composedAuthHOC(StoryPageButtons));
