import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import DeleteModal from "../components/DeleteModal.js";
import { connect } from "react-redux";
import { addBreadCrumb } from "../actions/breadcrumbActions";
import { Form, Button, Input } from "semantic-ui-react";
import ResizableTextarea from "../components/ResizableTextArea.js";
import URLInputs from "../components/URLInputs.js";

class EditForm extends Component {
  componentDidMount() {
    this.props.addBreadCrumb(
      `/tome/edit/${this.props.item_type}/${this.props.item.id}`,
      "Edit"
    );
  }
  // state = {
  //   fields: 0,
  //   urls: [""]
  // };

  // printUrls = () => {
  //   console.log("editform state: ", this.state);
  //   let urlstring = "";
  //   let urls = this.state.urls;
  //   urls.forEach(url => {
  //     urlstring === "" ? (urlstring += url) : (urlstring += `, ${url}`);
  //   });
  //   return urlstring;
  // };

  // generateURLFields = () => {
  //   let i;
  //   let fields = [];
  //   for (i = 0; i <= this.state.fields; i++)
  //     fields.push(
  //       <Form.Field key={`img-field-${i}`}>
  //         <Input
  //           onChange={this.handleURLChange}
  //           type="text"
  //           placeholder="Image URL"
  //           className="url_field"
  //         />
  //       </Form.Field>
  //     );
  //   return fields;
  // };

  // addUrlField = e => {
  //   e.preventDefault();
  //   let newfields = this.state.fields+1
  //   console.log('----EditForm state: ', this.state)
  //   this.setState(prevState => ({
  //     fields: newfields
  //   }));
  // };

  // handleURLChange = e => {
  //   this.setState({ urls: [...this.state.urls, e.target.value] });
  // };

  render() {
    console.log("Edit Form Props: ", this.props);
    return (
      <>
        <div className={"content_section last_section"} id="NewForm">
          <Form onSubmit={this.props.handleEdit}>
            <Form.Field>
              <Input
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
            </Form.Field>
            {this.props.type === "Note" ? null : <URLInputs />}
            {/* <Button type="button" onClick={this.addUrlField}>
              Add an Image
            </Button>
            {this.generateURLFields()}
            <div id="secret_url_collection">{this.printUrls()}</div> */}

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
