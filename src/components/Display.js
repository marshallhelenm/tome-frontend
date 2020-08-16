import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { connect } from "react-redux";
import DeleteModal from "./DeleteModal.js";
import StoryPageButtons from "../containers/stories/StoryPageButtons.js";
import AddToStory from "./AddToStory.js";
import WorldPageButtons from "../containers/worlds/WorldPageButtons.js";
// import { assignCrumbs } from "../actions/breadcrumbActions";
import ImgCarousel from "../containers/ImgCarousel.js";
import { getLocal } from "../App.js";
import { Heading, Box, Text, Button } from "@chakra-ui/core";
import SimpleBox from "./SimpleBox.js";

class Display extends Component {
  componentDidMount() {
    // console.log("Display props: ", this.props);
    let world = getLocal("world");
  }

  clickEdit = () => {
    this.props.history.push(
      `/tome/edit/${this.props.category}/${this.props.item.id}`
    );
  };
  render() {
    // console.log("display page props: ", this.props);
    return (
      <SimpleBox>
        <Heading>{this.props.title}</Heading>
        <ImgCarousel
          images={this.props.item.images}
          item={this.props.item}
          refreshItem={this.props.refreshItem}
        />
        {this.props.category === "stories" ? (
          <Box>
            <StoryPageButtons
              {...this.props}
              addItem={this.props.addItem}
              deleteItem={this.props.deleteItem}
            />
          </Box>
        ) : null}
        {this.props.category === "worlds" ? (
          <Box>
            <WorldPageButtons
              {...this.props}
              addItem={this.props.addItem}
              deleteItem={this.props.deleteItem}
            />
          </Box>
        ) : null}
        <Box>
          {this.props.text && <Text>{this.props.text}</Text>}
          <Box direction="row">
            <Button
              type="submit"
              label="Edit"
              id="edit-btn"
              name="submit"
              onClick={this.clickEdit}
            />
            <DeleteModal
              handleDelete={this.props.handleDelete}
              name={this.props.title ? this.props.title : this.props.name}
            />
            {this.props.addItem ? (
              <AddToStory addItem={this.props.addItem} />
            ) : null}
          </Box>
        </Box>
      </SimpleBox>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     assignCrumbs: trail => dispatch(assignCrumbs(trail))
//   };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(composedAuthHOC(Display));
