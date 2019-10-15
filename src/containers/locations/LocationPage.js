import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import Display from "../../components/Display.js";

const BASE_URL = "http://localhost:3000/";
const IMG =
  "https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg";

class LocationPage extends Component {

  handleDeleteLocation = () => {
    this.deleteLocation(this.props.location);
  };
  deleteLocation = location => {
    console.log("deleting this location!");

    fetch(BASE_URL + `locations/${location.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ location })
    }).then(() => {
      this.props.history.push(`/tome/locations`);
    });
  };


  render() {
    console.log("LocationPage props: ", this.props);

    return (
      <Display
        {...this.props}
        category='locations'
        handleDelete={this.handleDeleteLocation}
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
    logged_in: state.auth.logged_in,
    location: state.locations.location
  };
};
const mapDispatchToProps = dispatch => {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(LocationPage));
