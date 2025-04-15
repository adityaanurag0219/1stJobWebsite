// import React from 'react';
// import { motion } from 'framer-motion';

// const Section = ({ title, children }) => (
//   <motion.section
//     className="py-12 px-4 max-w-6xl mx-auto"
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6 }}
//     viewport={{ once: true }}
//   >
//     <h2 className="text-3xl font-bold text-indigo-700 mb-4">{title}</h2>
//     <div className="text-lg leading-relaxed text-gray-700 bg-white p-6 rounded-xl shadow-md">
//       {children}
//     </div>
//   </motion.section>
// );

// export default Section;






















// import React from 'react';
// import { motion } from 'framer-motion';

// const Section = ({ title, children }) => (
//   <motion.section
//     className="py-16 px-4 max-w-6xl mx-auto"
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6 }}
//     viewport={{ once: true }}
//   >
//     <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-indigo-500 inline-block">
//       {title}
//     </h2>
//     <div className="text-lg leading-relaxed text-gray-800 mt-4">
//       {children}
//     </div>
//   </motion.section>
// );

// export default Section;






















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
