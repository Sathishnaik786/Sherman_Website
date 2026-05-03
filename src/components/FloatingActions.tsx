import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, PhoneCall } from 'lucide-react';
import { ChatWindow } from './chat/ChatWindow';
import { ChatButton } from './chat/ChatButton';

export default function FloatingActions() {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsScrollVisible(true);
      } else {
        setIsScrollVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to Top (Left Side) */}
      <AnimatePresence>
        {isScrollVisible && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={scrollToTop}
            className="fixed left-6 bottom-6 w-14 h-14 glass rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-primary transition-all z-50"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modern AI Chat System */}
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Right Side Vertical Stack */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-[100] items-end">
        
        {/* 1. CALL BUTTON */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="tel:918851599751"
          className="w-14 h-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center z-50 border border-white/10"
          aria-label="Call Expert"
        >
          <PhoneCall className="w-6 h-6" />
        </motion.a>

        {/* 2. WHATSAPP BUTTON */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/918851599751"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center z-50 overflow-hidden border border-white/10"
          aria-label="WhatsApp Support"
        >
          <img 
            src="/whatsup-icon.png" 
            alt="WhatsApp" 
            className="w-full h-full object-cover p-3" 
          />
        </motion.a>

        {/* 3. AI ASSISTANT TRIGGER */}
        <ChatButton isOpen={isChatOpen} onClick={() => setIsChatOpen(!isChatOpen)} />

      </div>
    </>
  );
}