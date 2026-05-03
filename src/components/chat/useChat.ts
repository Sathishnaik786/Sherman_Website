import { useState, useCallback, useEffect } from 'react';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const RESPONSES: Record<string, string> = {
  services: "We offer high-end AI & ML, E-Governance solutions, Web & Mobility platforms, and Managed IT Services. Which area would you like to explore?",
  products: "Our proprietary solutions include Farm2Plate (Agri-traceability), Smart Meter (Utility Intel), TAMRA (Mining Governance), and Infracon.",
  contact: "You can reach our experts via the 'Get Quote' button, call us at +91-8851599751, or use WhatsApp. Should I provide more details?",
  about: "Akiko Sherman Infotech has over 25 years of experience and has delivered 800+ mission-critical projects for government and enterprise clients.",
  default: "I'm here to help you navigate our enterprise engineering hub. Could you tell me more about your specific requirement?"
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant at Akiko Sherman Infotech. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const getBotResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    if (lowercaseInput.includes('service')) return RESPONSES.services;
    if (lowercaseInput.includes('product') || lowercaseInput.includes('solution')) return RESPONSES.products;
    if (lowercaseInput.includes('contact') || lowercaseInput.includes('call') || lowercaseInput.includes('reach')) return RESPONSES.contact;
    if (lowercaseInput.includes('about')) return RESPONSES.about;
    return RESPONSES.default;
  };

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  }, []);

  return { messages, sendMessage, isTyping };
}
