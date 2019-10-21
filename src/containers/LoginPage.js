import React, { Component } from "react";
import { connect } from "react-redux";
import { setLoggedIn, setLoggedOut } from "../actions/authActions";
import "../css/coda-slider.css";
import "../css/tooplate_style.css";
const BASE_URL = "http://localhost:3000/";

class LoginPage extends Component {
  // console.log('props in LoginPage: ', props)
  handleLogOut = () => {
    this.props.setLoggedOut();
  };

  handleLogIn = e => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    // console.log('username: ', username, 'password: ', password)
    this.logIn({ username, password });
  };

  logIn = userHash => {
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
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", user.token);

          this.props.setLoggedIn();
          this.props.history.push("/tome/worlds");
        }
      });
  };

  render() {
    return (
      <div className={"content_section"}>
        <h1>Log In</h1>
        <div className={"col_380 float_l"}>
          <form onSubmit={this.handleLogIn}>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="input_field"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="input_field"
            />
            <input type="submit" value='Log In' id='submit' name='submit' className={"submit_btn"}/>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logged_in: state.auth.logged_in,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoggedIn: () => dispatch(setLoggedIn()),
    setLoggedOut: () => dispatch(setLoggedOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
