import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://source.unsplash.com/1600x900/?workforce",
  "https://source.unsplash.com/1600x900/?startup,teamwork",
];

const HeroSlider = () => (
  <section className="relative my-6">
    <Slider
      autoplay
      autoplaySpeed={2000}
      dots
      infinite
      slidesToShow={1}
      slidesToScroll={1}
      className="w-full h-[250px] max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl"
    >
      {images.map((img, index) => (
        <div key={index} className="relative">
          <img src={img} alt={`slide-${index}`} className="w-full h-[250px] object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h2
              className="text-4xl md:text-6xl font-bold drop-shadow-md"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Connecting Industries with On-Demand Workforce
            </motion.h2>
            <p className="text-lg mt-4 max-w-2xl">
              Flexible staffing for real-world needs — fast, local, and reliable.
            </p>
          </div>
        </div>
      ))}
    </Slider>
  </section>
);

export default HeroSlider;
