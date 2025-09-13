import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import FloatingChat from '@/components/FloatingChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <MissionSection />
        <ServicesSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center font-montserrat font-bold text-gold-foreground text-sm">
                  W
                </div>
                <span className="font-montserrat font-bold text-lg">Willy Assurance</span>
              </div>
              <p className="font-poppins text-sm opacity-90">
                Votre partenaire de confiance pour l'assurance auto et moto en Côte d'Ivoire.
              </p>
            </div>
            
            <div>
              <h3 className="font-montserrat font-bold mb-4">Services</h3>
              <ul className="font-poppins text-sm space-y-2 opacity-90">
                <li>Assurance Auto</li>
                <li>Assurance Moto</li>
                <li>Assistance 24h/7j</li>
                <li>Conseils personnalisés</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-bold mb-4">Contact</h3>
              <div className="font-poppins text-sm space-y-2 opacity-90">
                <p>📍 Yabayo, près de la gare UTB</p>
                <p>📱 +225 07 78 89 52 34</p>
                <p>✉️ willygroup07@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="font-poppins text-sm opacity-75">
              © 2024 Willy Assurance. Tous droits réservés. | En partenariat avec Leadway Assurance
            </p>
          </div>
        </div>
      </footer>
      
      <FloatingChat />
    </div>
  );
};

export default Index;
