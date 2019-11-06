import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC";
import { Button, Dropdown, Form, Confirm } from "semantic-ui-react";
import { connect } from "react-redux";
import AddConfirm from "./AddConfirm";

class AddToStory extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      open: false
    };
  }
  handleAddItem = () => {
    this.props.addItem(this.state.value);
  };

  generateOptions = () => {
    return this.props.stories.world_stories.map(story => {
      return {
        key: `${story.id}.${story.title}`,
        text: story.title,
        value: story.id
      };
    });
  };

  handleChange = (e, { value }) => {
    console.log(value);
    this.setState({ value });
  };

  show = () => this.setState({ open: true });
  handleConfirm = () => {
    this.handleAddItem();
    this.setState({ open: false });
  };
  close = () => this.setState({ open: false })

  render() {
    console.log("AddToStory props: ", this.props);
    const { value } = this.state;
    return (
      <>
        <Form id="add-to-story">
          <Dropdown
            id="selected_story"
            selection
            upward
            onChange={this.handleChange}
            placeholder={
              "Select Story"
            }
            value={value}
            options={this.generateOptions()}
          />
          <Button type="button" color="brown" onClick={this.show}>
            Add to Story
          </Button>
          <Confirm
            open={this.state.open}
            content={`Are you sure you want to add to ${this.state.value}?`}
            size="tiny"
            onConfirm={this.handleConfirm}
            onCancel={this.close}
          />
        </Form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(composedAuthHOC(AddToStory));
