import React, { Component } from "react";
import NavMenu from "./navMenus/NavMenu.js";
import { Header } from "grommet";

class Sidebar extends Component {
  render() {
    return (
      <Header>
        <a href="https://wbtome.herokuapp.com/" id="logo-link">
          <div id="logo">
            <h3>The World Builder's</h3>
            <h1>Tome</h1>
          </div>
        </a>

        <NavMenu />
      </Header>
    );
  }
}

export default Sidebar;
