import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, Card, Image } from "semantic-ui-react";
import composedAuthHOC from "../HOC/AuthHOC";
import { fetchStoryCharacters } from "../actions/charactersActions";
import { fetchStoryLocations } from "../actions/locationsActions";
import { getLocal } from "../App";

class ItemModal extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    fetchStoryCharacters(getLocal("story"));
    fetchStoryLocations(getLocal("story"));
  }

  open = () => {
    this.setState({ open: true });
  };
  close = () => {
    fetchStoryCharacters(getLocal("story"));
    this.setState({ open: false });
  };
  handleDeleteItem = item_id => {
    console.log("removing this item from the story. item_id: ", item_id);
    let type;
    this.props.itemType === "Characters"
      ? (type = "character")
      : (type = "location");
    this.props.deleteItem(item_id, type);
    let card = document.getElementById(`${item_id}`);
    card.style.display = "none";
  };

  clickCard = e => {
    e.preventDefault();
    let items = [];
    this.props.itemType === "Characters"
      ? (items = getLocal("story_characters"))
      : (items = getLocal("story_locations"));
    let item;
    items.forEach(s => {
      if (`${s.id}` === `${e.currentTarget.id}`) {
        item = s;
      }
      return item;
    });
    // console.log("item: ", item);
    this.props.currentItem(item);
    this.props.history.push(
      `/tome/${this.props.url_path}/${e.currentTarget.id}`
    );
  };

  generateItemCards = () => {
    let items = [];
    this.props.itemType === "Characters"
      ? (items = getLocal("story_characters"))
      : (items = getLocal("story_locations"));
    !!!items ? (items = []) : (items);
    if (items.length === 0) {
      return (
        <h2>
          There are no {this.props.itemType} attached to this story yet! Go to
          your world's {this.props.itemType} page to add some.
        </h2>
      );
    }
    return items.map(item => {
      let item_id = item.id;
      return (
        <Card
          color="brown"
          id={item.id}
          key={item.id}
          className="item-card"
          textAlign="center"
        >
          <Card.Content textAlign="center">
            <Image
              id={item.id}
              onClick={this.clickCard}
              rounded
              className="card-img"
              size="small"
              src={
                item.images[0]
                  ? item.images[0].url
                  : "https://img2.cgtrader.com/items/677143/ec4642a3bc/globe-antique-3d-model-max-fbx.jpg"
              }
            />
            <Card.Header textAlign="center">
              {item.title ? item.title : item.name}
            </Card.Header>
            {/* <Card.Description>{item.description} </Card.Description> */}
          </Card.Content>
          <Card.Content textAlign="center">
            {/* <AddToStory addItem={this.props.addItem} /> */}
            <Button
              negative
              content="Remove"
              onClick={() => {
                this.handleDeleteItem(item_id);
              }}
            />
          </Card.Content>
        </Card>
      );
    });
  };

  render() {
    console.log("ItemModal props: ", this.props);
    return (
      <Modal
        id="item-modal"
        size="small"
        closeIcon
        trigger={
          <Button color="brown" onClick={this.open}>
            {this.props.itemType}
          </Button>
        }
        open={this.state.open}
        onClose={this.close}
      >
        <Modal.Header>
          {/* Characters in {getLocal('story')} */}
          {this.props.itemType}
        </Modal.Header>
        <Modal.Content scrolling>
          <Card.Group centered>{this.generateItemCards()}</Card.Group>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoryCharacters: story => dispatch(fetchStoryCharacters(story)),
    fetchStoryLocations: story => dispatch(fetchStoryLocations(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(ItemModal));
