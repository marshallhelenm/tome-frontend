import React, { Component } from "react";
import "../css/notebook.css";
import "../css/tooplate_style.css";
import NavMenu from "./navMenus/NavMenu.js";

class Sidebar extends Component {
  render() {
    return (
      <div id="tooplate_sidebar">
        <a href="https://wbtome.herokuapp.com/" id="logo-link">
          <div id="logo">
            <h3>The World Builder's</h3>
            <h1>Tome</h1>
          </div>
        </a>

        <NavMenu />
      </div>
    );
  }
}

export default Sidebar;
