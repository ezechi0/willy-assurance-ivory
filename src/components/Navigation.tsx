import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center font-montserrat font-bold text-gold-foreground">
              W
            </div>
            <span className="font-montserrat font-bold text-xl text-primary">
              Willy Assurance
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="font-poppins font-medium text-primary hover:text-gold transition-colors duration-300 relative group"
            >
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('missions')}
              className="font-poppins font-medium text-primary hover:text-gold transition-colors duration-300 relative group"
            >
              Missions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('prestations')}
              className="font-poppins font-medium text-primary hover:text-gold transition-colors duration-300 relative group"
            >
              Prestations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-colors duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('equipe')}
              className="font-poppins font-medium text-primary hover:text-gold transition-colors duration-300 relative group"
            >
              Équipe
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-colors duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-poppins font-medium text-primary hover:text-gold transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-colors duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;