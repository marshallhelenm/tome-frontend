import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { connect } from "react-redux";
import { fetchLocations, fetchStoryLocations } from "../actions/locationsActions.js";
import Display from "../components/Display.js";

class LocationPage extends Component {
  componentDidMount() {
    // this.props.fetchStoryLocations(this.props.location);
  }
  // need to change the above to call on characters and locations instead

  render() {
    console.log("LocationPage props: ", this.props);

    return (
      <Display
        IMG={this.props.location.img}
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
    fetchLocations: () => dispatch(fetchLocations()),
    fetchStoryLocations: location => dispatch(fetchStoryLocations(location))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(LocationPage));
