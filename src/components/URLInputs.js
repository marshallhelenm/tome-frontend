import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";

class URLInputs extends Component {
  state = {
    fields: 0,
    urls: [""]
  };

  printUrls = () => {
    console.log("editform state: ", this.state);
    let urlstring = "";
    let urls = this.state.urls;
    urls.forEach(url => {
      urlstring === "" ? (urlstring += url) : (urlstring += `, ${url}`);
    });
    return urlstring;
  };
  generateURLFields = () => {
    let i;
    let fields = [];
    for (i = 0; i <= this.state.fields; i++)
      fields.push(
        <Form.Field key={`img-field-${i}`}>
          <Input
            onChange={this.handleURLChange}
            type="text"
            placeholder="Image URL"
            className="url_field"
          />
        </Form.Field>
      );
    return fields;
  };

  addUrlField = e => {
    e.preventDefault();
    let newfields = this.state.fields+1
    console.log('----EditForm state: ', this.state)
    this.setState(prevState => ({
      fields: newfields
    }));
  };

  handleURLChange = e => {
    this.setState({ urls: [...this.state.urls, e.target.value] });
  };

  render() {
    return (
      <>
        <Button onClick={this.addUrlField}>Add an Image</Button>
          {this.generateURLFields()}
        <div id="secret_url_collection">{this.printUrls()}</div>
      </>
    );
  }
}

export default URLInputs;
