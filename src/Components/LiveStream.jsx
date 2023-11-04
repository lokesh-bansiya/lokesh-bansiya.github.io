import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

import img1 from "./Carousel_Images/liveStream-1.png";
import img2 from "./Carousel_Images/liveStream-2.png";
import img3 from "./Carousel_Images/liveStream-3.png";
import img4 from "./Carousel_Images/liveStream-4.png";
import img5 from "./Carousel_Images/liveStream-5.png";
import img6 from "./Carousel_Images/liveStream-6.png";
import img7 from "./Carousel_Images/liveStream-7.png";
import img9 from "./Carousel_Images/liveStream-9.png";
import img8 from "./Carousel_Images/liveStream-8.png";

import img10 from "./Carousel_Images/liveStream-10.png";
import img11 from "./Carousel_Images/liveStream-11.png";
import img12 from "./Carousel_Images/liveStream-12.png";
import img13 from "./Carousel_Images/liveStream-13.png";


const LiveStream = () => {
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
                    <Image width="100%" height="100%" src={img4} alt="img5" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img5} alt="img1" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img6} alt="img2" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img7} alt="img3" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img8} alt="img2" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img9} alt="img3" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img10} alt="img1" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img11} alt="img1" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img12} alt="img2" />
               </div>
               <div>
                    <Image width="100%" height="100%" src={img13} alt="img3" />
               </div>
          </Slider>
     );
};

export { LiveStream };