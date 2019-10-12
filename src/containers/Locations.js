import React, { Component } from "react";
import Gallery from "./Gallery.js";
import { fetchLocations, currentLocation } from "../actions/locationsActions.js";
import { connect } from "react-redux";
import composedAuthHOC from "../HOC/AuthHOC.js";

const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

class Locations extends Component {




  
  render() {
    console.log("locations props: ", this.props);
    return (
      <Gallery
        {...this.props}
        currentItem={this.props.currentLocation}
        defaultIMG={IMG}
        items={this.props.locations.locations}
        type="locations"
        title={'Locations'}
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
    fetchLocations: () => dispatch(fetchLocations()),
    currentLocation: location => dispatch(currentLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Locations));
