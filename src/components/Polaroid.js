import React, { Component } from "react";
import "../css/notebook1.css";
import "../css/notebook2.css";
import "../css/polaroid.css";

class Polaroid extends Component {
  generateCards = () => {
    console.log("cards!");
    return "cards here";
  };
  
  render() {
    return (
      <div className='item' onClick={this.props.handleClick} id={this.props.id} >
        <div className='polaroid'>
            <img src={this.props.img ? this.props.img : 'https://img2.cgtrader.com/items/677143/ec4642a3bc/globe-antique-3d-model-max-fbx.jpg'} alt={this.props.title} />
            <div className='caption'>
                {this.props.world ? this.props.world.name : 'text here'}
            </div>
        </div>
      </div>
    );
  }
}

export default Polaroid;

