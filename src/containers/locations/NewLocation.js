import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/2018_notebook/css/coda-slider.css";
import "../../css/2018_notebook/tooplate_style.css";
import {
  fetchWorldLocations,
  currentLocation
} from "../../actions/locationsActions.js";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import NewForm from "../NewForm";

const BASE_URL = "http://localhost:3000/";


class NewLocation extends Component {
  createLocation = e => {
    e.preventDefault();
    console.log("creating location");
    let location = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      world: this.props.worlds.world,
      story_id: document.getElementById("story_id").innerText
    };
    fetch(BASE_URL + "locations/new", {
      method: "POST",
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
      .then(newLocation => {
        console.log("newLocation: ", newLocation);
        this.props.currentLocation(newLocation);
        this.props.fetchWorldLocations(this.props);
        this.props.history.push(`/tome/locations/${newLocation.id}`);
      });
  };

  render() {
    console.log("NewLocation props: ", this.props);
    return <NewForm type="locations" handleNew={this.createLocation} />;
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    locations: state.locations.locations,
    logged_in: state.auth.logged_in
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWorldLocations: () => dispatch(fetchWorldLocations()),
    currentLocation: location => dispatch(currentLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(NewLocation));
