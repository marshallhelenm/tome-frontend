import React, { Component } from "react";
import { connect } from "react-redux";
import { setLoggedIn, setLoggedOut } from "../actions/authActions";
import "../css/notebook.css";
import "../css/tooplate_style.css";
import { assignCrumbs } from "../actions/breadcrumbActions";
import { Segment, Form, Grid, Header, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const BASE_URL = "https://tome-backend.netlify.com";
class LoginPage extends Component {
  componentDidMount() {
    this.props.assignCrumbs([]);
    localStorage.clear();
  }

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
      <>
        <div className={"content_section login-page"}>
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Image
                id="login-img"
                src="https://res.cloudinary.com/dwfqeeh5f/image/upload/v1571932362/WorldBuildersTome/stack-o-globes.jpg"
                rounded
              />
              <Header as="h3" color="brown" textAlign="center">
                Log-in to your account
              </Header>
              <Form size="large" onSubmit={this.handleLogIn}>
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

                  <Button color="brown" fluid size="large">
                    Login
                  </Button>
                </Segment>
              </Form>
              <Link className="login-link" to="/signup">
                New? Sign Up
              </Link>
            </Grid.Column>
          </Grid>
        </div>
      </>
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
    setLoggedOut: () => dispatch(setLoggedOut()),
    assignCrumbs: trail => dispatch(assignCrumbs(trail))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
