import React from 'react';
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
      <section id="home">
        <Section title="Revolutionizing the Future of Work">
          <p className="text-xl font-medium mb-4">
            Flexible Jobs. Real-Time Matching. Seamless Workforce Solutions.
          </p>
          <p className="mb-6">
            1stJob is your go-to platform connecting businesses with peak-hour labor needs to individuals seeking flexible, short-term work opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button>Post a Job</Button>
            <Button variant='outline'>Find a Shift</Button>
          </div>
        </Section>
      </section>

      {/* About Us */}
      <section id="about">
        <Section title="About Us">
          <p className="mb-4 font-medium text-lg">Powering Businesses, Empowering People.</p>
          <p>
            1stJob was born out of the need to bridge two pressing gaps: the fluctuating labor demands of service industries and the rising need for flexible income among job seekers. Our technology-driven platform matches businesses with qualified, available workers in real time—ensuring operational efficiency and economic empowerment.
          </p>
        </Section>
      </section>
      {/* How It Works */}
      <Section title="How It Works">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">For Businesses</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Post your labor needs in minutes.</li>
              <li>Instantly match with available, nearby workers.</li>
              <li>Pay only for what you need—no long-term commitments.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">For Workers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create a profile and list your skills.</li>
              <li>Pick shifts based on your schedule.</li>
              <li>Get paid fast for the hours you work.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <section id="features"></section>
      <Section id="home" title="Key Features">
        <ul className="list-disc pl-6 space-y-3">
          <li> <strong>Real-Time Job Matching:</strong> AI-powered matching systems connect businesses and workers instantly based on location and skillset.</li>
          <li> <strong>Flexible Workforce Access:</strong> Scale your team up or down as needed—with zero overhead stress.</li>
          <li> <strong>Worker Empowerment:</strong> Students, freelancers, and retirees can earn on their own terms—whenever, wherever.</li>
          <li> <strong>Ratings & Reviews:</strong> Build trust with transparent feedback for both businesses and workers.</li>
        </ul>
      </Section>

      {/* Target Users */}
      <Section title="Businesses We Serve">
        <ul className="list-disc pl-6 space-y-2">
          <li>Restaurants & Cafes</li>
          <li>Retail Stores</li>
          <li>Event Management</li>
          <li>Outsourced Staffing Agencies</li>
        </ul>
      </Section>

      <Section title="Who Can Work with 1stJob">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <PersonaCard title="Students" desc="Earn on your schedule" icon="🎓" />
          <PersonaCard title="Freelancers" desc="Make use of your free hours" icon="💼" />
          <PersonaCard title="Semi-Skilled Laborers" desc="Find hourly or daily jobs" icon="🔧" />
          {/* <PersonaCard title="Retirees" desc="Stay active and earn" icon="👴" /> */}
          <PersonaCard title="Unemployed" desc="Earn with dignity and flexibility" icon="🔍" />
        </div>
      </Section>

      {/* Why 1stJob */}
       <section id="contact"></section>
      <Section title="Why 1stJob?">
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
      </Section>

      {/* Final CTA */}
      <Section title="Join the Movement">
        <p className="mb-4">
          Let’s shape the future of work together. Whether you're a business needing help or someone ready to earn — <strong>1stJob is here for your support</strong>
        </p>
        <Button className="mt-2">Get Started Now</Button>
      </Section>
    </>
  );
};

export default Home;
