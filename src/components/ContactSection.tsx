import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    toast({
      title: "Message envoyé !",
      description: "Nous vous contacterons très prochainement.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-gold/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6 animate-slide-up">
            Contactez-nous
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-6 animate-slide-up">
            <Card className="bg-gradient-card border-0 shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary">Adresse</h3>
                    <p className="font-poppins text-muted-foreground">Yabayo, près de la gare UTB</p>
                    <p className="font-poppins text-muted-foreground">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary">Téléphone</h3>
                    <a href="tel:+22507788952" className="font-poppins text-gold hover:text-gold-dark transition-colors">
                      +225 07 78 89 52 34
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary">Email</h3>
                    <a href="mailto:willygroup07@gmail.com" className="font-poppins text-gold hover:text-gold-dark transition-colors">
                      willygroup07@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary">Horaires</h3>
                    <p className="font-poppins text-muted-foreground">Lun - Ven : 8h00 - 18h00</p>
                    <p className="font-poppins text-muted-foreground">Sam : 8h00 - 13h00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Formulaire de contact */}
          <Card className="bg-gradient-card border-0 shadow-premium hover-lift animate-fade-in">
            <CardContent className="p-8">
              <h3 className="font-montserrat font-bold text-2xl text-primary mb-6">
                Demandez votre devis gratuit
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-primary/20 focus:border-gold transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="phone"
                    placeholder="Votre numéro de téléphone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-primary/20 focus:border-gold transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Votre adresse email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-primary/20 focus:border-gold transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Votre message (type de véhicule, besoins spécifiques...)"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-primary/20 focus:border-gold transition-colors min-h-32"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-gold text-gold-foreground font-poppins font-semibold py-3 hover:shadow-glow transition-all duration-300"
                >
                  Envoyer ma demande
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-gold/10 rounded-xl">
                <p className="font-poppins text-sm text-primary text-center">
                  <span className="text-gold">⚡</span> Réponse garantie sous 24h
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;