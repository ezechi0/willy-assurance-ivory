import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis l\'assistant virtuel de Willy Assurance. Comment puis-je vous aider aujourd\'hui ?',
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Salutations
    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
      return 'Bonjour ! Je suis ravi de vous accueillir sur le site de Willy Assurance. Comment puis-je vous aider aujourd\'hui ?';
    }

    // Services d'assurance
    if (message.includes('assurance auto') || message.includes('assurance voiture')) {
      return 'Nous proposons plusieurs formules d\'assurance auto :\n• Responsabilité civile obligatoire\n• Couverture vol et incendie\n• Garantie dommages tous accidents\n• Protection conducteur et passagers\n• Assistance en cas d\'accident\n\nSouhaitez-vous plus d\'informations sur une formule spécifique ?';
    }

    if (message.includes('assurance moto')) {
      return 'Pour les motos, nous offrons :\n• Responsabilité civile moto\n• Protection contre vol et incendie\n• Assistance dépannage\n• Offres flexibles pour jeunes conducteurs et professionnels\n\nContactez-nous pour un devis personnalisé !';
    }

    // Prix et tarifs
    if (message.includes('prix') || message.includes('tarif') || message.includes('coût') || message.includes('combien')) {
      return 'Nos tarifs dépendent de plusieurs facteurs (type de véhicule, âge du conducteur, etc.). Pour un devis personnalisé gratuit, contactez-nous au +225 07 78 89 52 34 ou visitez notre agence à Yabayo !';
    }

    // Documents nécessaires
    if (message.includes('document') || message.includes('papier')) {
      return 'Pour souscrire une assurance auto, vous aurez besoin de :\n• Carte grise du véhicule\n• Permis de conduire en cours de validité\n• Pièce d\'identité\n• Contrôle technique (dans certains cas)\n\nNous traitons votre dossier en moins de 24 heures !';
    }

    // Délais
    if (message.includes('rapidement') || message.includes('délai') || message.includes('temps') || message.includes('24h')) {
      return 'Chez Willy Assurance, nous sommes fiers de notre rapidité ! La plupart de nos contrats sont finalisés en moins de 24 heures. C\'est notre engagement envers nos clients.';
    }

    // Localisation
    if (message.includes('où') || message.includes('adresse') || message.includes('yabayo') || message.includes('gare')) {
      return 'Notre agence se trouve à Yabayo, près de la gare UTB, dans la région de la Nawa en Côte d\'Ivoire. Nous sommes ouverts du lundi au samedi de 8h à 18h.';
    }

    // Horaires
    if (message.includes('horaire') || message.includes('ouvert') || message.includes('fermé')) {
      return 'Nos horaires d\'ouverture :\n🕗 Lundi - Samedi : 08h00 - 18h00\n💤 Dimanche : Fermé\n\nVous pouvez nous contacter au +225 07 78 89 52 34 pendant ces heures.';
    }

    // Contact
    if (message.includes('contact') || message.includes('téléphone') || message.includes('appeler')) {
      return 'Voici nos coordonnées :\n📞 Téléphone : +225 07 78 89 52 34\n📧 Email : willygroup07@gmail.com\n📍 Adresse : Yabayo, près de la gare UTB\n\nN\'hésitez pas à nous contacter !';
    }

    // Partenariat Leadway
    if (message.includes('leadway') || message.includes('partenaire') || message.includes('fiable')) {
      return 'Nous travaillons en partenariat avec Leadway Assurance, une maison d\'assurance leader et reconnue en Côte d\'Ivoire. Ce partenariat nous permet d\'offrir des garanties solides et fiables à nos clients.';
    }

    // Accident/Sinistre
    if (message.includes('accident') || message.includes('sinistre') || message.includes('déclaration')) {
      return 'En cas d\'accident ou de sinistre :\n1. Contactez-nous immédiatement au +225 07 78 89 52 34\n2. Nous vous guidons pas à pas dans la déclaration\n3. Nous assurons le suivi complet de votre dossier\n\nVotre tranquillité d\'esprit est notre priorité !';
    }

    // Paiement
    if (message.includes('paiement') || message.includes('facilité') || message.includes('mensuel')) {
      return 'Oui, nous proposons des facilités de paiement ! Selon la formule choisie, vous pouvez payer en plusieurs tranches. Contactez-nous pour connaître les modalités adaptées à votre situation.';
    }

    // Merci
    if (message.includes('merci') || message.includes('remercie')) {
      return 'Je vous en prie ! C\'est un plaisir de vous aider. N\'hésitez pas si vous avez d\'autres questions sur nos services d\'assurance auto et moto !';
    }

    // Au revoir
    if (message.includes('au revoir') || message.includes('bye') || message.includes('salut')) {
      return 'Au revoir et merci de votre visite ! N\'oubliez pas que Willy Assurance est là pour vous accompagner. À bientôt !';
    }

    // Réponse par défaut
    return 'Je comprends votre question. Pour une réponse plus précise, je vous invite à nous contacter directement au +225 07 78 89 52 34 ou à visiter notre agence à Yabayo. Nos conseillers seront ravis de vous aider personnellement !';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simuler le temps de réflexion du bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Entre 1 et 2 secondes
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-96 bg-background border border-border rounded-lg shadow-lg">
      {/* Header */}
      <div className="bg-primary text-white p-4 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Bot className="w-6 h-6" />
          <div>
            <h3 className="font-montserrat font-bold">Assistant Willy</h3>
            <p className="text-xs opacity-90">En ligne - Réponse rapide</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isBot
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <Bot className="w-4 h-4 mt-1 flex-shrink-0" />
                  )}
                  {!message.isBot && (
                    <User className="w-4 h-4 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-sm font-poppins whitespace-pre-line">
                      {message.text}
                    </p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString('fr-FR', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-secondary text-secondary-foreground">
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </ScrollArea>

      {/* Input */}
      <div className="border-t border-border p-4">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Tapez votre message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;