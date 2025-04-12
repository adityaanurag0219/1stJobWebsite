// import React from 'react';
// import HeroSlider from '../components/HeroSlider';
// import Section from '../components/Section';
// import IndustryTable from '../components/IndustryTable';
// import PersonaCard from '../components/PersonaCard';

// const Home = () => {
//   return (
//     <>
//       {/* Hero Section with Slider */}
//       <HeroSlider />

//       {/* Concept Summary */}
//       <Section title="Startup Concept">
//         <p>
//           A platform that connects businesses across industries with part-time or freelance workers
//           to meet temporary staffing needs.
//         </p>
//       </Section>

//       {/* Market Opportunity */}
//       <Section title="Market Opportunity">
//         <ul className="list-disc pl-6 text-left space-y-2">
//           <li>Gig economy to surpass ₹450B by 2027</li>
//           <li>30%+ of workforce is already in gig/part-time roles</li>
//           <li>COVID-19 accelerated digital staffing transformation</li>
//           <li>Traditional platforms are slow for real-time shifts</li>
//         </ul>
//       </Section>

//       {/* Target Market Segments */}
//       {/* <Section title="3. Target Market Segments">
//         <IndustryTable />
//       </Section> */}

//       {/* Target Personas */}
//       <Section title="Who can join us">
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           <PersonaCard title="Students" desc="Part-time flexible jobs" icon="🎓" />
//           <PersonaCard title="Freelancers" desc="Productive use of downtime" icon="💼" />
//           <PersonaCard title="Unemployed" desc="Temporary income" icon="🔍" />
//         </div>
//       </Section>

//       {/* Competitive Analysis */}
//       {/* <Section title="5. Competitive Analysis">
//         <ul className="list-disc pl-6 text-left space-y-1">
//           <li>
//             <strong>TaskRabbit:</strong> Local tasks, lacks business focus
//           </li>
//           <li>
//             <strong>Uber Works:</strong> Proved market need but shut down
//           </li>
//           <li>
//             <strong>Upwork/Fiverr:</strong> Remote only, not location-based
//           </li>
//         </ul>
//         <p className="mt-4">
//           <strong>Key Differentiator:</strong> Hyper-local, real-time gig matching across industries.
//         </p>
//       </Section> */}

//       {/* Tech Features */}
//       {/* <Section title="6. Technology & Features">
//         <ul className="list-disc pl-6 text-left space-y-1">
//           <li>Real-time matching with geo-location & skills</li>
//           <li>Worker ratings, availability & shift alerts</li>
//           <li>Automation: time tracking, payments, dashboards</li>
//         </ul>
//       </Section> */}

//       {/* Challenges */}
//       {/* <Section title="7. Challenges & Mitigations">
//         <ul className="list-disc pl-6 text-left space-y-1">
//           <li>
//             <strong>Reliability:</strong> ID verification & ratings
//           </li>
//           <li>
//             <strong>Legal Compliance:</strong> Consulting & ToS
//           </li>
//           <li>
//             <strong>Retention:</strong> Gamification & rewards
//           </li>
//           <li>
//             <strong>Demand Gaps:</strong> Predictive algorithms
//           </li>
//         </ul>
//       </Section> */}

//       {/* Market Validation */}
//       {/* <Section title="8. Market Validation Ideas">
//         <ul className="list-disc pl-6 text-left space-y-1">
//           <li>Start with pilot industries: restaurants & retail</li>
//           <li>Manual matching → test assumptions</li>
//           <li>User feedback loop to refine MVP</li>
//         </ul>
//       </Section> */}

//       {/* Social & Economic Impact */}
//       {/* <Section title="9. Social & Economic Impact">
//         <ul className="list-disc pl-6 text-left space-y-1">
//           <li>Reduces underemployment</li>
//           <li>Helps SMEs manage costs</li>
//           <li>Empowers informal sector with dignity</li>
//         </ul>
//       </Section> */}
//     </>
//   );
// };

// export default Home;







































import React from 'react';
import HeroSlider from '../components/HeroSlider';
import IndustryTable from '../components/IndustryTable';
import PersonaCard from '../components/PersonaCard';
import { Button } from '../components/Button';  // Assuming shadcn/ui or similar
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      {/* Hero Section with Background Image and Overlay Text */}
      <HeroSlider />

      {/* Headline and Subheadline */}
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Revolutionizing the Future of Work
        </motion.h2>
        <p className="text-xl font-medium mb-4">
          Flexible Jobs. Real-Time Matching. Seamless Workforce Solutions.
        </p>
        <p className="mb-6 max-w-3xl mx-auto">
          1stJob connects businesses with peak-hour labor needs to individuals seeking flexible, short-term work opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button>Post a Job</Button>
          <Button variant="outline">Find a Shift</Button>
        </div>
      </div>

      {/* About Us */}
      <div className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-6 items-center">
        <motion.img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
          alt="About Us"
          className="rounded-xl shadow-md w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <div>
          <p className="mb-4 font-medium text-lg">Powering Businesses, Empowering People.</p>
          <p>
            1stJob bridges the gap between fluctuating labor demands and flexible income needs.
            Our platform ensures businesses meet real-time staffing needs while empowering workers economically.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">For Businesses</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Post your labor needs in minutes.</li>
            <li>Instantly match with nearby workers.</li>
            <li>Pay only for what you need—no long-term commitments.</li>
          </ul>
        </div>
        <motion.img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          alt="For Businesses"
          className="rounded-xl shadow-md"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">For Workers</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create a profile and list your skills.</li>
            <li>Pick shifts based on your schedule.</li>
            <li>Get paid fast for the hours you work.</li>
          </ul>
        </div>
        <motion.img
          src="https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg"
          alt="For Workers"
          className="rounded-xl shadow-md"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Key Features */}
      <div className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-6 items-center">
        <motion.img
          src="https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg"
          alt="Key Features"
          className="rounded-xl shadow-md w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Real-Time Job Matching:</strong> AI-powered connections for location and skill-fit.</li>
          <li><strong>Flexible Workforce Access:</strong> Scale your team as needed, stress-free.</li>
          <li><strong>Worker Empowerment:</strong> Earn on your terms — whenever, wherever.</li>
          <li><strong>Ratings & Reviews:</strong> Build trust with transparent feedback loops.</li>
        </ul>
      </div>

      {/* Target Industries */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Businesses We Serve</h2>
        <IndustryTable />
      </div>

      {/* Persona Cards */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Who Can Work with 1stJob</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <PersonaCard title="Students" desc="Earn on your schedule" icon="🎓" />
          <PersonaCard title="Freelancers" desc="Make use of your free hours" icon="💼" />
          <PersonaCard title="Semi-Skilled Laborers" desc="Find hourly or daily jobs" icon="🔧" />
          <PersonaCard title="Unemployed" desc="Earn with dignity and flexibility" icon="🔍" />
        </div>
      </div>

      {/* Why 1stJob */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Why 1stJob?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">🌟 For Businesses</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reduced hiring headaches</li>
              <li>Lower operational costs</li>
              <li>Better customer service through proper staffing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">💼 For Workers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Extra income with total flexibility</li>
              <li>No contracts, no pressure</li>
              <li>Opportunities to build skills and reputation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">🌍 For Society</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reduced unemployment</li>
              <li>Crime and corruption deterrence through economic participation</li>
              <li>Better use of the available labor force</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <p className="mb-4">
          Let’s shape the future of work together. Whether you're a business needing help or someone ready to earn — <strong>1stJob is here for your support</strong>
        </p>
        <Button className="mt-2">Get Started Now</Button>
      </div>
    </>
  );
};

export default Home;
