import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StoryPageButtons = props => {
  console.log("WorldPageButtons Props: ", props);
  return (
    <div className='button-bar' >
      <Button as={Link} to="/tome/world_notes" color="brown" content="World Notes" />
      <Button as={Link} to="/tome/stories" color="brown" content="Stories" />
      <Button
        as={Link}
        to="/tome/characters"
        color="brown"
        content="Characters"
      />
      <Button
        as={Link}
        to="/tome/locations"
        color="brown"
        content="Locations"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(composedAuthHOC(StoryPageButtons));
