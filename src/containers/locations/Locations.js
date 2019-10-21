import React, { Component } from "react";
import Gallery from "../Gallery.js";
import {
  fetchWorldLocations,
  currentLocation,
  fetchStoryLocations
} from "../../actions/locationsActions.js";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import { assignCrumbs } from "../../actions/breadcrumbActions";

const IMG =
  "https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg";

class Locations extends Component {
  componentDidMount() {
    console.log("Locations props: ", this.props);
    console.log("story: ", this.props.stories.story);
    this.props.stories.story
      ? this.props.fetchStoryLocations(this.props.stories.story)
      : this.props.fetchWorldLocations(this.props.worlds.world);
    this.props.assignCrumbs([
      ["/tome", "Home"],
      ["/tome/worlds", "Worlds"],
      [
        `/tome/worlds/${this.props.worlds.world.id}`,
        this.props.worlds.world.name
      ],
      [`/tome/locations`, "Locations"]
    ]);
  }

  render() {
    console.log("locations props: ", this.props);
    return (
      <Gallery
        {...this.props}
        currentItem={this.props.currentLocation}
        defaultIMG={IMG}
        items={
          this.props.stories.story
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
    currentLocation: location => dispatch(currentLocation(location)),
    assignCrumbs: trail => dispatch(assignCrumbs(trail))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Locations));
