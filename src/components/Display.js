import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { connect } from "react-redux";
import "../css/tome.css";
import DeleteModal from "./DeleteModal.js";
import StoryPageButtons from "../containers/stories/StoryPageButtons.js";
import AddToStory from "./AddToStory.js";
import WorldPageButtons from "../containers/worlds/WorldPageButtons.js";
import { Segment, Button } from "semantic-ui-react";
import { assignCrumbs } from "../actions/breadcrumbActions";
import ImgCarousel from "../containers/ImgCarousel.js";
import { getLocal } from "../App.js";

class Display extends Component {
  componentDidMount() {
    console.log("Display props: ", this.props);
    let world = getLocal("world");
    if (this.props.category === "worlds") {
      this.props.assignCrumbs([
        ["/tome", "Home"],
        ["/tome/worlds", "Worlds"],
        [`/tome/worlds/${world.id}`, world.name]
      ]);
    } else if (this.props.category === "stories") {
      this.props.assignCrumbs([
        ["/tome", "Home"],
        ["/tome/worlds", "Worlds"],
        [`/tome/worlds/${world.id}`, world.name],
        ["/tome/stories", "Stories"],
        [
          `/tome/stories/${this.props.stories.story.id}`,
          this.props.stories.story.title
        ]
      ]);
    } else {
      this.props.assignCrumbs([
        ["/tome", "Home"],
        ["/tome/worlds", "Worlds"],
        [
          `/tome/worlds/${world.id}`,
          world.name
        ],
        [
          `/tome/${this.props.category}`,
          `${this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}`
        ]
      ]);
    }
  }

  clickEdit = () => {
    this.props.history.push(
      `/tome/edit/${this.props.category}/${this.props.item.id}`
    );
  };
  render() {
    return (
      <>
        <div className="content_section">
          <h2>{this.props.title}</h2>
        </div>
        <div className="content_section">
          <ImgCarousel
            images={this.props.item.images}
            item={this.props.item}
            refreshItem={this.props.refreshItem}
          />
        </div>
        {this.props.category === "stories" ? (
          <div className="content_section">
            <StoryPageButtons
              {...this.props}
              addItem={this.props.addItem}
              deleteItem={this.props.deleteItem}
            />
          </div>
        ) : null}
        {this.props.category === "worlds" ? (
          <div className="content_section">
            <WorldPageButtons {...this.props} />
          </div>
        ) : null}
        <div className="content_section last_section">
          {this.props.text ? <Segment>{this.props.text}</Segment> : null}
          <div className="button-bar">
            <Button
              type="submit"
              value="Edit"
              id="edit-btn"
              name="submit"
              className="submit_btn"
              onClick={this.clickEdit}
            >
              Edit
            </Button>
            <DeleteModal
              handleDelete={this.props.handleDelete}
              name={this.props.title ? this.props.title : this.props.name}
            />
            {this.props.addItem ? (
              <AddToStory addItem={this.props.addItem} />
            ) : null}
          </div>
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

const mapDispatchToProps = dispatch => {
  return {
    assignCrumbs: trail => dispatch(assignCrumbs(trail))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(Display));
