
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ValuePropositions from '@/components/ValuePropositions';
import Stakeholders from '@/components/Stakeholders';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ValuePropositions />
      <Stakeholders />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
