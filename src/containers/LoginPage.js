import React, { useState } from "react";
import { connect } from "react-redux";
import { setLoggedIn, setLoggedOut } from "../actions/authActions";
import { assignCrumbs } from "../actions/breadcrumbActions";
import { BASE_URL } from "../App.js";
import {
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Input,
  Button,
  FormErrorMessage,
  FormControl,
  Link,
} from "@chakra-ui/core";
import SimpleBox from "../components/SimpleBox";
import { useHistory, Link as RouterLink } from "react-router-dom";

const INITIAL_STATE = {
  username: "",
  password: "",
  confirm: "",
};

const LogInPage = ({ setLoggedIn }) => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState(null);
  const [logIn, setLogIn] = useState(true);
  const [isSubmitting, setSubmitting] = useState(false);
  const history = useHistory();

  function handleChange(e) {
    e.persist();
    setValues((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));
  }

  function handleLogIn(e) {
    e.preventDefault();
    setSubmitting(true);
    validateLogIn();
    !errors && authenticateUser();
  }

  function handleSignUp(e) {
    e.preventDefault();
    setSubmitting(true);
    validateSignUp();
    !errors && authenticateNewUser();
  }

  function validateLogIn() {
    if (!values.password) {
      setErrors({ password: "Password Required" });
    } else if (values.password.length < 4) {
      setErrors({ password: "Password must be at least 4 characters" });
    } else if (!values.username) {
      setErrors({ username: "Username is Required" });
    }
  }

  function validateSignUp() {
    if (!values.password) {
      setErrors({ password: "Password is Required" });
    } else if (values.password.length < 4) {
      setErrors({ password: "Password must be at least 4 characters" });
    } else if (values.password !== values.confirm) {
      setErrors({ confirm: "Passwords must match" });
    } else if (!values.username) {
      setErrors({ username: "Username is Required" });
    }
  }

  function authenticateNewUser() {
    fetch(BASE_URL + "signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: values }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          setErrors(
            "Either that username is already taken, or your passwords didn't match. Please try again."
          );
          setSubmitting(false);
        } else {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", user.token);
          setLoggedIn();
          history.push("/");
        }
      });
  }

  function authenticateUser() {
    fetch(BASE_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: values }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          setErrors("Please try again, or click Sign Up below.");
          setSubmitting(false);
        } else {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", user.token);

          setLoggedIn();
          history.push("/tome/worlds");
        }
      });
  }

  return (
    <Box>
      <Image
        id="login-img"
        src="https://res.cloudinary.com/dwfqeeh5f/image/upload/v1571932362/WorldBuildersTome/stack-o-globes.jpg"
      />
      <Flex align="center" justify="center" height="auto" mx={0}>
        <SimpleBox>
          <Flex align="center" p={4} justify="center" direction="column">
            <Heading fontSize="lg" mb={4}>
              {logIn ? "Log In" : "Create account"}
            </Heading>
            <Tabs mt={4} isFitted>
              <TabList mb={6}>
                <Tab
                  onClick={() => {
                    setLogIn(true);
                    setErrors({});
                    setValues(INITIAL_STATE);
                  }}
                >
                  Log In
                </Tab>
                <Tab
                  onClick={() => {
                    setLogIn(false);
                    setErrors({});
                    setValues(INITIAL_STATE);
                  }}
                >
                  Sign Up
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {/* LogIn */}
                  <form onSubmit={(e) => handleLogIn(e)}>
                    <Flex align="center" justify="center" direction="column">
                      <FormControl isInvalid={errors && errors.username}>
                        <Input
                          value={values.username}
                          type="username"
                          name="username"
                          placeholder="Username"
                          onChange={(e) => handleChange(e)}
                          size="lg"
                          mt={5}
                        />
                        <FormErrorMessage>
                          {errors && errors.username}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={errors && errors.password}>
                        <Input
                          value={values.password}
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={(e) => handleChange(e)}
                          size="lg"
                          mt={5}
                        />
                        <FormErrorMessage>
                          {errors && errors.password}
                        </FormErrorMessage>
                      </FormControl>
                      <Button
                        type="submit"
                        mt={6}
                        width="100%"
                        bg="primary"
                        disabled={isSubmitting}
                      >
                        Log In
                      </Button>
                      <FormControl isInvalid={errors}>
                        <FormErrorMessage maxWidth="220px">
                          {errors}
                        </FormErrorMessage>
                      </FormControl>
                    </Flex>
                  </form>
                </TabPanel>
                <TabPanel>
                  {/* Sign Up */}
                  <form onSubmit={(e) => handleSignUp(e)}>
                    <Flex align="center" justify="center" direction="column">
                      <Input
                        value={values.username}
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={(e) => handleChange(e)}
                        size="lg"
                      />
                      <FormControl isInvalid={errors && errors.password}>
                        <Input
                          value={values.password}
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={(e) => handleChange(e)}
                          size="lg"
                          mt={5}
                        />
                        <FormErrorMessage>
                          {errors && errors.password}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={errors && errors.confirm}>
                        <Input
                          value={values.confirm}
                          type="password"
                          name="confirm"
                          placeholder="Confirm Password"
                          onChange={(e) => handleChange(e)}
                          size="lg"
                          mt={5}
                        />
                        <FormErrorMessage>
                          {errors && errors.confirm}
                        </FormErrorMessage>
                      </FormControl>
                      <Button
                        type="submit"
                        mt={5}
                        width="100%"
                        variant="outline"
                        borderColor="primary"
                        disabled={isSubmitting}
                      >
                        Sign Up
                      </Button>
                      <FormControl isInvalid={errors}>
                        <FormErrorMessage maxWidth="220px">
                          {errors}
                        </FormErrorMessage>
                      </FormControl>
                    </Flex>
                  </form>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Link as={RouterLink} to="/forgot">
              <Text mt={4} fontSize="xs">
                Forgot your password?
              </Text>
            </Link>
          </Flex>
        </SimpleBox>
      </Flex>
      {/* <Heading>Log-in to your account</Heading>
      <FormControl
        value={values}
        onSubmit={handleLogIn}
        onChange={(nextValue) => setValues(nextValue)}
      >
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input type="username" id="username" placeholder="Username" />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input type="password" id="password" placeholder="Password" />

        <Button primary type="submit" label="Log In" />
        <Button to="/signup">New? Sign Up</Button>
      </FormControl> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
