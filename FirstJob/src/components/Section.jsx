import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
  <motion.section
    className="py-12 px-4 max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold text-indigo-700 mb-4">{title}</h2>
    <div className="text-lg leading-relaxed text-gray-700 bg-white p-6 rounded-xl shadow-md">
      {children}
    </div>
  </motion.section>
);

export default Section;
