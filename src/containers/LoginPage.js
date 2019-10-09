import React from "react";
import { connect } from "react-redux";
import { setLoggedIn } from "../actions/authActions";

const BASE_URL = "http://localhost:3000/";

const LoginPage = props => {
  const logIn = userHash => {
    console.log("loggin in!", userHash);

    props.setLoggedIn("token999999");

    fetch(BASE_URL + "login", {
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
          alert(user.error);
        } else {
          console.log("user: ", user);
          localStorage.setItem("token", user.jwt);
          console.log("props in login fetch: ", props);
          // update store with flag that user is logged in

          console.log("loggedin", setLoggedIn);
          props.setLoggedIn();
        }
      });
  };

  const handleLogIn = e => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    logIn({ username, password });
  };

  const logOut = () => {
    console.log("logging out!");
    localStorage.setItem("token", null);
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogIn}>
        <input id="username" type="text" placeholder="Username" />
        <input id="password" type="text" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("map state to props auth", state);
  return {
    logged_in: state.auth.logged_in,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoggedIn: (token = null) => dispatch(setLoggedIn(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
