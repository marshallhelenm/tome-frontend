import React, { Component } from "react";
import '../css/2018_notebook/css/coda-slider.css'
import '../css/2018_notebook/tooplate_style.css'
import Sidebar from './Sidebar.js'
import Page from './Page.js'

class Notebook extends Component {
  render() {
  console.log('Notebook props: ', this.props)  
    return (
        <div id='tooplate_wrapper'>
            <Sidebar />
            <Page {...this.props} />
        </div>
      )
  }
}

export default Notebook;
