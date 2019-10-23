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

class ImgCarousel extends Component {
  generateImgDivs = urls => {
    return urls.map((url, i) => {
      return (
        <Slide index={i}>
          <img src={url} />{" "}
        </Slide>
      );
    });
  };

  render() {
    console.log("Carousel props: ", this.props);
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={this.props.images.length}
      >
        <Slider>{this.generateImgDivs(this.props.images)}</Slider>
        <ButtonBack>{'<'}</ButtonBack>
        <ButtonNext>{'>'}</ButtonNext>
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
