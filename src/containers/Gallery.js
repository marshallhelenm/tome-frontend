import React, { Component } from "react";
import Polaroid from "../components/Polaroid";
import { connect } from "react-redux";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { setLocal, getLocal } from "../App.js";
import { Box, Heading } from "grommet";

class Gallery extends Component {
  generateCards = () => {
    // console.log("in generateCards, items: ", this.props.items);
    if (!!!this.props.items) {
      return [];
    } else {
      return this.props.items.map((item) => {
        console.log("item: ", item);
        return (
          <Polaroid
            handleClick={this.clickCard}
            caption={item.name ? item.name : item.title}
            img={item.images[0] ? item.images[0].url : this.props.defaultIMG}
            key={
              item.name
                ? item.name + "." + Math.random() * 10
                : item.title + "." + Math.random() * 10
            }
            id={item.id}
          />
        );
      });
    }
  };

  clickCard = (e) => {
    e.preventDefault();
    let item;
    this.props.items.forEach((s) => {
      if (`${s.id}` === `${e.currentTarget.id}`) {
        item = s;
      }
      return item;
    });
    // console.log("item: ", item);
    this.props.currentItem(item);
    setLocal(this.props.item_type, item);
    this.props.history.push(`/tome/${this.props.type}/${e.currentTarget.id}`);
  };

  newItem = () => {
    this.props.history.push(`/tome/new/${this.props.type}`);
  };

  render() {
    // console.log("gallery props: ", this.props);
    return (
      <Box id="gallery-page">
        {this.props.stories.story ? (
          <Box>
            <h1>{getLocal("story").title}</h1>
            <h2>{this.props.title}</h2>
          </Box>
        ) : (
          <Heading>{this.props.title}</Heading>
        )}
        <Box>
          <Polaroid
            handleClick={this.newItem}
            id="new"
            key="new"
            img={this.props.defaultIMG}
            caption="New"
          />
          {this.generateCards()}
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(composedAuthHOC(Gallery));
