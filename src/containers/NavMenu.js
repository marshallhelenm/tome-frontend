import React, { Component } from "react";
import "../css/notebook1.css";
import "../css/notebook2.css";
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
            <a href="#aboutus" className="menu_02">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="menu_03">
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" className="menu_04">
              Gallery
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
