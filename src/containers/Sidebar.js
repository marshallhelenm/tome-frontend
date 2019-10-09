import React, { Component } from "react";
import '../css/notebook1.css'
import '../css/notebook2.css'
import NavMenu from './NavMenu.js'

class Sidebar extends Component {
  render() {
    return (
            <div id='tooplate_sidebar'>

                <div id='header'>
                    <h1><a href='#'>Image Here</a> </h1>
                </div>

                <NavMenu />

            </div>
      )
  }
}

export default Sidebar;
