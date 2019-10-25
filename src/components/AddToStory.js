import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC";
import { Button, Dropdown, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import AddConfirm from "./AddConfirm";

class AddToStory extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
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
    this.setState({value})
  };

  render() {
    console.log("AddToStory props: ", this.props);
    const { value } = this.state;
    return (
      <>
        <Form id='add-to-story' onSubmit={this.handleAddItem}>
          <Dropdown
            id="selected_story"
            selection
            upward
            onChange={this.handleChange}
            placeholder={
              this.props.stories.story
                ? this.props.stories.story.title
                : "Select Story"
            }
            value={value}
            // defaultValue={
            //   this.props.stories.story ? this.props.stories.story.id : null
            // }
            options={this.generateOptions()}
          />

          <AddConfirm />
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
