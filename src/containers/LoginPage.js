import React from "react";
import { connect } from "react-redux";
import { setLoggedIn } from "../actions/authActions";

const BASE_URL = "http://localhost:3000/";

const LoginPage = props => {
  // console.log('props in LoginPage: ', props)

  const handleLogIn = e => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    // console.log('username: ', username, 'password: ', password)
    logIn({ username, password });
  };


  const logIn = userHash => {
    // console.log("loggin in!", userHash);

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
        if (user.message) {
          alert(user.message);
        } else {
          // console.log("user: ", user);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", user.token);
          // console.log("props in login fetch: ", props);
          // update store with flag that user is logged in

          props.setLoggedIn();
          // console.log("loggedin", props);
          props.history.push("/home");
        }
      });
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
