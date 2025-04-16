// import React from 'react';
// import { motion } from 'framer-motion';

// const PersonaCard = ({ title, desc, icon }) => (
//   <motion.div
//     className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border"
//     whileHover={{ scale: 1.05 }}
//   >
//     <div className="text-4xl mb-2">{icon}</div>
//     <h3 className="text-xl font-semibold text-indigo-700 mb-1">{title}</h3>
//     <p className="text-sm text-gray-600">{desc}</p>
//   </motion.div>
// );

// export default PersonaCard;










import React from 'react';

const PersonaCard = ({ title, desc, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 border border-gray-100 hover:border-indigo-400">
      <div className="text-4xl mb-4 bg-indigo-100 text-indigo-600 rounded-full p-3 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
};

export default PersonaCard;
