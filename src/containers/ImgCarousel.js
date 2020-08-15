import React from "react";
// import ImgDelete from "../components/ImgDelete";
import { Image, Carousel } from "grommet";

const ImgCarousel = ({ images, refreshItem }) => {
  const generateImgs = (images) => {
    return images.map((image, i) => {
      return (
        <Image
          fit="contain"
          id="img-slide"
          key={`slide-${i}`}
          src={image.url}
        />
      );
    });
  };

  // const deletePhoto = (img_id) => {
  //   console.log("deleting this photo", img_id);
  //   fetch(BASE_URL + `/images/${img_id}`, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({ image: { img_id: img_id } }),
  //   }).then(() => {
  //     refreshItem();
  //   });
  // };

  return (
    <Carousel overflow="hidden" id="img_carousel">
      {generateImgs(images)}
    </Carousel>
  );
};

export default ImgCarousel;
