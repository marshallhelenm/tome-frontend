import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import {
  deleteLocation,
  fetchStoryLocations,
  fetchWorldLocations,
  fetchLocation
} from "../../actions/locationsActions.js";
import Display from "../../components/Display.js";
import { addBreadCrumb } from "../../actions/breadcrumbActions";
import { getLocal } from "../../App.js";

const BASE_URL = "http://localhost:3000/";

const IMG =
  "https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg";

class LocationPage extends Component {
  componentDidMount() {
    this.props.addBreadCrumb(
      `/tome/characters/${getLocal("location").id}`,
      getLocal("location").name
    );
  }

  redirectOnDelete = () => {
    this.props.history.push(`/tome/locations`);
  };
  handleDeleteLocation = () => {
    this.props.deleteLocation(
      getLocal("location"),
      getLocal("story"),
      getLocal("world"),
      this.redirectOnDelete
    );
  };

  refreshLocation = () => {
    this.props.fetchLocation(getLocal('location').id);
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
        location_id: getLocal("location").id,
        story_id: story_id
      })
    })
      .then(response => response.json())
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
        refreshItem={this.refreshLocation}
        img_alt={getLocal("location").name}
        item={getLocal("location")}
        title={getLocal("location").name}
        text={getLocal("location").description}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    locations: getLocal("locations"),
    location: state.locations.location
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteLocation: (location, story, world, redirect) =>
      dispatch(deleteLocation(location, story, world, redirect)),
    fetchStoryLocations: story => dispatch(fetchStoryLocations(story)),
    fetchLocation: id => dispatch(fetchLocation(id)),
    addBreadCrumb: (path, displayName) =>
      dispatch(addBreadCrumb(path, displayName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(LocationPage));
