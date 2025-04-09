
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <div className="gradient-bg section-padding min-h-[80vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Revolutionize Hiring Through College Hackathons
          </h1>
          <p className="text-xl text-gray-700 max-w-xl">
            Hack & Hire helps companies discover top talent through curated campus hackathons. 
            Connect with skilled students based on real performance, not just resumes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="btn-primary flex items-center gap-2 text-lg">
              Get Involved <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="btn-outline text-lg">
              Learn More
            </Button>
          </div>
          <div className="pt-8">
            <p className="text-sm text-gray-500 mb-3">Trusted by leading colleges and companies</p>
            {/* <div className="flex flex-wrap gap-6 items-center opacity-70">
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-28 bg-gray-300 rounded"></div>
              <div className="h-8 w-20 bg-gray-300 rounded"></div>
              <div className="h-8 w-32 bg-gray-300 rounded"></div>
            </div> */}
          </div>
        </div>
        
        <div className="relative animate-fade-in">
          <div className="aspect-video bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-orange-500/20 flex items-center justify-center">
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto flex items-center justify-center">
                  <Logo size="lg" variant="default" />
                </div>
                <h3 className="text-xl font-bold mb-2">Campus Hackathon Platform</h3>
                <p className="text-gray-500">Connecting talent with opportunity</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-500 rounded-xl -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
