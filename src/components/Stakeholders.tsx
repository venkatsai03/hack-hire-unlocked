
import React from 'react';
import { School, User, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StakeholderSection: React.FC<{
  title: string;
  benefits: string[];
  color: string;
  icon: React.ReactNode;
  buttonText: string;
  onClick?: () => void;
}> = ({ title, benefits, color, icon, buttonText,onClick }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden border-t-4 ${color}`}>
      <div className="p-8">
        <div className="flex items-center mb-6">
          {icon}
          <h3 className="text-2xl font-bold ml-3">{title}</h3>
        </div>
        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full btn-primary"  onClick={onClick}>{buttonText}</Button>
      </div>
    </div>
  );
};

const Stakeholders: React.FC = () => {
  return (
    <section id="stakeholders" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Who We Serve</h2>
        <p className="section-subtitle">
          Hack & Hire creates value for everyone in the talent ecosystem
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <StakeholderSection 
            title="For Colleges"
            benefits={[
              "Skill development for students",
              "Internship and job pathways",
              "No cost, only collaboration",
              "Enhanced campus recruitment"
            ]}
            color="border-blue-500"
            icon={<School size={28} className="text-blue-500" />}
            buttonText="Partner with Us"
            onClick={() => window.location.href = 'https://forms.gle/pM6J5hKFZGopcFXaA'}
          />
          
          <StakeholderSection 
            title="For Students"
            benefits={[
              "Work on real problems",
              "Get noticed by top startups",
              "Win goodies and gain recognition",
              "Build your portfolio with projects"
            ]}
            color="border-purple-500"
            icon={<User size={28} className="text-purple-500" />}
            buttonText="Join a Hackathon"
            onClick={() => window.location.href = '#'}
          />
          
          <StakeholderSection 
            title="For Startups"
            benefits={[
              "Source talented candidates",
              "Participate as judges or mentors",
              "Build brand visibility",
              "Test ideas with fresh perspectives"
            ]}
            color="border-orange-500"
            icon={<Briefcase size={28} className="text-orange-500" />}
            buttonText="Recruit Talent"
            onClick={() => window.location.href = 'https://forms.gle/LkaRScMJExrncBCZ8'}
          />
        </div>
        
        <div className="mt-16 text-center">
          {/* <h3 className="text-2xl font-bold mb-4">Trusted by Leading Organizations</h3> */}
          {/* <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded-md"></div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
