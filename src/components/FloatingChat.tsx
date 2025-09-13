import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';
import ChatBot from './ChatBot';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton Chat principal */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        {/* Chat Bot (visible quand isOpen est true) */}
        {isOpen && (
          <div className="animate-slide-up">
            <ChatBot />
          </div>
        )}

        {/* Bouton principal */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-gradient-gold text-gold-foreground hover:shadow-glow animate-glow'
          }`}
        >
          {isOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <MessageCircle className="w-8 h-8" />
          )}
        </Button>
      </div>

      {/* Indicateur de nouveau message (optionnel) */}
      {!isOpen && (
        <div className="fixed bottom-20 right-8 z-40 animate-pulse">
          <div className="bg-gold text-gold-foreground text-xs font-poppins font-bold px-3 py-1 rounded-full shadow-lg">
            Nous sommes en ligne !
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;