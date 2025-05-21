import React, { useRef } from "react";
import Slider from "react-slick";
import { ProjectItemCard } from "../Components/projectItemCard";
import { ProjectItems } from "../constants";

export default function ProjectCarouselSlider({ projectImgArr }) {
  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div style={{ border: "1px solid red" }}>
      {/* Carousel Slider */}
      <Slider ref={sliderRef} {...settings}>
        {ProjectItems?.map((el) => (
          <ProjectItemCard
            key={el.id}
            id={el.id}
            title={el.title}
            carousel={el.carousel}
            projectImgArr={el.projectImgArr}
            type={el.type}
            desc={el.desc}
            tech_stacks={el.tech_stacks}
            githubRepo={el.githubRepo}
            deployedLink={el.deployedLink}
          />
        ))}
      </Slider>
    </div>
  );
}
