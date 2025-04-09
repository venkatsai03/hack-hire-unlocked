
import React from 'react';
import { Check, Star, TrendingUp, Zap } from 'lucide-react';

const benefits = [
  {
    title: "Real performance > resumes",
    description: "Evaluate candidates based on demonstrable skills and practical problem-solving abilities.",
    icon: Check
  },
  {
    title: "Access to pre-vetted student talent",
    description: "Connect with students who have already proven their capabilities in competitive settings.",
    icon: Star
  },
  {
    title: "Cost-effective and fast hiring",
    description: "Reduce recruitment costs and time-to-hire by engaging with qualified candidates directly.",
    icon: TrendingUp
  },
  {
    title: "Branding opportunities for startups",
    description: "Build your company's reputation among the next generation of tech talent.",
    icon: Zap
  }
];

const ValuePropositions: React.FC = () => {
  return (
    <section id="why-choose" className="section-padding gradient-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Why Choose Hack & Hire</h2>
        <p className="section-subtitle">
          Our platform offers unique advantages for identifying and connecting with exceptional talent
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow flex items-start"
              >
                <div className="mr-5 mt-1">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon size={24} className="text-purple-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
            <div className="flex justify-around gap-6 mt-8">
              <div className="p-4">
                <div className="text-4xl font-bold text-purple-500 mb-2">15+</div>
                <p className="text-gray-600">Partner Colleges</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-purple-500 mb-2">10+</div>
                <p className="text-gray-600">Startup Partners</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-purple-500 mb-2">Coming Soon...</div>
                <p className="text-gray-600">Student Participants</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-purple-500 mb-2">Coming Soon...</div>
                <p className="text-gray-600">Successful Hires</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
