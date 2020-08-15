import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../App.js";
import { setLoggedIn, setLoggedOut } from "../actions/authActions";

function useAuth(props) {
  const [loggingIn, setLoggingIn] = useState(false);
  const [deets, setDeets] = useState({});
  useEffect(() => {
    if (loggingIn) {
      fetch(BASE_URL + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ user: deets }),
      })
        .then((response) => response.json())
        .then((user) => {
          console.log("response on login:", user);
          if (user.error) {
            alert("Please try again, or click Sign Up below.");
          } else {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", user.token);

            props.setLoggedIn();
            props.history.push("/tome/worlds");
          }
        });
    }
    setLoggingIn(false);
  }, [loggingIn]);

  function logIn(userHash) {
    setDeets(userHash);
    setLoggedIn(true);
  }
  function logOut() {
    props.setLoggedOut();
  }

  return { logIn, logOut };
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: () => dispatch(setLoggedIn()),
    setLoggedOut: () => dispatch(setLoggedOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(useAuth);
