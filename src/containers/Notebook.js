import React, { Component } from "react";
import '../css/notebook1.css'
import '../css/notebook2.css'
import Sidebar from './Sidebar.js'
import Page from './Page.js'

class Notebook extends Component {
  render() {
    return (
        <div id='slider'>
            <Sidebar />
            <Page />
        </div>
      )
  }
}

export default Notebook;
