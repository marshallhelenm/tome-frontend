import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import composedAuthHOC from "../HOC/AuthHOC";

class DeleteModal extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  open = () => {
    this.setState({ open: true });
  };
  close = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.open}>Delete</Button>}
        open={this.state.open}
        onClose={this.close}
      >
        <Modal.Header>
          Are you sure you want to delete {this.props.name}?
        </Modal.Header>
        <Modal.Content>
          <p>This action is permanent, and cannot be undone!</p>
          <Modal.Actions>
            <Button
              negative
              content="Delete"
              onClick={this.props.handleDelete}
            />
            <Button color="brown" content="Cancel" onClick={this.close} />
          </Modal.Actions>
        </Modal.Content>
      </Modal>
    );
  }
}

export default composedAuthHOC(DeleteModal);
