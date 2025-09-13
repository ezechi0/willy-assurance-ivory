import React from 'react';

const MissionSection = () => {
  return (
    <section id="missions" className="py-20 bg-gradient-card relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-8">
              Notre Mission
            </h2>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card hover-lift animate-fade-in">
            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gold-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="font-poppins text-lg md:text-xl text-primary leading-relaxed">
              <strong className="text-gold font-semibold">Protéger vos trajets, vos véhicules et votre avenir</strong> avec proximité, transparence et confiance. 
              Nous nous engageons à offrir une assurance de qualité supérieure, adaptée aux réalités ivoiriennes, 
              pour que vous puissiez conduire l'esprit tranquille.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;