
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "HR Director",
      company: "TechGrowth Inc.",
      text: "Hack & Hire has transformed our tech recruitment process. We've found talented developers who not only have the technical skills but also fit our company culture perfectly.",
      rating: 5,
    },
    {
      name: "Samantha Parker",
      role: "CTO",
      company: "InnovateSoft",
      text: "The quality of candidates we've hired through Hack & Hire hackathons is exceptional. They come in already having solved real problems similar to what we face daily.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Software Engineer",
      company: "CodeCraft Solutions",
      text: "As someone who was hired through a Hack & Hire event, I can say it's a much better way to showcase your skills than traditional interviews. I got to demonstrate my problem-solving abilities in real-time.",
      rating: 4,
    },
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      company: "Tech University",
      text: "The hackathon was challenging but incredibly rewarding. I made great connections and ended up with a job offer from my dream company!",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Talent Acquisition Manager",
      company: "Enterprise Systems",
      text: "We've cut our hiring time in half and improved retention rates since partnering with Hack & Hire. The platform gives us invaluable insights into how candidates actually work.",
      rating: 4,
    },
    {
      name: "Emma Wilson",
      role: "Dean",
      company: "Tech Institute",
      text: "Our partnership with Hack & Hire has significantly improved job placement rates for our graduates. Students love the practical experience gained through these events.",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4 md:py-24">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Community Says</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from employers, job seekers, and educational institutions who have experienced 
              the Hack & Hire difference.
            </p>
          </div>
        </section>
        
        {/* Featured Testimonials - Carousel for Mobile */}
        <section className="py-16 px-4 md:hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Testimonials</h2>
            
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <TestimonialCard {...testimonial} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
        </section>
        
        {/* Desktop Grid Layout */}
        <section className="hidden md:block py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Testimonials</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-purple-100 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Success Stories</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Whether you're an employer looking to hire top talent, a job seeker showcasing your skills, 
              or an educational institution preparing students for real-world success, 
              Hack & Hire has a solution for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="btn-primary inline-block">Get Started Today</a>
              <a href="#" className="btn-outline inline-block">Learn More</a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
