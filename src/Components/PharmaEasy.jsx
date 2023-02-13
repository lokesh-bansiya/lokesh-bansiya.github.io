
import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import img1 from "./Carousel_Images/pharma1.png";
import img2 from "./Carousel_Images/pharma2.png";
import img3 from "./Carousel_Images/pharma3.png";
import img4 from "./Carousel_Images/pharma4.png";
import img5 from "./Carousel_Images/pharma5.png";
import img6 from "./Carousel_Images/pharma6.png";
import img7 from "./Carousel_Images/pharma7.png";
import img8 from "./Carousel_Images/pharma8.png";
import img9 from "./Carousel_Images/pharma9.png";
import img10 from "./Carousel_Images/pharma10.png";

const PharmaEasy = () => {
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
    </Slider>
  );
};

export { PharmaEasy };