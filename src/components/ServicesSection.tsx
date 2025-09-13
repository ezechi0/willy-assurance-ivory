import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Bike, Shield, Users, CreditCard } from 'lucide-react';
import servicesImage from '@/assets/services-bg.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Assurance Auto complète",
      description: "Protection totale pour votre véhicule : responsabilité civile, vol, incendie, bris de glace et assistance 24h/7j."
    },
    {
      icon: Bike,
      title: "Assurance Moto",
      description: "Couverture spécialisée pour vos deux-roues avec des tarifs adaptés et une assistance rapide en cas de panne."
    },
    {
      icon: Shield,
      title: "Assistance en cas d'accident",
      description: "Intervention rapide sur toute la Côte d'Ivoire avec remorquage gratuit et véhicule de remplacement."
    },
    {
      icon: Users,
      title: "Conseils personnalisés",
      description: "Une équipe d'experts à votre écoute pour vous guider dans le choix de la formule qui vous convient."
    },
    {
      icon: CreditCard,
      title: "Paiement flexible",
      description: "Options de paiement adaptées : mensuel, trimestriel ou annuel avec facilités pour tous les budgets."
    }
  ];

  return (
    <section id="prestations" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={servicesImage} 
          alt="Services Willy Assurance" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6 animate-slide-up">
            Nos Prestations
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Des services complets pour votre tranquillité d'esprit sur les routes ivoiriennes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover-lift bg-gradient-card border-0 shadow-card overflow-hidden animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                    <IconComponent className="w-8 h-8 text-gold-foreground" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-card hover-lift inline-block animate-fade-in">
            <p className="font-poppins text-primary mb-2">
              <strong className="text-gold">✨ Partenaire officiel Leadway Assurance</strong>
            </p>
            <p className="font-poppins text-sm text-muted-foreground">
              Bénéficiez de la solidité financière d'un leader de l'assurance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;