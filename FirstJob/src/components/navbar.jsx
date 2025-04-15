import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 50;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setMenuOpen(false); 
  };

  return (
    <nav className="bg-white shadow-lg py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.img
          src="/1stjobneww.jpg"
          alt="Logo"
          className="h-10 w-10 object-contain"
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          {['home', 'about', 'features', 'contact'].map((item) => (
            <li
              key={item}
              className="hover:text-indigo-600 cursor-pointer transition"
            >
              <a href={`#${item}`} onClick={(e) => handleScroll(e, item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* CTA Button - hidden on small devices */}
        <button className="hidden md:inline-block bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition text-sm font-semibold shadow">
          Get Started
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          className="md:hidden flex flex-col space-y-4 mt-4 px-4 text-base font-medium bg-white shadow-md rounded-lg py-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {['home', 'about', 'features', 'contact'].map((item) => (
            <li
              key={item}
              className="hover:text-indigo-600 cursor-pointer transition"
            >
              <a href={`#${item}`} onClick={(e) => handleScroll(e, item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 transition text-sm font-semibold shadow">
              Get Started
            </button>
          </li>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
