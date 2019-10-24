import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class AddConfirm extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Button color="brown" onClick={this.show}>Add to Story</Button>
        <Confirm
          open={this.state.open}
          content='Item added!'
          size='tiny'
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default AddConfirm
