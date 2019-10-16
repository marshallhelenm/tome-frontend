import React, { Component } from "react";
import Gallery from "../Gallery.js";
import {
  fetchWorldLocations,
  currentLocation,
  fetchStoryLocations
} from "../../actions/locationsActions.js";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";

const IMG =
  "https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg";

class Locations extends Component {
  componentDidMount() {
    console.log("Locations props: ", this.props);
    // this.props.stories.story ? this.props.fetchStoryLocations(this.props.stories.story) :
    this.props.fetchWorldLocations(this.props.worlds.world);
  }

  render() {
    console.log("locations props: ", this.props);
    return (
      <Gallery
        {...this.props}
        currentItem={this.props.currentLocation}
        defaultIMG={IMG}
        items={
          this.props.locations.story_locations
            ? this.props.locations.story_locations
            : this.props.locations.locations
        }
        type="locations"
        title={"Locations"}
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
    fetchWorldLocations: world => dispatch(fetchWorldLocations(world)),
    fetchStoryLocations: story => dispatch(fetchStoryLocations(story)),
    currentLocation: location => dispatch(currentLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Locations));
