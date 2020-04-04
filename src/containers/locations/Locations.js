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
import { getLocal } from "../../App.js";

const IMG =
  "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1586019077/WorldBuildersTome/jakob-braun-RHltK9oYD7w-unsplash.jpg";

class Locations extends Component {
  componentDidMount() {
    console.log("Locations props: ", this.props);
    console.log("story: ", this.props.stories.story);
    this.props.fetchWorldLocations(getLocal("world"));
    this.props.assignCrumbs([
      ["/tome", "Home"],
      ["/tome/worlds", "Worlds"],
      [`/tome/worlds/${getLocal("world").id}`, getLocal("world").name],
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
        item_type="location"
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
