import React from 'react';
import { motion } from 'framer-motion';

const PersonaCard = ({ title, desc, icon }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="text-xl font-semibold text-indigo-700 mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </motion.div>
);

export default PersonaCard;
