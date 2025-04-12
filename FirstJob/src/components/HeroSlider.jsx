import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
];

const HeroSlider = () => (
  <section className="relative my-8">
    <Slider
      autoplay
      autoplaySpeed={3000}
      dots
      infinite
      slidesToShow={1}
      slidesToScroll={1}
      className="w-full h-[300px] max-w-7xl mx-auto rounded-xl overflow-hidden"
    >
      {images.map((img, index) => (
        <div key={index} className="relative h-[300px]">
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h2
              className="text-4xl md:text-6xl font-bold drop-shadow-md"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Connecting Industries with On-Demand Workforce
            </motion.h2>
            <p className="text-lg mt-4 max-w-2xl drop-shadow-sm">
              Flexible staffing for real-world needs — fast, local, and reliable.
            </p>
          </div>
        </div>
      ))}
    </Slider>
  </section>
);

export default HeroSlider;
