import React, { Component } from "react";
import { connect } from "react-redux";
import composedAuthHOC from "../../HOC/AuthHOC.js";
import Display from "../../components/Display.js";

const IMG =
  "https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083_960_720.jpg";

class CharacterPage extends Component {
  render() {
    console.log("CharacterPage props: ", this.props);

    return (
      <Display
        IMG={this.props.character.img ? this.props.character.img : IMG}
        img_alt={this.props.character.name}
        item={this.props.character}
        title={this.props.character.name}
        text={this.props.character.description}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    characters: state.characters.characters,
    logged_in: state.auth.logged_in,
    character: state.characters.character
  };
};
const mapDispatchToProps = dispatch => {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(CharacterPage));
