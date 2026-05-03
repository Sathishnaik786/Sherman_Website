import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Sparkles } from 'lucide-react';
import { useChat } from './useChat';
import { ChatMessage } from './ChatMessage';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const { messages, sendMessage, isTyping } = useChat();
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
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
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-0 right-0 md:bottom-24 md:right-6 w-full md:w-[360px] h-[80vh] md:h-[520px] z-[200] flex flex-col bg-[#0B0F19]/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none"
        >
          <div className="flex flex-col h-full md:glass md:rounded-[2rem] border-white/10 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/20">
                  <Bot className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-tight">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Online</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth scrollbar-hide bg-white/[0.02]"
            >
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-white/[0.03]">
              <form onSubmit={handleSend} className="relative group">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-5 pr-14 text-sm text-white focus:border-blue-500/50 outline-none transition-all placeholder:text-white/20"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:bg-blue-500 disabled:opacity-20 disabled:grayscale transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="text-[9px] text-center text-white/20 mt-3 uppercase font-bold tracking-widest flex items-center justify-center gap-1.5">
                <Sparkles className="w-2.5 h-2.5" /> Powered by Sherman Intelligence
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
