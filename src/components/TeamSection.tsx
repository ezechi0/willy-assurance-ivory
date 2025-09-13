import React from 'react';
import teamImage from '@/assets/team-image.jpg';

const TeamSection = () => {
  return (
    <section id="equipe" className="py-20 bg-gradient-to-br from-primary/5 to-gold/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6 animate-slide-up">
            Notre Équipe
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <img 
                  src={teamImage} 
                  alt="Équipe Willy Assurance - Professionnels dédiés à votre sécurité" 
                  className="w-full h-96 object-cover rounded-2xl shadow-premium hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-card hover-lift">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gold-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                
                <h3 className="font-montserrat font-bold text-2xl text-primary mb-4">
                  Une équipe dynamique et passionnée
                </h3>
                
                <p className="font-poppins text-lg text-primary leading-relaxed mb-6">
                  Une équipe <strong className="text-gold">jeune, dynamique et passionnée</strong>, 
                  engagée à vous offrir la meilleure expérience d'assurance en Côte d'Ivoire.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="font-poppins text-primary font-medium">La rapidité dans nos réponses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="font-poppins text-primary font-medium">La transparence dans nos services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="font-poppins text-primary font-medium">La proximité avec nos clients</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gold/10 rounded-xl">
                  <p className="font-poppins text-sm text-primary font-medium text-center">
                    <span className="text-gold">💡</span> Notre force : Vous accompagner à chaque étape
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;