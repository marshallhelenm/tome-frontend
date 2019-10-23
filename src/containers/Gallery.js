import React, { Component } from "react";
import "../css/notebook.css";
import "../css/tooplate_style.css";
import Polaroid from "../components/Polaroid";
import { connect } from "react-redux";
import composedAuthHOC from "../HOC/AuthHOC.js";

class Gallery extends Component {
  generateCards = () => {
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
    let item;
    this.props.items.forEach(s => {
      if (`${s.id}` === `${e.currentTarget.id}`) {
        item = s;
      }
      return item;
    });
    // console.log("item: ", item);
    this.props.currentItem(item);
    this.props.history.push(`/tome/${this.props.type}/${e.currentTarget.id}`);
  };

  newItem = () => {
    this.props.history.push(`/tome/new/${this.props.type}`);
  };

  render() {
    // console.log("gallery props: ", this.props);
    return (
      <>
        {this.props.stories.story ? (
          <div className="content_section">
            <h1>{this.props.stories.story.title}</h1>
            <h2>{this.props.title}</h2>
          </div>
        ) : (
          <div className="content_section">
            <h2>{this.props.title}</h2>
          </div>
        )}
        <div className="content_section last_section gallery_box">
          <Polaroid
            handleClick={this.newItem}
            id="new"
            key="new"
            img={this.props.defaultIMG}
            caption="New"
          />
          {this.generateCards()}
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
