import React, { Component } from "react";
import "../css/notebook1.css";
import "../css/notebook2.css";
import Worlds from './Worlds.js'

class Page extends Component {
  render() {
  console.log('Page props: ', this.props)  
  return (
      <div id="content">
        <div className="scroll">
          <div className="scrollContainer">
            <Worlds {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
