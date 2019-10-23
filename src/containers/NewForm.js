import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC";
import { addBreadCrumb } from "../actions/breadcrumbActions";
import { connect } from "react-redux";
import { Form, Input } from "semantic-ui-react";
import ResizableTextarea from "../components/ResizableTextArea";
import URLInputs from "../components/URLInputs";

class NewForm extends Component {
  componentDidMount() {
    this.props.addBreadCrumb(`/tome/new/${this.props.type}`, "New");
  }

  render() {
    console.log('handleNew: ', this.props.handleNew)
    const storyItem = () => {
      return this.props.stories.story;
    };
    // console.log("new form props: ", this.props);
    return (
      <div className={"content_section last_section"} id="NewForm">
        <h1>New {this.props.type}</h1>
        <Form onSubmit={this.props.handleNew}>
          <div id="story_id">
            {storyItem() ? this.props.stories.story.id : null}
          </div>
          <Form.Field>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={
                this.props.type === "story" || this.props.type === "Note"
                  ? "Title"
                  : "Name"
              }
              className="input_field"
            />
          </Form.Field>
          <Form.Field>
            {/* <label htmlFor="description">Description:</label> */}
            <ResizableTextarea
              placeholder={this.props.type === "Note" ? "Content" : null}
            />
          </Form.Field>
          <URLInputs />
          <Form.Button
            type="submit"
            value="Save"
            id="submit"
            name="submit"
            className={"submit_btn"}
          >
            Submit
          </Form.Button>
        </Form>
      </div>
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
    addBreadCrumb: (path, displayName) =>
      dispatch(addBreadCrumb(path, displayName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(NewForm));
