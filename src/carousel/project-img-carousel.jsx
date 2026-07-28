import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CarouselSlider({ projectImgArr = [] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = projectImgArr.length;

  const showPrevious = () =>
    setCurrent((position) => (position - 1 + total) % total);
  const showNext = () => setCurrent((position) => (position + 1) % total);

  useEffect(() => {
    if (paused || total < 2) return undefined;

    const timer = window.setInterval(
      () => setCurrent((position) => (position + 1) % total),
      4500,
    );

    return () => window.clearInterval(timer);
  }, [paused, total]);

  if (!total) return null;

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="carousel-stage">
        <img
          src={`/carousel-images/${projectImgArr[current].img}`}
          alt={`Project interface preview ${current + 1} of ${total}`}
        />

        {total > 1 && (
          <>
            <button
              type="button"
              className="carousel-arrow carousel-arrow-prev"
              onClick={showPrevious}
              aria-label="Show previous project image"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              className="carousel-arrow carousel-arrow-next"
              onClick={showNext}
              aria-label="Show next project image"
            >
              <FiChevronRight />
            </button>
          </>
        )}

        <span className="carousel-count">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>

      {total > 1 && (
        <div className="carousel-thumbnails" aria-label="Project image previews">
          {projectImgArr.map((image, index) => (
            <button
              type="button"
              key={image.img}
              className={index === current ? "active" : ""}
              onClick={() => setCurrent(index)}
              aria-label={`Show project image ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
            >
              <img
                src={`/carousel-images/${image.img}`}
                alt=""
                loading={index < 4 ? "eager" : "lazy"}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
