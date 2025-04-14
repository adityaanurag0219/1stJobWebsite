import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    heading: "Connecting Industries with On-Demand Workforce",
    subtext: "Flexible staffing for real-world needs — fast, local, and reliable."
  },
  {
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    heading: "Empowering People Through Flexible Work",
    subtext: "Choose when, where, and how you work with total freedom and fairness."
  }
];

const HeroSlider = () => (
  <section className="relative my-8">
    <Slider
      autoplay
      autoplaySpeed={2000}
      dots
      infinite
      slidesToShow={1}
      slidesToScroll={1}
      className="w-full h-[350px] max-w-7xl mx-auto rounded-xl overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative h-[350px]">
          <img
            src={slide.image}
            alt={`slide-${index}`}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h2
              className="text-3xl md:text-5xl font-bold drop-shadow-md"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {slide.heading}
            </motion.h2>
            <motion.p
              className="text-lg mt-4 max-w-2xl drop-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              {slide.subtext}
            </motion.p>
          </div>
        </div>
      ))}
    </Slider>
  </section>
);

export default HeroSlider;










































