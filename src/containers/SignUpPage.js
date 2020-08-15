import React, { useState } from "react";
import { connect } from "react-redux";
import { setLoggedIn } from "../actions/authActions";
import { Link } from "react-router-dom";
import { BASE_URL } from "../App";
import {
  Box,
  Image,
  Heading,
  Form,
  TextInput,
  Button,
  FormField,
} from "grommet";

const INITIAL_STATE = {
  username: "",
  password: "",
  confirm: "",
};

const SignUpPage = (props) => {
  const [userDetails, setUserDetails] = useState(INITIAL_STATE);

  const handleSignUp = (e) => {
    e.preventDefault();
    const { username, password, confirm } = userDetails;
    signUp({ username, password, confirm });
  };

  const signUp = (userHash) => {
    console.log("Signing Up!", userHash);

    fetch(BASE_URL + "signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: userHash }),
    })
      .then((response) => response.json())
      .then((user) => {
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
          props.history.push("/");
        }
      });
  };

  return (
    <Box>
      <Image
        id="login-img"
        src="https://res.cloudinary.com/dwfqeeh5f/image/upload/v1571932362/WorldBuildersTome/stack-o-globes.jpg"
      />
      <Heading>Sign Up</Heading>
      <Form
        value={userDetails}
        onReset={() => setUserDetails(INITIAL_STATE)}
        onSubmit={handleSignUp}
        onChange={(nextValue) => setUserDetails(nextValue)}
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
        <FormField name="confirm" htmlfor="confirm" label="Confirm Password">
          <TextInput
            id="confirm"
            name="confirm"
            placeholder="Confirm Password"
            type="password"
          />
        </FormField>

        <Button primary type="submit" label="Sign Up" />
      </Form>
      <Link className="login-link" to="/">
        Already have an account? Log In
      </Link>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: () => dispatch(setLoggedIn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
