import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 50;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };
  return (
    <nav className="bg-white shadow-lg py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.img
          src="/Logo.jpg"
          alt="Logo"
          className="h-10 w-10 object-contain"
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li className="hover:text-indigo-600 cursor-pointer transition">
            <a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer transition">
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer transition">
            <a href="#features" onClick={(e) => handleScroll(e, "features")}>Features</a>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer transition">
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
          </li>
        </ul>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition text-sm font-semibold shadow">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
