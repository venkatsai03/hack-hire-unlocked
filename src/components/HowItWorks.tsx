
import React from 'react';
import { School, Users, Award, Briefcase } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "We partner with top colleges",
    description: "We collaborate with leading educational institutions to bring hackathons directly to campus.",
    icon: School
  },
  {
    id: 2,
    title: "Organize hackathons with real-world problems",
    description: "Students work on actual challenges provided by participating startups and companies.",
    icon: Users
  },
  {
    id: 3,
    title: "Evaluate talent based on live performance",
    description: "Assess skills, problem-solving abilities, and teamwork in real-time scenarios.",
    icon: Award
  },
  {
    id: 4,
    title: "Connect the best candidates with hiring startups",
    description: "Create direct pathways between top-performing students and companies looking to hire.",
    icon: Briefcase
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          A streamlined process connecting talented students with innovative startups through engaging hackathons
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-purple-500" />
                </div>
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold mr-3">
                    {step.id}
                  </div>
                  <h3 className="font-bold text-xl">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
