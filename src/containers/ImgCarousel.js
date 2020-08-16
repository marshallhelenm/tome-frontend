import React from "react";
import "../css/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Image, Icon } from "semantic-ui-react";
import ImgDelete from "../components/ImgDelete";
import { BASE_URL } from "../App";
import { Flex } from "@chakra-ui/core";

const ImgCarousel = ({ images, refreshItem }) => {
  const generateImgDivs = (images) => {
    return images.map((image, i) => {
      return (
        <Flex maxW="100%">
          <Slide id="img-slide" index={i} key={`slide-${i}`}>
            <div id="slide_container">
              <Image id="slide_img" src={image.url} rounded />
              <div className="overlay">
                <div id="overlay_content">
                  <div id="img-delete">
                    <ImgDelete handleDelete={deletePhoto} img_id={image.id} />
                  </div>
                  {images.length <= 1 ? null : (
                    <div id="img-nav">
                      <div>
                        <ButtonBack className="carousel-btn">
                          <Icon name="angle left" size="big" />
                        </ButtonBack>
                      </div>
                      <div>
                        <ButtonNext className="carousel-btn">
                          <Icon name="angle right" size="big" />
                        </ButtonNext>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Slide>
        </Flex>
      );
    });
  };

  const deletePhoto = (img_id) => {
    console.log("deleting this photo", img_id);
    fetch(BASE_URL + `/images/${img_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ image: { img_id: img_id } }),
    }).then(() => {
      refreshItem();
    });
  };

  return (
    <Flex maxW="80">
      <CarouselProvider
        infinite={true}
        id="img_carousel"
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={images.length}
      >
        <Slider id="carousel-slider">{generateImgDivs(images)}</Slider>
      </CarouselProvider>
    </Flex>
  );
};

export default ImgCarousel;
