import React, { Component } from "react";
import Gallery from "../Gallery.js";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import {
  fetchWorldNotes,
  currentWorldNote
} from "../../actions/worldNotesActions.js";

const IMG =
  "https://cdn.pixabay.com/photo/2016/04/30/13/11/texture-1362877_1280.jpg";

class WorldNotes extends Component {

  componentDidMount(){
    console.log("world notes props: ", this.props);
    this.props.fetchWorldNotes(this.props.worlds.world)
  }

  render() {
    return (
      <Gallery
        {...this.props}
        currentItem={this.props.currentWorldNote}
        defaultIMG={IMG}
        items={this.props.world_notes.world_notes}
        item_type="world_note"
        type="world_notes"
        title={"World Notes"}
        // title={this.props.worlds.world.title}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWorldNotes: world => dispatch(fetchWorldNotes(world)),
    currentWorldNote: world_note => dispatch(currentWorldNote(world_note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(WorldNotes));
