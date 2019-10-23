import React from "react";
import { connect } from "react-redux";
import { setLoggedIn } from "../actions/authActions";
import "../css/notebook.css";
import "../css/tooplate_style.css";
import {
  Segment,
  Form,
  Grid,
  Header,
  Image,
  Button,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:3000/";

const SignUpPage = props => {

  const handleSignUp = e => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    let confirm_password = e.target.confirm_password.value;
    signUp({ username, password, confirm_password });
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
          alert(
            "Either that username is already taken, or your passwords didn't match. Please try again."
          );
        } else {
          console.log("user: ", user);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", user.token);
          console.log("props in signup fetch: ", props);

          props.setLoggedIn();
          console.log("loggedin", props);
          props.history.push("/tome/worlds");
        }
      });
  };

  return (
    <div className={"content_section"}>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo.png" /> Sign Up
          </Header>
          <Form size="large" onSubmit={handleSignUp}>
            <Segment stacked>
              <Form.Input
                icon="user"
                fluid
                iconPosition="left"
                id="username"
                placeholder="Username"
              />
              <Form.Input
                id="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Form.Input
                id="confirm_password"
                fluid
                icon="lock"
                name="confirm_password"
                iconPosition="left"
                placeholder="Confirm Password"
                type="password"
              />

              <Button color="teal" fluid size="large">
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/">Log In</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
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
)(SignUpPage);
