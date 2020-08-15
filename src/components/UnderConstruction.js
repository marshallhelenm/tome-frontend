import React, { Component } from "react";
import { Image, Grid } from "semantic-ui-react";

export default class UnderConstruction extends Component {
  render() {
    return (
      <>
        <div className="content_section">
          <h2>
            Sorry, the Tome is currently under Construction! It will return
            after some modifications.
          </h2>
          <h2>
            <a href="https://www.loom.com/share/cf40bd77b2c548b99e52f2ab25bc42ee">
              Click here for a brief demo video.
            </a>
          </h2>
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
