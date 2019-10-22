import React from "react";
// code for this textarea pulled from this codepen by Libor Gabrhel: https://codepen.io/Libor_G/pen/eyzwOx

class ResizableTextarea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue ? this.props.defaultValue : "",
      rows: 5,
      minRows: 5,
      maxRows: 50
    };
  }

  handleChange = event => {
    const textareaLineHeight = 24;
    const { minRows, maxRows } = this.state;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    this.setState({
      value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows
    });
  };

  render() {
    return (
      <textarea
        id="description"
        name="description"
        rows={this.state.rows}
        value={this.state.value}
        placeholder={
          this.props.placeholder ? this.props.placeholder : "Description"
        }
        className={"text_area"}
        onChange={this.handleChange}
      />
    );
  }
}

export default ResizableTextarea;
