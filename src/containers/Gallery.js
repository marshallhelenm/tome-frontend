import React, { Component } from "react";
import "../css/2018_notebook/css/coda-slider.css";
import "../css/2018_notebook/tooplate_style.css";
import Polaroid from "../components/Polaroid";
import { connect } from "react-redux";
import composedAuthHOC from "../HOC/AuthHOC.js";

class Gallery extends Component {
  // componentDidMount() {
  //   // console.log("fetching stories");
  //   this.props.fetchItems(this.props);
  // }
  generateCards = () => {
    // console.log("cards!", this.props.stories);
    return this.props.items.map(item => {
      return (
        <Polaroid
          handleClick={this.clickCard}
          caption={item.name ? item.name : item.title}
          key={
            item.name
              ? item.name + "." + Math.random() * 10
              : item.title + "." + Math.random() * 10
          }
          id={item.id}
        />
      );
    });
  };

  clickCard = e => {
    e.preventDefault();
    // set current story in state
    let item;
    this.props.items.forEach(s => {
      // console.log(s.id, e.currentTarget.id);
      if (`${s.id}` === `${e.currentTarget.id}`) {
        item = s;
      }
      return item;
    });
    console.log("item: ", item);
    this.props.currentItem(item);
    this.props.history.push(`/tome/${this.props.type}/${e.currentTarget.id}`);
  };
  render() {
    console.log("gallery props: ", this.props);
    return (
      <>
        <div className="content_section">
          <h2>{this.props.title}</h2>
        </div>
        <div className="content_section last_section gallery_box">
          {this.generateCards()}
          <Polaroid
            handleClick={this.clickCard}
            id="new"
            key="new"
            img={this.props.defaultIMG}
            caption="New"
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(composedAuthHOC(Gallery));
