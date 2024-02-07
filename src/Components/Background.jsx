import React, { useState } from "react";

// images

import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import bg3 from "../assets/bg-3.jpg";

// data

const BackgroundSlider = [
  {
    id: 1,
    image: bg1,
    title1: "title",
  },
  {
    id: 2,
    image: bg2,
    title1: "title",
  },
  {
    id: 3,
    image: bg3,
    title1: "title",
  },
];

// swiper react componnent

import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// swiper js modules
import { Autoplay, Zoom } from "swiper/modules";

// nav
import { NavBar } from "../Components/NavBar";

export const Background = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 p-0 z-30">
        <NavBar />
      </div>
      <div className=" z-0">
        <Swiper
          modules={[Autoplay, Zoom]}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          zoom={{ enabled: true }}
          onSlideChange={handleSlideChange}
          className=" z-10"
        >
          {BackgroundSlider.map((slide, index) => {
            const animateClass = index === activeIndex ? "animate-zoomIn" : "";
            return (
              <SwiperSlide key={index}>
                <div className=" bg-primary h-full w-full ">
                  <img
                    className={`  swiper-zoom  h-[912px] w-full opacity-30   object-cover ${animateClass} `}
                    src={slide.image}
                    alt={slide.title1}
                    key={index}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
