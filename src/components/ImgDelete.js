import React, { Component } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
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

  handleClick = () => {
    this.props.handleDelete(this.props.img_id);
    this.close()
  };

  render() {
    console.log('imgDelete props: ', this.props)
    return (
      <Modal
        trigger={
          <Button id='img-delete-btn' basic size='small' circular icon onClick={this.open}>
            <Icon name="delete" color='black' />
          </Button>
        }
        open={this.state.open}
        onClose={this.close}
      >
        <Modal.Header>Are you sure you want to delete this photo?</Modal.Header>
        <Modal.Content>
          <p>This action is permanent, and cannot be undone!</p>
          <Modal.Actions>
            <Button negative content="Delete" onClick={this.handleClick} />
            <Button color="brown" content="Cancel" onClick={this.close} />
          </Modal.Actions>
        </Modal.Content>
      </Modal>
    );
  }
}

export default composedAuthHOC(DeleteModal);
