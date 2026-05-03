import { motion } from 'framer-motion';
import { Bot, X } from 'lucide-react';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function ChatButton({ isOpen, onClick }: ChatButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 z-[210] ${
        isOpen 
          ? 'bg-white text-black' 
          : 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-blue-500/20'
      }`}
      aria-label="AI Assistant"
    >
      {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
    </motion.button>
  );
}
