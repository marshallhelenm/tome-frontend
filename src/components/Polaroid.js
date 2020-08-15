import React, { Component } from "react";
import "../css/polaroid.css";

class Polaroid extends Component {
  generateCards = () => {
    console.log("cards!");
    return "cards here";
  };

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
