import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import EditForm from "../EditForm";
import { connect } from "react-redux";
import {
  currentLocation,
  deleteLocation
} from "../../actions/locationsActions.js";

const BASE_URL = "http://localhost:3000/";

const EditLocation = props => {
  console.log("Edit Location Form props: ", props);

  const handleDeleteLocation = () => {
    this.props.deleteLocation(this.props.location);
    this.props.history.push(`/tome/locations`);
  };

  const editLocation = e => {
    e.preventDefault();
    console.log("saving changes to location");

    fetch(BASE_URL + `locations/${props.location.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        user: JSON.parse(localStorage.getItem("user")),
        location: props.location
      })
    })
      .then(response => response.json())
      .then(location => {
        console.log("location: ", location);
        props.currentLocation(location);
        props.history.push(`/tome/locations/${location.id}`);
      });
  };

  return (
    <>
      <EditForm
        {...props}
        item={props.location}
        handleEdit={editLocation}
        handleDelete={handleDeleteLocation}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    logged_in: state.auth.logged_in,
    location: state.locations.location
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
