import { motion } from 'framer-motion';
import { Message } from './useChat';

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
    >
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-blue-600 text-white rounded-tr-none shadow-lg'
            : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-none backdrop-blur-sm'
        }`}
      >
        {message.text}
      </div>
    </motion.div>
  );
}
