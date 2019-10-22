import React, { Component } from "react";
import { Form, Button, TextArea, Input } from "semantic-ui-react";


class URLInputs extends Component {
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
    return (
      <>
        <Button onClick={this.addUrlField}>Add an Image</Button>
        <Form.Field>
          {/* <label>Attach an Image:</label>
            <Input id="img_url" type="text" placeholder="img_url" /> */}
          {this.generateURLFields()}
        </Form.Field>
        <div id="secret_url_collection">{this.printUrls()}</div>
      </>
    );
  }
}

export default URLInputs;
