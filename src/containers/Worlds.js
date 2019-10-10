import React, { Component } from "react";
import "../css/notebook1.css";
import "../css/notebook2.css";
import Polaroid from "../components/Polaroid";


class Worlds extends Component {
  generateCards = () => {
    console.log("props: ", this.props);
    console.log("cards!");
  };

  newWorld = (e) => {
    e.preventDefault()
    console.log(e.currentTarget)
    e.currentTarget.id === 'newWorld' ? 
    console.log('make a new world') // will redirect to a form
    : console.log('direct to the appropriate world')
    
  }
  
  render() {
    const IMG = 'https://images.unsplash.com/photo-1550406307-84b491d68ba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    return (
      <div className="panel" id="worlds">
        <div className="content_section">
          <h2>Your Worlds</h2>
        </div>
        <div className="content_section last_section">
          {/* existing worlds: */}
          {this.generateCards()}

          {/* new world card: */}
          <Polaroid handleClick={this.newWorld} id='newWorld' img={IMG} text='New World' />

        </div>
      </div>
    );
  }
}

export default Worlds;
