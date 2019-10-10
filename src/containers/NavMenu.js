import React, { Component } from "react";
import "../css/2018_notebook/css/coda-slider.css";
import "../css/2018_notebook/tooplate_style.css";
import { setLoggedOut } from "../actions/authActions";
import {connect} from 'react-redux'


class NavMenu extends Component {
  // Will create methods etc to make sure that menu shows correct things at the correct times

  render() {
    return (
      <div id="menu">
        <ul className="navigation">
          <li>
            <a href="#home" className="menu_01">
              Home
            </a>
          </li>
          <li>
            <a href="#stories" className="menu_02">
             Stories
            </a>
          </li>
          <li>
            <a href="#characters" className="menu_03">
              Characters
            </a>
          </li>
          <li>
            <a href="#locations" className="menu_04">
              Locations
            </a>
          </li>
          <li onClick={this.props.setLoggedOut}>
            <a href='#' className="menu_05">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLoggedOut: () => dispatch(setLoggedOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
