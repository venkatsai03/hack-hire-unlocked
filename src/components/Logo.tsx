
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  size = 'md', 
  showText = true 
}) => {
  // Size mapping
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };
  
  // Text size mapping
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };
  
  // Color mapping
  const colorClasses = {
    default: 'text-purple-600',
    white: 'text-white'
  };
  
  return (
    <div className="flex items-center space-x-2">
      <div className={`${sizeClasses[size]} rounded-md bg-gradient-to-br from-purple-500 to-orange-400 flex items-center justify-center p-1`}>
        <div className="w-full h-full bg-white/10 flex items-center justify-center rounded-sm">
          <svg 
            viewBox="0 0 24 24" 
            className="w-3/4 h-3/4" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ color: 'white' }}
          >
            {/* Code symbol */}
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
            
            {/* Connection line */}
            <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="2" />
          </svg>
        </div>
      </div>
      
      {showText && (
        <span className={`font-bold ${textSizeClasses[size]} ${colorClasses[variant]}`}>
          Hack & Hire
        </span>
      )}
    </div>
  );
};

export default Logo;
