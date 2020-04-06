import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/notebook.css";
import "../../css/tooplate_style.css";
import {
  currentLocation
} from "../../actions/locationsActions.js";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import NewForm from "../NewForm";
import { getLocal, setLocal, BASE_URL } from "../../App";

class NewLocation extends Component {
  createLocation = e => {
    e.preventDefault();
    console.log("creating location");

    let location = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      world_id: getLocal("world").id,
      img_url: document.getElementById("secret_url_collection").textContent
    };

    fetch(BASE_URL + "locations/new", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ location })
    })
      .then(response => response.json())
      .then(newLocation => {
        console.log("newLocation: ", newLocation);
        this.props.currentLocation(newLocation);
        setLocal("location", newLocation);
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
    currentLocation: location => dispatch(currentLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(NewLocation));
