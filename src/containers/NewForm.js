import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC";
import { addBreadCrumb } from "../actions/breadcrumbActions";
import { connect } from "react-redux";

class NewForm extends Component {
  componentDidMount() {
    this.props.addBreadCrumb(`/tome/new/${this.props.type}`, "New");
  }

  // state={selectedFile: null}

  // const handleFileSelect = (e) => {
  //   this.setState({selectedFile: e.target.files[0]})
  // }

  // const fileUploadHandler = () => {
  //   axios.post('')
  // }
  render() {
    const storyItem = () => {
      return this.props.stories.story;
    };
    // console.log("new form props: ", this.props);
    return (
      <div className={"col_380 float_l"} id="NewForm">
        <h1>New {this.props.type}</h1>
        <form onSubmit={this.props.handleNew}>
          <div id="story_id">
            {storyItem() ? this.props.stories.story.id : null}
          </div>

          {/* <div>
          <input type='file' onChange={handleFileSelect} />

        </div> */}

          <div>
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
              className="input_field"
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id={this.props.type === "Note" ? "note-content" : "description"}
              placeholder={
                this.props.type === "Note" ? "Content" : "Description"
              }
              className="input_field"
            />
          </div>
          <input
            type="submit"
            value="Save"
            id="submit"
            name="submit"
            className={"submit_btn"}
          />
        </form>
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
