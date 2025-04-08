

import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://source.unsplash.com/1600x900/?workforce",
  "https://source.unsplash.com/1600x900/?startup,teamwork",
];

function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1
            className="text-3xl font-extrabold text-indigo-600"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            FirstJob
          </motion.h1>
          <ul className="hidden md:flex space-x-6 text-base font-medium">
            <li className="hover:text-indigo-600 cursor-pointer transition">Home</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">About</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">Features</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">Contact</li>
          </ul>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition text-sm font-semibold shadow">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Slideshow */}
      <section className="relative my-6">
        <Slider
          autoplay
          autoplaySpeed={3000}
          dots
          infinite
          slidesToShow={1}
          slidesToScroll={1}
          className="w-full h-[450px] max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl"
        >
          {images.map((img, index) => (
            <div key={index} className="relative">
              <img src={img} alt={`slide-${index}`} className="w-full h-[450px] object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold drop-shadow-md"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Connecting Industries with On-Demand Workforce
                </motion.h2>
                <p className="text-lg mt-4 max-w-2xl">Flexible staffing for real-world needs — fast, local, and reliable.</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Sections */}
      <Section title="1. Startup Concept Summary">
        <p>A platform that connects businesses across industries with part-time or freelance workers to meet temporary staffing needs.</p>
      </Section>

      <Section title="2. Market Opportunity">
        <ul className="list-disc pl-5 text-left space-y-2">
          <li>Gig economy to surpass $450B by 2027</li>
          <li>30%+ of workforce is already in gig/part-time roles</li>
          <li>COVID-19 accelerated digital staffing transformation</li>
          <li>Traditional platforms are slow for real-time shifts</li>
        </ul>
      </Section>

      <Section title="3. Target Market Segments">
        <IndustryTable />
      </Section>

      <Section title="4. Target Worker Personas">
        <div className="grid md:grid-cols-3 gap-6">
          <PersonaCard title="Students" desc="Part-time flexible jobs" icon="🎓" />
          <PersonaCard title="Freelancers" desc="Productive use of downtime" icon="💼" />
          <PersonaCard title="Unemployed" desc="Temporary income" icon="🔍" />
        </div>
      </Section>

      <Section title="5. Competitive Analysis">
        <ul className="list-disc pl-5 text-left space-y-1">
          <li><strong>TaskRabbit:</strong> Local tasks, lacks business focus</li>
          <li><strong>Uber Works:</strong> Proved market need but shut down</li>
          <li><strong>Upwork/Fiverr:</strong> Remote only, not location-based</li>
        </ul>
        <p className="mt-3"><strong>Key Differentiator:</strong> Hyper-local, real-time gig matching across industries.</p>
      </Section>

      <Section title="6. Technology & Features">
        <ul className="list-disc pl-5 text-left space-y-1">
          <li>Real-time matching with geo-location & skills</li>
          <li>Worker ratings, availability & shift alerts</li>
          <li>Automation: time tracking, payments, dashboards</li>
        </ul>
      </Section>

      <Section title="7. Challenges & Mitigations">
        <ul className="list-disc pl-5 text-left space-y-1">
          <li><strong>Reliability:</strong> ID verification & ratings</li>
          <li><strong>Legal Compliance:</strong> Consulting & ToS</li>
          <li><strong>Retention:</strong> Gamification & rewards</li>
          <li><strong>Demand Gaps:</strong> Predictive algorithms</li>
        </ul>
      </Section>

      <Section title="8. Market Validation Ideas">
        <ul className="list-disc pl-5 text-left space-y-1">
          <li>Start with pilot industries: restaurants & retail</li>
          <li>Manual matching → test assumptions</li>
          <li>User feedback loop to refine MVP</li>
        </ul>
      </Section>

      <Section title="9. Social & Economic Impact">
        <ul className="list-disc pl-5 text-left space-y-1">
          <li>Reduces underemployment</li>
          <li>Helps SMEs manage costs</li>
          <li>Empowers informal sector with dignity</li>
        </ul>
      </Section>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-6 mt-16 text-center">
        <p>&copy; {new Date().getFullYear()} FirstJob. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <motion.section
      className="py-12 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">{title}</h2>
      <div className="text-lg leading-relaxed text-gray-700 bg-white p-6 rounded-xl shadow-md">{children}</div>
    </motion.section>
  );
}

function IndustryTable() {
  const rows = [
    ["Restaurants & Cafes", "Lunch, Dinner hours", "Holidays, Events"],
    ["Retail Stores", "Evenings, Weekends", "Festivals, Holidays"],
    ["Hospitality", "Check-in/Out Times", "Vacation Seasons"],
    ["Events", "During events", "Festivals, Conferences"],
    ["Transportation", "Rush hours, Night Shifts", "Tour Seasons, Holidays"],
    ["Cleaning Services", "Post-event/night", "Post-holiday cleanups"],
    ["Construction", "Weather-dependent", "Govt. project deadlines"],
    ["Agriculture", "Harvest times", "Crop cycles"],
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-300 text-sm shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-100 text-indigo-800">
          <tr>
            <th className="px-4 py-3">Industry</th>
            <th className="px-4 py-3">Rush Hour Peaks</th>
            <th className="px-4 py-3">Seasonal Surges</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([industry, rush, seasonal], idx) => (
            <tr key={idx} className="border-t hover:bg-indigo-50">
              <td className="px-4 py-2">{industry}</td>
              <td className="px-4 py-2">{rush}</td>
              <td className="px-4 py-2">{seasonal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PersonaCard({ title, desc, icon }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold text-indigo-700 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}

export default App;