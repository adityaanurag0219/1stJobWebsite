import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
  <motion.section
    className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center sm:text-left border-l-4 border-indigo-500 pl-4">
      {title}
    </h2>
    <div className="text-lg leading-relaxed text-gray-800">{children}</div>
  </motion.section>
);

export default Section;
