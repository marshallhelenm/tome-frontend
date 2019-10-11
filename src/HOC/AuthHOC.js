import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {compose} from 'redux'


const AuthHOC = WrappedComponent => {
  return class PrivacyHOC extends React.Component {
    authorized = () => {
      return this.props.logged_in === 'true';
    };

    render() {
      // console.log("authHOC props:", this.props);
      return this.authorized() ? (
        // return true ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to="/" />
      );
    }
  };
};


const mapStateToProps = state => {
  return {
    ...state,
    logged_in: state.auth.logged_in,
    token: state.auth.token
  };
};

const composedAuthHOC = compose(
    connect(mapStateToProps), AuthHOC
)

export default composedAuthHOC;
