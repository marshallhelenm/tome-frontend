import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import DeleteModal from "../components/DeleteModal.js";
import { connect } from "react-redux";
import { addBreadCrumb } from "../actions/breadcrumbActions";
import { Form, Button, TextArea } from "semantic-ui-react";
import ResizableTextarea from "../components/ResizableTextArea.js";
import URLInputs from "../components/URLInputs.js";

const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

class EditForm extends Component {
  componentDidMount() {
    this.props.addBreadCrumb(
      `/tome/edit/${this.props.item_type}/${this.props.item.id}`,
      "Edit"
    );
  }

  render() {
    console.log("Edit Form Props: ", this.props);
    return (
      <>
        <div className={"content_section last_section"} id="NewForm">
          <img
            src={this.props.IMG ? this.props.IMG : IMG}
            alt={this.props.img_alt ? this.props.img_alt : "an antique map"}
            className={"image_wrapper image_fl display_img"}
          />
          <Form onSubmit={this.props.handleEdit}>
            <Form.Field>
              <input
                id="name"
                type="text"
                placeholder={
                  this.props.type === "story" || this.props.type === "Note"
                    ? "Title"
                    : "Name"
                }
                defaultValue={
                  this.props.item.title
                    ? this.props.item.title
                    : this.props.item.name
                }
                className="input_field"
              />
            </Form.Field>
            <Form.Field>
              {/* <label>Description:</label> */}
              <ResizableTextarea
                placeholder={
                  this.props.type === "Note" ? "Content" : "Description"
                }
                defaultValue={
                  this.props.item.description
                    ? this.props.item.description
                    : this.props.item.content
                }
              />
              <URLInputs />
            </Form.Field>
            <Button
              type="submit"
              id="submit"
              name="submit"
              className={"submit_btn"}
            >
              Save
            </Button>
            <DeleteModal
              handleDelete={this.props.handleDelete}
              name={
                this.props.item.title
                  ? this.props.item.title
                  : this.props.item.name
              }
            />
          </Form>
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
    addBreadCrumb: (path, displayName) =>
      dispatch(addBreadCrumb(path, displayName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(EditForm));
