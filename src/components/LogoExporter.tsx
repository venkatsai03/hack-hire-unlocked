
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Logo from './Logo';

const LogoExporter: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  const downloadLogo = () => {
    if (!logoRef.current) return;
    
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions (adjust as needed for quality)
    canvas.width = 500;
    canvas.height = 500;
    
    // Convert the SVG to an image
    const data = new XMLSerializer().serializeToString(logoRef.current.querySelector('svg') as SVGElement);
    const img = new Image();
    
    img.onload = () => {
      // Fill with white background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Center the logo
      const xPos = (canvas.width - img.width) / 2;
      const yPos = (canvas.height - img.height) / 2;
      
      // Draw the image
      ctx.drawImage(img, xPos, yPos);
      
      // Create download link
      const link = document.createElement('a');
      link.download = 'hack-and-hire-logo.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(data)));
  };

  return (
    <div className="flex flex-col items-center space-y-10 p-10">
      <h2 className="text-2xl font-bold">Hack & Hire Logo</h2>
      
      <div className="border border-gray-200 rounded-lg p-10 bg-white" ref={logoRef}>
        <Logo size="lg" />
      </div>
      
      <div className="flex flex-col space-y-4 items-center">
        <Button 
          onClick={downloadLogo} 
          className="flex items-center space-x-2"
        >
          <Download size={20} />
          <span>Download Logo as PNG</span>
        </Button>
        
        <div className="text-sm text-gray-500">
          You can also download different sizes:
        </div>
        
        <div className="flex space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => {
              if (logoRef.current) {
                logoRef.current.innerHTML = '';
                const wrapper = document.createElement('div');
                wrapper.appendChild(React.createElement(Logo, { size: 'sm', showText: true }));
                logoRef.current.appendChild(wrapper);
              }
            }}
          >
            Small
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => {
              if (logoRef.current) {
                logoRef.current.innerHTML = '';
                const wrapper = document.createElement('div');
                wrapper.appendChild(React.createElement(Logo, { size: 'md', showText: true }));
                logoRef.current.appendChild(wrapper);
              }
            }}
          >
            Medium
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => {
              if (logoRef.current) {
                logoRef.current.innerHTML = '';
                const wrapper = document.createElement('div');
                wrapper.appendChild(React.createElement(Logo, { size: 'lg', showText: true }));
                logoRef.current.appendChild(wrapper);
              }
            }}
          >
            Large
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoExporter;
