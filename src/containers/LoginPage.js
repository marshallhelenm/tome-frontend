import React, { Component } from "react";
import { connect } from "react-redux";
import { setLoggedIn, setLoggedOut } from "../actions/authActions";
import { assignCrumbs } from "../actions/breadcrumbActions";
import { Link } from "react-router-dom";
import { BASE_URL } from "../App.js";
import {
  Box,
  Heading,
  Form,
  FormField,
  TextInput,
  Image,
  Button,
} from "grommet";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  componentDidMount() {
    this.props.assignCrumbs([]);
    localStorage.clear();
  }

  // console.log('props in LoginPage: ', props)
  handleLogOut = () => {
    this.props.setLoggedOut();
  };

  handleLogIn = (e) => {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    // console.log('username: ', username, 'password: ', password)
    this.logIn({ username, password });
  };

  logIn = (userHash) => {
    // console.log("loggin in!", userHash);
    // console.log("base url: ", BASE_URL);

    fetch(BASE_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: userHash }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log("response on login:", user);
        if (user.error) {
          alert("Please try again, or click Sign Up below.");
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
      <Box>
        <Image
          id="login-img"
          src="https://res.cloudinary.com/dwfqeeh5f/image/upload/v1571932362/WorldBuildersTome/stack-o-globes.jpg"
        />
        <Heading>Log-in to your account</Heading>
        <Form
          value={this.state}
          onReset={() => this.setState({ username: "", password: "" })}
          onSubmit={this.handleLogIn}
          onChange={(nextValue) => this.setState(nextValue)}
        >
          <FormField name="username" htmlfor="username" label="Username">
            <TextInput name="username" id="username" placeholder="Username" />
          </FormField>
          <FormField name="password" htmlfor="password" label="Password">
            <TextInput
              name="password"
              id="password"
              placeholder="Password"
              type="password"
            />
          </FormField>

          <Button primary type="submit" label="Log In" />
        </Form>
        <Link className="login-link" to="/signup">
          New? Sign Up
        </Link>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.auth.logged_in,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: () => dispatch(setLoggedIn()),
    setLoggedOut: () => dispatch(setLoggedOut()),
    assignCrumbs: (trail) => dispatch(assignCrumbs(trail)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
