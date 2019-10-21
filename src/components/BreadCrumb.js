import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC";
import { Breadcrumb } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { rollBackCrumb } from "../actions/breadcrumbActions";
import { connect } from "react-redux";

class BreadCrumb extends Component {
  generateCrumbs = nav => {
    let content = [];
    for (let i = 0; i < nav.length; i++) {
      if (i + 1 === nav.length) {
        content.push(
          <Breadcrumb.Section
            key={`crumb.${i}.${nav[i]}`}
            as={NavLink}
            onClick={() => this.props.rollBackCrumb(i)}
            to={nav[i][0]}
          >
            {" "}
            {nav[i][1]}
          </Breadcrumb.Section>
        );
      } else {
        content.push(
          <React.Fragment key={`crumbfragment.${i}`}>
            <Breadcrumb.Section
              key={`crumb.${i}.${nav[i]}`}
              as={NavLink}
              onClick={() => this.props.rollBackCrumb(i)}
              to={nav[i][0]}
            >
              {nav[i][1]}
            </Breadcrumb.Section>
            <Breadcrumb.Divider key={`crumb.divider.${i}`} icon="right angle" />
          </React.Fragment>
        );
      }
    }
    return content;
  };

  render() {
    // console.log("BreadCrumb props: ", this.props);
    return (
      <Breadcrumb key="breadcrumb-trail" size="small">
        {this.generateCrumbs(this.props.breadcrumb.nav)}
      </Breadcrumb>
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
    rollBackCrumb: () => dispatch(rollBackCrumb())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composedAuthHOC(BreadCrumb));
