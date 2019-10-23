import React, { Component } from "react";
import "../css/notebook.css";
import "../css/tooplate_style.css";
import Sidebar from "./Sidebar.js";
import Page from "./Page.js";
import { BrowserRouter as Router } from "react-router-dom";

class Notebook extends Component {
  render() {
    // console.log("Notebook props: ", this.props);
    return (
      <div id="tooplate_wrapper">
        <Router>
          <Sidebar {...this.props} />
          <Page {...this.props} />
        </Router>
      </div>
    );
  }
}

export default Notebook;
