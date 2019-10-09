import React, { Component } from "react";
import "../css/notebook1.css";
import "../css/notebook2.css";

class Worlds extends Component {
  generateCards = () => {
    console.log("props: ", this.props);
    console.log("cards!");
    return "cards here";
  };

  render() {
    return (
      <div className="panel" id="worlds">
        <div className="content_section">
          <h2>Your Worlds</h2>
        </div>
        <div className="content_section last_section">
          {this.generateCards()}
        </div>
      </div>
    );
  }
}

export default Worlds;
