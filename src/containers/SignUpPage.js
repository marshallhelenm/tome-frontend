import React, { Component } from "react";
import { connect } from "react-redux";
import { setLoggedIn } from "../actions/authActions";

const BASE_URL = "http://localhost:3000/";

const SignUpPage = props => {
  const handleSignUp = e => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    signUp({ username, password });
  };

  const signUp = userHash => {
    console.log("Signing Up!", userHash);

    fetch(BASE_URL + "signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user: userHash })
    })
      .then(response => response.json())
      .then(user => {
        if (user.error) {
          alert("Looks like that didn't work... please try again!");
        } else {
          console.log("user: ", user);
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', user.token);
          console.log("props in signup fetch: ", props);

          props.setLoggedIn();
          console.log("loggedin", props);
          props.history.push("/tome");
        }
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input id="username" type="text" placeholder="Username" />
        <input id="password" type="text" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    logged_in: state.auth.logged_in,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoggedIn: () => dispatch(setLoggedIn())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
