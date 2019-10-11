import React, { Component } from "react";
import "../css/2018_notebook/css/coda-slider.css";
import "../css/2018_notebook/tooplate_style.css";
import Worlds from "./Worlds.js";
import Stories from "./Stories.js";
import LoginPage from "./LoginPage.js";
import SignUpPage from "./SignUpPage.js";
import WorldPage from "./WorldPage.js";
import { Route } from "react-router-dom";

class Page extends Component {
  render() {
    console.log("Page props: ", this.props);
    return (
      <div id="content">
        <div className="scroll">
          <div className="scrollContainer">
              <Route path="/" exact render={props => <LoginPage {...props} />} />

              <Route path="/tome/worlds" exact render={props => <Worlds {...props} />} />

              <Route path="/tome/stories" exact render={props => <Stories {...props} />} />

              <Route
                path="/" exact
                render={props => <SignUpPage {...props} />}
              />
              <Route
                path="/tome/worlds/:id"
                render={props => <WorldPage {...props} />}
              />
              {/* <Route
                path="/stories"
                render={props => <Stories {...props} />}
              /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
