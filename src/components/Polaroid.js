import React, { Component } from "react";
import "../css/notebook.css";
import "../css/tooplate_style.css";
import "../css/polaroid.css";

class Polaroid extends Component {

  render() {
    return (
      <div className="item" onClick={this.props.handleClick} id={this.props.id}>
        <div className="polaroid gallery_box">
          <img src={this.props.img} alt={this.props.title} />
          <br></br>
          <div className="caption">{this.props.caption}</div>
        </div>
      </div>
    );
  }
}

export default Polaroid;
