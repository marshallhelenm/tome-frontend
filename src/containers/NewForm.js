import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC";
import { addBreadCrumb } from "../actions/breadcrumbActions";
import { connect } from "react-redux";
import { Form, Button, TextArea, Input } from "semantic-ui-react";
import ResizableTextarea from "../components/ResizableTextArea";

class NewForm extends Component {
  state = {
    urls: [""]
  };

  printUrls = () => {
    let urlstring = "";
    let urls = this.state.urls;
    urls.forEach(url => {
      urlstring === "" ? (urlstring += url) : (urlstring += `, ${url}`);
    });
    return urlstring;
  };

  componentDidMount() {
    this.props.addBreadCrumb(`/tome/new/${this.props.type}`, "New");
  }

  generateURLFields = () => {
    let { urls } = this.state;
    return urls.map((val, idx) => {
      let urlId = `urls-${idx}`;
      return (
        <Form.Field key={urlId}>
          <Input
            onChange={this.handleURLChange}
            id={urlId}
            type="text"
            placeholder="Image URL"
            className="url_field"
            data-id={idx}
          />
        </Form.Field>
      );
    });
  };

  addUrlField = e => {
    e.preventDefault();
    this.setState(prevState => ({
      urls: [...prevState.urls, [""]]
    }));
  };

  handleURLChange = e => {
    let urls = [...this.state.urls];
    urls.push(e.target.value);
    this.setState({ urls });
  };

  render() {
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
          <Button onClick={this.addUrlField}>Add an Image</Button>
          <Form.Field>
            {/* <label>Attach an Image:</label>
            <Input id="img_url" type="text" placeholder="img_url" /> */}
            {this.generateURLFields()}
          </Form.Field>
          <div id="secret_url_collection">{this.printUrls()}</div>
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
