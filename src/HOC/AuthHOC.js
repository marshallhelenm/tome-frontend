import React from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";

const AuthHOC = (WrappedComponent) => {
  return class PrivacyHOC extends React.Component {
    render() {
      // console.log("authHOC props:", this.props);
      return !!localStorage.getItem("token") ? (
        // return true ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to="/" />
      );
    }
  };
};

const composedAuthHOC = compose(AuthHOC);

export default composedAuthHOC;
