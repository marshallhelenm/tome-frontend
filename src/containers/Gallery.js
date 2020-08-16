import React, { Component } from "react";
import Polaroid from "../components/Polaroid";
import { connect } from "react-redux";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { setLocal, getLocal } from "../App.js";
import { Box, Heading } from "grommet";
import SimpleBox from "../components/SimpleBox";

const Gallery = ({
  stories,
  title,
  defaultIMG,
  history,
  type,
  items,
  item_type,
  currentItem,
}) => {
  const generateCards = () => {
    // console.log("in generateCards, items: ", items);
    if (!!!items) {
      return [];
    } else {
      return items.map((item) => {
        console.log("item: ", item);
        return (
          <Polaroid
            handleClick={clickCard}
            caption={item.name ? item.name : item.title}
            img={item.images[0] ? item.images[0].url : defaultIMG}
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

  const clickCard = (e) => {
    e.preventDefault();
    let item;
    items.forEach((s) => {
      if (`${s.id}` === `${e.currentTarget.id}`) {
        item = s;
      }
      return item;
    });
    // console.log("item: ", item);
    currentItem(item);
    setLocal(item_type, item);
    history.push(`/tome/${type}/${e.currentTarget.id}`);
  };

  const newItem = () => {
    history.push(`/tome/new/${type}`);
  };

  return (
    <Box id="gallery-page">
      {stories.story ? (
        <Box>
          <h1>{getLocal("story").title}</h1>
          <h2>{title}</h2>
        </Box>
      ) : (
        <Heading>{title}</Heading>
      )}
      <SimpleBox>
        <Polaroid
          handleClick={newItem}
          id="new"
          key="new"
          img={defaultIMG}
          caption="New"
        />
        {generateCards()}
      </SimpleBox>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(composedAuthHOC(Gallery));
