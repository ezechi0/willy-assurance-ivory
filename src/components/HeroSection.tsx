import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import leadwayLogo from '@/assets/leadway-official-logo.png';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image avec overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Willy Assurance - Assurance auto et moto en Côte d'Ivoire" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6 animate-slide-up">
            Willy Assurance
          </h1>
          <p className="font-poppins text-xl md:text-2xl mb-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Votre sécurité, notre priorité
          </p>
          <p className="font-poppins text-lg md:text-xl mb-8 opacity-90 animate-slide-up" style={{animationDelay: '0.4s'}}>
            Roulez tranquille, nous veillons sur vous
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-gold text-gold-foreground font-poppins font-bold text-lg px-8 py-4 hover:shadow-glow transition-all duration-300 animate-glow animate-slide-up mb-12"
            style={{animationDelay: '0.6s'}}
          >
            Demander un devis gratuit
          </Button>
          
          {/* Partenariat Leadway */}
          <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
            <p className="font-poppins text-sm mb-4 opacity-80">
              En partenariat officiel avec
            </p>
            <div className="flex justify-center items-center">
              <img 
                src={leadwayLogo} 
                alt="Leadway Assurance - Partenaire officiel" 
                className="h-16 md:h-20 hover-lift"
              />
            </div>
            <p className="font-poppins text-sm mt-2 opacity-80">
              Leadway Assurance - Votre gage de solidité
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;