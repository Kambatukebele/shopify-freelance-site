import React, { useState, useRef, useEffect } from "react";
import { works } from "../../my_data";
import CardPortfolio from "./CardPortfolio";
const DownPortfolio = () => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = carousel.children;
    const slideWidth = slides[0].offsetWidth;

    const scrollCarousel = () => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const interval = setInterval(() => {
      scrollCarousel();
    }, 3000);

    carousel.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });

    return () => clearInterval(interval);
  }, [index]);
  return (
    <>
      <div
        className="carousel w-full flex justify-between items-center gap-4 overflow-x-auto no-scrollbar"
        ref={carouselRef}
      >
        {works.map((work) => {
          return <CardPortfolio key={work.id} {...work} />;
        })}
      </div>
    </>
  );
};
export default DownPortfolio;
