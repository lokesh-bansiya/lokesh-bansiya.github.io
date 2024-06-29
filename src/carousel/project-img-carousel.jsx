import React from "react";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";

export default function CarouselSlider({ projectImgArr }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 5,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {projectImgArr?.map((el) => {
        return (
          <div key={el.img}>
            <Image
              width="100%"
              height="100%"
              src={`/carousel-images/${el.img}`}
            />
          </div>
        );
      })}
    </Slider>
  );
}
