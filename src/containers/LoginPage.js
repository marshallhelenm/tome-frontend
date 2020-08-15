import React, { useState } from "react";
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

const LoginPage = ({ setLoggedOut, setLoggedIn, history }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const [values, setValues] = useState(INITIAL_STATE);

  // console.log('props in LoginPage: ', props)
  const handleLogOut = () => {
    setLoggedOut();
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    logIn(values);
  };

  const logIn = (userHash) => {
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

          setLoggedIn();
          history.push("/tome/worlds");
        }
      });
  };

  return (
    <Box>
      <Image
        id="login-img"
        src="https://res.cloudinary.com/dwfqeeh5f/image/upload/v1571932362/WorldBuildersTome/stack-o-globes.jpg"
      />
      <Heading>Log-in to your account</Heading>
      <Form
        value={values}
        onReset={() => setValues(INITIAL_STATE)}
        onSubmit={handleLogIn}
        onChange={(nextValue) => setValues(nextValue)}
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
};

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
