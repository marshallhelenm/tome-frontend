import React, { Component } from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import {
  currentLocation,
  deleteLocation
} from "../../actions/locationsActions.js";
import { getLocal, setLocal } from "../../App";

const BASE_URL = "http://localhost:3000/"
;

class EditLocation extends Component {
  handleDeleteLocation = () => {
    this.props.deleteLocation(this.props.location);
    this.props.history.push(`/tome/locations`);
  };

  editLocation = e => {
    e.preventDefault();
    console.log("saving changes to location");

    let location = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      user: JSON.parse(localStorage.getItem("user")).id,
      location_id: this.props.location.id,
      img_url: document.getElementById("secret_url_collection").textContent
    };

    fetch(BASE_URL + `locations/${this.props.location.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        location
      })
    })
      .then(response => response.json())
      .then(location => {
        console.log("location: ", location);
        this.props.currentLocation(location);
        setLocal('location', location)
        this.props.history.push(`/tome/locations/${location.id}`);
      });
  };
  render() {
    console.log("Edit Location Form props: ", this.props);
    return (
      <>
        <EditForm
          {...this.props}
          item={this.props.location}
          handleEdit={this.editLocation}
          handleDelete={this.handleDeleteLocation}
          item_type="locations"
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    logged_in: state.auth.logged_in,
    location: getLocal("location")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentLocation: location => dispatch(currentLocation(location)),
    deleteLocation: location => dispatch(deleteLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(EditLocation));
