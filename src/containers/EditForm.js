import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import DeleteModal from "../components/DeleteModal.js";
import { connect } from "react-redux";
import { addBreadCrumb } from "../actions/breadcrumbActions";

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
        <div className={"col_380 float_l"} id="NewForm">
          <img
            src={this.props.IMG ? this.props.IMG : IMG}
            alt={this.props.img_alt ? this.props.img_alt : "an antique map"}
            className={"image_wrapper image_fl display_img"}
          />
          <form onSubmit={this.props.handleEdit}>
            <h3>[Image Upload Stuff Will Go Here]</h3>
            <label htmlFor="name">
              {this.props.type === "story" || this.props.type === "Note"
                ? "Title:"
                : "Name:"}
            </label>
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
            <label htmlFor="description">Description:</label>
            <textarea
              id={this.props.type === "Note" ? "note-content" : "description"}
              className="input_field"
              placeholder="Description"
              defaultValue={
                this.props.item.description
                  ? this.props.item.description
                  : this.props.item.content
              }
            />
            <input
              type="submit"
              value="Save"
              id="submit"
              name="submit"
              className={"submit_btn"}
            />
            <DeleteModal
              handleDelete={this.props.handleDelete}
              name={
                this.props.item.title
                  ? this.props.item.title
                  : this.props.item.name
              }
            />
          </form>
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
