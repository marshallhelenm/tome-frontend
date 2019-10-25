import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Image, Icon } from "semantic-ui-react";
import ImgDelete from "../components/ImgDelete";

const BASE_URL = "http://localhost:3000/";

class ImgCarousel extends Component {
  generateImgDivs = images => {
    return images.map((image, i) => {
      return (
        <Slide id='img-slide' index={i} key={`slide-${i}`}>
          <div id="slide_container">
            <Image
              id='slide_img'
              src={image.url}
              rounded
            />
            <div className="overlay">
              <div id="overlay_content">
                <div id="img-delete">
                  <ImgDelete
                    handleDelete={this.deletePhoto}
                    img_id={image.id}
                  />
                </div>
                {images.length <= 1 ? null : 
                <div id="img-nav">
                  <div>
                    <ButtonBack className='carousel-btn' >
                      <Icon name="angle left" size='big'/>
                    </ButtonBack>
                  </div>
                  <div>
                    <ButtonNext className='carousel-btn'>
                      <Icon name="angle right" size='big' />
                    </ButtonNext>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </Slide>
      );
    });
  };

  deletePhoto = img_id => {
    console.log("deleting this photo", img_id);
    fetch(BASE_URL + `/images/${img_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ image: { img_id: img_id } })
    }).then(() => {
      this.props.refreshItem();
    });
  };

  render() {
    console.log("Carousel props: ", this.props);
    return (
      <CarouselProvider
      infinite={true}
        id="img_carousel"
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={this.props.images.length}
      >
        <Slider id='carousel-slider'>{this.generateImgDivs(this.props.images)}</Slider>
      </CarouselProvider>
    );
  }
}

export default ImgCarousel;

// ReactDOM.render(<Carousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
