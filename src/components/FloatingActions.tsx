import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, PhoneCall, Bot, X, Send } from 'lucide-react';

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

      {/* Right Side Vertical Stack */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-[100] items-end">
        
        {/* Chatbot Panel */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="mb-4 w-[350px] md:w-[400px] glass rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
            >
              <div className="bg-gradient-to-r from-primary to-accent p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Sherman AI Assistant</h3>
                    <p className="text-white/60 text-[10px] uppercase tracking-widest font-black">Online Now</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="h-[350px] p-6 flex flex-col gap-4 overflow-y-auto bg-white/[0.02]">
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                  <p className="text-white/70 text-sm leading-relaxed">
                    Hello! I'm your AI consultant at Akiko Sherman Infotech. How can I help you today?
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white/5 border-t border-white/10">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask about AI, Cloud, or E-Governance..." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-4 pr-12 text-sm text-white focus:border-primary outline-none transition-all"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. CALL BUTTON (TOP) */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="tel:918851599751"
          className="w-14 h-14 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center z-50"
          aria-label="Call Expert"
        >
          <PhoneCall className="w-6 h-6" />
        </motion.a>

        {/* 2. WHATSAPP BUTTON (MIDDLE) */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/918851599751"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center z-50 overflow-hidden"
          aria-label="WhatsApp Support"
        >
          <img 
            src="/whatsup-icon.png" 
            alt="WhatsApp" 
            className="w-full h-full object-cover p-3" 
          />
        </motion.a>

        {/* 3. AI ASSISTANT BUTTON (BOTTOM) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 ${
            isChatOpen 
              ? 'bg-white text-black' 
              : 'bg-gradient-to-tr from-primary to-accent text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
          }`}
          aria-label="AI Assistant"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </motion.button>

      </div>
    </>
  );
}