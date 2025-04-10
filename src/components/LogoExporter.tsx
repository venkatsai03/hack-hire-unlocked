
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Logo from './Logo';
import { toast } from "sonner";

const LogoExporter: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [logoSize, setLogoSize] = useState<'sm' | 'md' | 'lg'>('lg');
  const [showText, setShowText] = useState(true);

  const downloadLogo = () => {
    if (!logoRef.current) return;
    
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      toast.error("Unable to create canvas context");
      return;
    }
    
    // Set canvas dimensions (adjust as needed for quality)
    canvas.width = 500;
    canvas.height = 500;
    
    // Convert the SVG to an image
    const svgElement = logoRef.current.querySelector('svg');
    if (!svgElement) {
      toast.error("SVG element not found");
      return;
    }
    
    const data = new XMLSerializer().serializeToString(svgElement);
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
      
      toast.success("Logo downloaded successfully!");
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(data)));
  };

  return (
    <div className="flex flex-col items-center space-y-10 p-10">
      <h2 className="text-2xl font-bold">Hack & Hire Logo</h2>
      
      <div className="border border-gray-200 rounded-lg p-10 bg-white" ref={logoRef}>
        <Logo size={logoSize} showText={showText} />
      </div>
      
      <div className="flex flex-col space-y-4 items-center">
        <div className="flex space-x-4 mb-4">
          <Button 
            variant="outline" 
            size="sm"
            className={logoSize === 'sm' ? 'bg-purple-100' : ''}
            onClick={() => setLogoSize('sm')}
          >
            Small
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className={logoSize === 'md' ? 'bg-purple-100' : ''}
            onClick={() => setLogoSize('md')}
          >
            Medium
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className={logoSize === 'lg' ? 'bg-purple-100' : ''}
            onClick={() => setLogoSize('lg')}
          >
            Large
          </Button>
        </div>
        
        <Button 
          variant="outline"
          size="sm"
          className={`mb-6 ${!showText ? 'bg-purple-100' : ''}`}
          onClick={() => setShowText(!showText)}
        >
          {showText ? 'Hide Text' : 'Show Text'}
        </Button>
        
        <Button 
          onClick={downloadLogo} 
          className="flex items-center space-x-2"
        >
          <Download size={20} />
          <span>Download Logo as PNG</span>
        </Button>
      </div>
    </div>
  );
};

export default LogoExporter;
