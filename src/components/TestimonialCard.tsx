
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  company, 
  text, 
  rating, 
  image 
}) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        {/* Rating Stars */}
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        
        {/* Testimonial Text */}
        <p className="text-gray-700 mb-4 italic">"{text}"</p>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <div className="flex items-center">
          {/* Profile Image */}
          <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-100 mr-4 flex items-center justify-center">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-purple-500 font-bold text-xl">{name.charAt(0)}</span>
            )}
          </div>
          
          {/* Name and Role */}
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{role} at {company}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
