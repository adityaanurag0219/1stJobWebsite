import React from 'react';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import Section from '../components/Section';
import IndustryTable from '../components/IndustryTable';
import PersonaCard from '../components/PersonaCard';
import { Button } from '../components/Button';

const Home = () => {
  return (
    <>
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Headline and Subheadline */}
      <section id='home'>
        <Section title="Revolutionizing the Future of Work">
          <p className="text-xl font-medium mb-4">
            Flexible Jobs. Real-Time Matching. Seamless Workforce Solutions.
          </p>
          <p className="mb-6">
            At 1stJob, we believe in a world where work is flexible, opportunity is accessible, and businesses thrive with the support they need—when they need it most. Our platform is built to seamlessly connect businesses facing fluctuating labor demands with individuals looking for flexible, short-term job opportunities. Whether you're a restaurant manager needing help during peak hours or a student looking to earn on your own schedule, 1stJob is your go-to solution.
          </p>
          <p>
            With real-time matching and a focus on simplicity, we’re changing the way people find work—and how businesses find workers. The future of work isn’t just coming. It’s already here.

            You can get started right now—whether you’re looking to post a job or find a shift.

          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button>Post a Job</Button>
            <Button variant="outline">Find a Shift</Button>
          </div>
        </Section>

      </section>
      <section id="about" className="py-12">
  <Section title="About Us">
    <div className="flex flex-col md:flex-row gap-10 items-center">
      <motion.img
        src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
        alt="About Us"
        className="w-full md:w-1/2 object-cover"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />
      <div className="space-y-4 text-base leading-relaxed">
        <p className="font-medium text-lg">Powering Businesses, Empowering People.</p>
        <p>
          1stJob was created with a dual purpose: to support businesses that need adaptable,
          on-demand staffing and to empower people searching for flexible income without being
          locked into long-term contracts. 
        </p>
        <p>
          Our platform is powered by smart technology that instantly matches workers with shifts
          based on location, skillset, and availability. We’re here to remove the friction from
          traditional hiring.
        </p>
      </div>
    </div>
  </Section>
</section>


      {/* How It Works */}
      <Section title="How It Works">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">For Businesses</h3>
            <p className='mb-6'>
            For businesses, the process is as simple as it gets. Post your job or shift requirement in just a few minutes, and our intelligent system will instantly match you with available and nearby workers who fit the role. There are no long-term commitments—just the help you need, exactly when you need it. You pay only for the shifts you book, and you can review and rate each worker to ensure quality and accountability.
            </p>
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
            <p className='mb-6'>
            For workers, 1stJob offers a new way to take control of your time and income. By creating a profile, listing your skills, and setting your availability, you’ll be able to browse and accept shifts that work best for your lifestyle. Whether you’re balancing studies, family, or other responsibilities, you choose when and where to work. Once the shift is completed, payment is processed quickly and fairly, and you can start building your profile with positive ratings to open up even more opportunities.

            </p>
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
      </Section>
      <section id="features">
  <Section title="Key Features">
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Image with hover zoom */}
      <motion.div
        className="overflow-hidden rounded-xl shadow-lg w-full md:w-1/2"
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg"
          alt="Key Features"
          className="w-full h-auto object-cover rounded-xl"
        />
      </motion.div>

      {/* Feature list with icons */}
      <ul className="space-y-6 text-gray-700 w-full md:w-1/2">
        <li className="flex items-start gap-4">
          <span className="text-indigo-600 mt-1">⚡</span>
          <p>
            <strong>Real-Time Job Matching:</strong> AI-powered systems instantly connect businesses and workers based on location and skillset.
          </p>
        </li>
        <li className="flex items-start gap-4">
          <span className="text-indigo-600 mt-1">🧩</span>
          <p>
            <strong>Flexible Workforce Access:</strong> Seamlessly scale your team up or down—without the usual hiring headaches.
          </p>
        </li>
        <li className="flex items-start gap-4">
          <span className="text-indigo-600 mt-1">💼</span>
          <p>
            <strong>Worker Empowerment:</strong> Students, freelancers, and retirees can choose when and where they work.
          </p>
        </li>
        <li className="flex items-start gap-4">
          <span className="text-indigo-600 mt-1">⭐</span>
          <p>
            <strong>Ratings & Reviews:</strong> Build trust with transparent feedback loops for both businesses and workers.
          </p>
        </li>
      </ul>
    </div>
  </Section>
</section>




<section id="contact">
  <Section title="Who Can Work with 1stJob">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <PersonaCard title="Students" desc="Earn on your schedule" icon="🎓" />
      <PersonaCard title="Freelancers" desc="Make use of your free hours" icon="💼" />
      <PersonaCard title="Semi-Skilled Laborers" desc="Find hourly or daily jobs" icon="🔧" />
      <PersonaCard title="Unemployed" desc="Earn with dignity and flexibility" icon="🔍" />
    </div>
  </Section>
</section>




      {/* Why 1stJob */}
      <Section title="Why 1stJob?">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">🌟 For Businesses</h3>
            For businesses, 1stJob means reduced hiring headaches, lower operational costs, and better customer service thanks to fully staffed teams. It’s a cost-effective, scalable solution that eliminates the burden of recruitment delays and unreliable temporary staffing. 
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">💼 For Workers</h3>
            For workers, it offers a pathway to extra income without the pressure of rigid schedules. With no contracts or obligations, workers are free to choose shifts that match their availability. It’s more than just a job—it’s a chance to grow, gain experience, and build a solid reputation that opens new doors.

          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">🌍 For Society</h3>
            For society as a whole, 1stJob contributes to reducing unemployment, deterring crime through active economic participation, and utilizing underused labor to its full potential. We’re not just building a job platform—we’re helping shape a better, more inclusive labor economy.
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section title="Join the Movement">
        <div className="text-center">
          <p className="mb-4">
          Work is evolving, and we’re here to lead the change. Whether you're a business looking to fill shifts fast or someone ready to earn on your own terms, 1stJob is here to support your journey. — <strong>Together, we can reshape the way work works.
          </strong>
          </p>
          <Button className="mt-2">Get Started Now</Button>
        </div>
      </Section>
    </>
  );
};

export default Home;

