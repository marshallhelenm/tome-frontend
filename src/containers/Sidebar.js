import React, { Component } from "react";
import '../css/2018_notebook/css/coda-slider.css'
import '../css/2018_notebook/tooplate_style.css'
import NavMenu from './navMenus/NavMenu.js'

class Sidebar extends Component {
  render() {
    return (
            <div id='tooplate_sidebar'>

                <div id='header'>
                    <h1><a href='http://localhost:3001/tome'>Image Here</a> </h1>
                </div>

                <NavMenu />

            </div>
      )
  }
}

export default Sidebar;
