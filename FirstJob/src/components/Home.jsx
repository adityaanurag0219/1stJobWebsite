import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Section from '../components/Section';
import IndustryTable from '../components/IndustryTable';
import PersonaCard from '../components/PersonaCard';

const Home = () => {
  return (
    <>
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Concept Summary */}
      <Section title="1. Startup Concept Summary">
        <p>
          A platform that connects businesses across industries with part-time or freelance workers
          to meet temporary staffing needs.
        </p>
      </Section>

      {/* Market Opportunity */}
      <Section title="2. Market Opportunity">
        <ul className="list-disc pl-6 text-left space-y-2">
          <li>Gig economy to surpass ₹450B by 2027</li>
          <li>30%+ of workforce is already in gig/part-time roles</li>
          <li>COVID-19 accelerated digital staffing transformation</li>
          <li>Traditional platforms are slow for real-time shifts</li>
        </ul>
      </Section>

      {/* Target Market Segments */}
      {/* <Section title="3. Target Market Segments">
        <IndustryTable />
      </Section> */}

      {/* Target Personas */}
      <Section title="3. Who can join us">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <PersonaCard title="Students" desc="Part-time flexible jobs" icon="🎓" />
          <PersonaCard title="Freelancers" desc="Productive use of downtime" icon="💼" />
          <PersonaCard title="Unemployed" desc="Temporary income" icon="🔍" />
        </div>
      </Section>

      {/* Competitive Analysis */}
      {/* <Section title="5. Competitive Analysis">
        <ul className="list-disc pl-6 text-left space-y-1">
          <li>
            <strong>TaskRabbit:</strong> Local tasks, lacks business focus
          </li>
          <li>
            <strong>Uber Works:</strong> Proved market need but shut down
          </li>
          <li>
            <strong>Upwork/Fiverr:</strong> Remote only, not location-based
          </li>
        </ul>
        <p className="mt-4">
          <strong>Key Differentiator:</strong> Hyper-local, real-time gig matching across industries.
        </p>
      </Section> */}

      {/* Tech Features */}
      {/* <Section title="6. Technology & Features">
        <ul className="list-disc pl-6 text-left space-y-1">
          <li>Real-time matching with geo-location & skills</li>
          <li>Worker ratings, availability & shift alerts</li>
          <li>Automation: time tracking, payments, dashboards</li>
        </ul>
      </Section> */}

      {/* Challenges */}
      {/* <Section title="7. Challenges & Mitigations">
        <ul className="list-disc pl-6 text-left space-y-1">
          <li>
            <strong>Reliability:</strong> ID verification & ratings
          </li>
          <li>
            <strong>Legal Compliance:</strong> Consulting & ToS
          </li>
          <li>
            <strong>Retention:</strong> Gamification & rewards
          </li>
          <li>
            <strong>Demand Gaps:</strong> Predictive algorithms
          </li>
        </ul>
      </Section> */}

      {/* Market Validation */}
      {/* <Section title="8. Market Validation Ideas">
        <ul className="list-disc pl-6 text-left space-y-1">
          <li>Start with pilot industries: restaurants & retail</li>
          <li>Manual matching → test assumptions</li>
          <li>User feedback loop to refine MVP</li>
        </ul>
      </Section> */}

      {/* Social & Economic Impact */}
      {/* <Section title="9. Social & Economic Impact">
        <ul className="list-disc pl-6 text-left space-y-1">
          <li>Reduces underemployment</li>
          <li>Helps SMEs manage costs</li>
          <li>Empowers informal sector with dignity</li>
        </ul>
      </Section> */}
    </>
  );
};

export default Home;
