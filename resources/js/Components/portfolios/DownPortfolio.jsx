import React, { useState, useRef, useEffect } from "react";
import benza from "../../../../public/assets/images/benzagroupe.png";
import { works } from "../../my_data";
import CardPortfolio from "./CardPortfolio";
import { Link } from "@inertiajs/react";
const DownPortfolio = () => {
    console.log(works);

    const scrollContainerRef = useRef(null);

    // Scroll the container to the left
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -scrollContainerRef.current.offsetWidth / 2, // Scroll half the container width
                behavior: "smooth",
            });
        }
    };

    // Scroll the container to the right
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: scrollContainerRef.current.offsetWidth / 2, // Scroll half the container width
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            {/* Left Arrow */}
            <button
                onClick={scrollLeft}
                className="absolute left-2 top-64 md:top-80 xl:top-[350px] transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 z-10"
            >
                ←
            </button>
            <div
                ref={scrollContainerRef}
                className="overflow-x-auto whitespace-nowrap block w-full scroll-smooth no-scrollbar"
            >
                {works.map((work) => {
                    const { id, img } = work;
                    return (
                        <Link
                            key={id}
                            href=""
                            className="inline-block w-[80vw] h-[40vw] sm:w-[60vw] sm:h-[30vw] lg:w-[30vw] lg:h-[15vw] rounded-xl mx-2 bg-gray-300"
                        >
                            <img
                                className="w-full h-full object-cover object-center rounded-xl"
                                src={img}
                                alt=""
                            />
                        </Link>
                    );
                })}
            </div>
            {/* Right Arrow */}
            <button
                onClick={scrollRight}
                className="absolute right-2 top-64 md:top-80 xl:top-[350px] transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 z-10"
            >
                →
            </button>
        </>
    );
};
export default DownPortfolio;
