import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

import img1 from "./Carousel_Images/harvest1.png";
import img2 from "./Carousel_Images/harvest2.png";
import img3 from "./Carousel_Images/harvest3.png";
import img4 from "./Carousel_Images/harvest4.png";
import img5 from "./Carousel_Images/harvest5.png";
import img6 from "./Carousel_Images/harvest6.png";
import img7 from "./Carousel_Images/harvest7.png";
import img8 from "./Carousel_Images/harvest8.png";
import img9 from "./Carousel_Images/harvest9.png";
import img10 from "./Carousel_Images/harvest10.png";
import img11 from "./Carousel_Images/harvest11.png";
import img12 from "./Carousel_Images/harvest12.png";


const GetHarvest = () => {
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
      <div>
        <Image width="100%" height="100%" src={img1} alt="img1" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img2} alt="img2" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img3} alt="img3" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img4} alt="img4" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img5} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img6} alt="img1" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img7} alt="img2" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img8} alt="img3" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img9} alt="img4" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img10} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img11} alt="img4" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img12} alt="img5" />
      </div>
    </Slider>
  );
};

export { GetHarvest };