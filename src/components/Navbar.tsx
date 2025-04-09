
import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-4 md:px-8 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-purple-500 transition-colors">
            How It Works
          </a>
          <a href="#why-choose" className="text-gray-600 hover:text-purple-500 transition-colors">
            Why Choose Us
          </a>
          <Link to="/testimonials" className="text-gray-600 hover:text-purple-500 transition-colors">
            Testimonials
          </Link>
          <a href="#stakeholders" className="text-gray-600 hover:text-purple-500 transition-colors">
            Stakeholders
          </a>
          <Link to="/logo-export" className="text-gray-600 hover:text-purple-500 transition-colors flex items-center gap-2">
            <Download size={16} />
            Logo
          </Link>
          <Button className="btn-primary">Get Involved</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-600 hover:text-purple-500 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-purple-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#why-choose" 
              className="text-gray-600 hover:text-purple-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <Link
              to="/testimonials"
              className="text-gray-600 hover:text-purple-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <a 
              href="#stakeholders" 
              className="text-gray-600 hover:text-purple-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Stakeholders
            </a>
            <Link
              to="/logo-export"
              className="text-gray-600 hover:text-purple-500 transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={16} />
              Download Logo
            </Link>
            <Button className="btn-primary w-full">Get Involved</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
