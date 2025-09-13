import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quels documents faut-il pour souscrire une assurance ?",
      answer: "Carte grise, pièce d'identité et permis suffisent. Notre équipe vous accompagne dans toutes les démarches pour simplifier votre souscription.",
      emoji: "📄"
    },
    {
      question: "Combien de temps pour recevoir mon attestation ?",
      answer: "Chez nous : le même jour ! Nous traitons votre dossier rapidement pour que vous puissiez circuler en toute légalité dès votre souscription.",
      emoji: "⚡"
    },
    {
      question: "Est-ce que vous couvrez aussi le vol et l'incendie ?",
      answer: "Oui, selon la formule choisie. Nos formules tous risques incluent la protection contre le vol, l'incendie, le bris de glace et bien plus encore.",
      emoji: "🔥"
    },
    {
      question: "Puis-je assurer ma moto sans immatriculation définitive ?",
      answer: "Oui, une couverture temporaire est possible avec une carte grise provisoire. Nous nous adaptons à vos besoins spécifiques.",
      emoji: "🏍️"
    },
    {
      question: "Que se passe-t-il si mon assurance expire ?",
      answer: "Nous vous rappelons avant l'échéance pour éviter toute sanction. Notre service de relance automatique vous protège contre les oublis.",
      emoji: "📅"
    },
    {
      question: "Puis-je transférer mon assurance sur un nouveau véhicule ?",
      answer: "Oui, nous adaptons votre contrat en quelques minutes. Le transfert est simple et rapide, sans frais cachés.",
      emoji: "🔄"
    },
    {
      question: "Offrez-vous une assistance en cas d'accident ?",
      answer: "Oui, une aide immédiate est prévue selon la formule. Remorquage gratuit, véhicule de remplacement et accompagnement dans vos démarches.",
      emoji: "🆘"
    },
    {
      question: "Est-ce possible de payer en plusieurs fois ?",
      answer: "Oui, avec nos facilités de paiement : mensuel, trimestriel ou annuel. Nous nous adaptons à votre budget pour rendre l'assurance accessible.",
      emoji: "💳"
    },
    {
      question: "Comment obtenir un devis ?",
      answer: "En ligne, par téléphone ou WhatsApp, gratuitement et sans engagement. Réponse immédiate avec nos conseillers dédiés.",
      emoji: "📱"
    },
    {
      question: "Pourquoi faire confiance à Willy Assurance ?",
      answer: "Parce que nous sommes proches de vous et partenaires de Leadway Assurance, un leader reconnu. Notre proximité + leur solidité = votre tranquillité.",
      emoji: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6 animate-slide-up">
            Questions Fréquentes
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Trouvez rapidement les réponses à vos questions sur nos services d'assurance
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border-0 shadow-card hover-lift overflow-hidden animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4 text-left">
                    <span className="text-2xl">{faq.emoji}</span>
                    <span className="font-poppins font-semibold text-primary group-hover:text-gold transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="ml-12">
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      <span className="text-gold font-medium">💡</span> {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-gold rounded-2xl p-6 shadow-glow inline-block animate-glow">
            <p className="font-poppins text-gold-foreground font-medium">
              <span className="text-xl">💬</span> Une autre question ? Contactez-nous directement !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;