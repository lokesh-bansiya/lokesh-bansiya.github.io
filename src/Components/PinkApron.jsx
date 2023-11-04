import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

import img1 from "./Carousel_Images/pinkapron-1.png";
import img2 from "./Carousel_Images/pinkapron-2.png";
import img3 from "./Carousel_Images/pinkapron-3.png";
import img5 from "./Carousel_Images/pinkapron-5.png";
import img6 from "./Carousel_Images/pinkapron-6.png";
import img7 from "./Carousel_Images/pinkapron-9.png";
import img8 from "./Carousel_Images/pinkapron-8.png";

import img10 from "./Carousel_Images/pinkapron-10.png";
import img11 from "./Carousel_Images/pinkapron-11.png";
import img12 from "./Carousel_Images/pinkapron-12.png";
import img13 from "./Carousel_Images/pinkapron-13.png";
import img14 from "./Carousel_Images/pinkapron-14.png";
import img15 from "./Carousel_Images/pinkapron-15.png";
import img16 from "./Carousel_Images/pinkapron-16.png";
import img17 from "./Carousel_Images/pinkapron-17.png";
import img18 from "./Carousel_Images/pinkapron-18.png";
import img19 from "./Carousel_Images/pinkapron-19.png";
import img20 from "./Carousel_Images/pinkapron-20.png";


const PinkApron = () => {
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
                    <Image width="100%" height="100%" src={img10} alt="img1" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img12} alt="img2" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img13} alt="img3" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img14} alt="img4" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img15} alt="img5" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img16} alt="img1" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img17} alt="img2" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img18} alt="img3" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img19} alt="img3" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img20} alt="img3" />
               </div>
          </Slider>
     );
};

export { PinkApron };