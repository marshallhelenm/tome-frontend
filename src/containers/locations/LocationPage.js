import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import Display from "../../components/Display.js";
import { deleteLocation } from "../../actions/locationsActions.js";

const IMG =
  "https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg";

class LocationPage extends Component {
  handleDeleteLocation = () => {
    this.props.deleteLocation(this.props.location);
    this.props.history.push(`/tome/locations`);
  };

  render() {
    console.log("LocationPage props: ", this.props);

    return (
      <Display
        {...this.props}
        category="locations"
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
const mapDispatchToProps = dispatch => {
  return {
    deleteLocation: location => dispatch(deleteLocation(location))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(LocationPage));
