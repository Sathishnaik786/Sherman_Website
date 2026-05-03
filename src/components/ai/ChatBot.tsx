import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User } from 'lucide-react';
import { useChat } from '@/hooks/useChat';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const { messages, sendMessage, isTyping } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed right-6 bottom-24 w-[350px] md:w-[400px] z-[100] glass rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.4)] flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">AI Assistant</h3>
                <p className="text-white/60 text-[10px] uppercase tracking-widest font-black">Online & Intelligent</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[400px] p-6 overflow-y-auto bg-white/[0.02] flex flex-col gap-4 scrollbar-hide">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-4 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-primary text-white rounded-tr-none shadow-lg' 
                    : 'bg-white/5 border border-white/10 text-white/80 rounded-tl-none'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <span className="text-[9px] opacity-40 mt-2 block uppercase tracking-widest font-bold">
                    {msg.sender === 'user' ? 'You' : 'Sherman AI'}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest animate-pulse">AI is thinking...</span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-4 bg-white/5 border-t border-white/10">
            <form onSubmit={handleSend} className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-4 pr-12 text-sm text-white focus:border-primary outline-none transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white disabled:opacity-50 disabled:bg-white/10 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
