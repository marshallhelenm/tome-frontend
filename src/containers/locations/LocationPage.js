import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import {
  deleteLocation,
  fetchStoryLocations,
  fetchWorldLocations
} from "../../actions/locationsActions.js";
import Display from "../../components/Display.js";

const BASE_URL = "http://localhost:3000/";

const IMG =
  "https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg";

class LocationPage extends Component {
  redirectOnDelete = () => {
    this.props.history.push(`/tome/locations`);
  };
  handleDeleteLocation = () => {
    this.props.deleteLocation(
      this.props.location,
      this.props.stories.story,
      this.props.worlds.world,
      this.redirectOnDelete
    );
  };

  addItemToStory = story_id => {
    console.log("adding story: ", story_id);
    fetch(BASE_URL + `story_locations`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        location_id: this.props.location.id,
        story_id: story_id
      })
    })
    .then(response=>response.json())
    .then(story => {
      console.log(story);
      fetchStoryLocations(story);
    });
  };

  render() {
    console.log("LocationPage props: ", this.props);

    return (
      <Display
        {...this.props}
        category="locations"
        handleDelete={this.handleDeleteLocation}
        addItem={this.addItemToStory}
        IMG={this.props.location.img ? this.props.location.img : IMG}
        img_alt={this.props.location.name}
        item={this.props.location}
        title={this.props.location.name}
        text={this.props.location.description}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    locations: state.locations.locations,
    location: state.locations.location
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteLocation: (location, story, world, redirect) =>
      dispatch(deleteLocation(location, story, world, redirect)),
    fetchStoryLocations: story => dispatch(fetchStoryLocations(story)),
    fetchWorldLocations: world => dispatch(fetchWorldLocations(world))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(LocationPage));
