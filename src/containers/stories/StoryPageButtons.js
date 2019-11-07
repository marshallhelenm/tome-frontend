import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ItemModal from "../ItemModal";
import { currentCharacter } from "../../actions/charactersActions.js";
import { currentLocation } from "../../actions/locationsActions.js";
import { getLocal } from "../../App";

const StoryPageButtons = props => {
  console.log("StoryPageButtons Props: ", props);
  return (
    <div className="button-bar">
      <Button as={Link} to="/tome/story_notes" color="brown" content="Notes" />
      <ItemModal
        {...props}
        url_path="characters"
        itemType="Characters"
        addItem={props.addItem}
        deleteItem={props.deleteItem}
        story={getLocal('story')}
        currentItem={props.currentCharacter}
      />
      <ItemModal
        {...props}
        url_path="locations"
        itemType="Locations"
        addItem={props.addItem}
        deleteItem={props.deleteItem}
        story={getLocal('story')}
        currentItem={props.currentLocation}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentCharacter: character => dispatch(currentCharacter(character)),
    currentLocation: location => dispatch(currentLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(StoryPageButtons));
