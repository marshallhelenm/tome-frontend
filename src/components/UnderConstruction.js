import React, { Component } from "react";
import composedAuthHOC from "../HOC/AuthHOC.js";
import { connect } from "react-redux";
import "../css/tome.css";
import DeleteModal from "./DeleteModal.js";
import StoryPageButtons from "../containers/stories/StoryPageButtons.js";
import AddToStory from "./AddToStory.js";
import WorldPageButtons from "../containers/worlds/WorldPageButtons.js";
import { Segment, Button, Image, Grid } from "semantic-ui-react";
import { assignCrumbs } from "../actions/breadcrumbActions";
import ImgCarousel from "../containers/ImgCarousel.js";

export default class UnderConstruction extends Component {
  
  render() {
    return (
      <>
        <div className="content_section">
          <h2>Sorry, the Tome is currently under some Construction! It will return after some brief modifications.</h2>
        </div>
        <div className="content_section login-page">
        <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Image
                id="login-img"
                src="https://res.cloudinary.com/dwfqeeh5f/image/upload/v1571932362/WorldBuildersTome/stack-o-globes.jpg"
                rounded
              />
            </Grid.Column>
          </Grid>
        </div>
        </>
    );
  }
}
