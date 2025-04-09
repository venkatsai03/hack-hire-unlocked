
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="section-padding bg-purple-600 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Let's Build the Future of Hiring
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
          Join our network of colleges, students, and startups to revolutionize how talent is discovered and hired.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button variant="outline" className="bg-white text-purple-600 hover:bg-gray-100 border-white text-lg font-semibold px-8 py-6" onClick={() => window.location.href = 'https://forms.gle/pM6J5hKFZGopcFXaA'}>
            Join Our Pilot Program for Startups
          </Button>
          <Button variant="ghost" className="text-white hover:bg-purple-700 border border-white text-lg font-semibold px-8 py-6 flex items-center gap-2">
          Join Our Pilot Program for Colleges <ArrowRight size={20} />
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>No setup fees</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Simple onboarding</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Full support included</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
