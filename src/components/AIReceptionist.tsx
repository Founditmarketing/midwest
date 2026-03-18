import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export default function AIReceptionist() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'Good day. I am the Executive Assistant to the Founder of Midwest Windmill. How may we assist with your heritage engineering project today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    const messagesHistory = [...messages.slice(1)]; // Skip the first greeting message
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage.text,
          history: messagesHistory 
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      
      const modelMessageId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: modelMessageId, role: 'model', text: '' }]);
      
      let fullResponse = '';
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunkString = decoder.decode(value, { stream: true });
          const lines = chunkString.split('\n');
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const dataStr = line.replace('data: ', '').trim();
              if (dataStr === '[DONE]') {
                done = true;
                break;
              }
              if (dataStr) {
                try {
                  const data = JSON.parse(dataStr);
                  if (data.text) {
                     fullResponse += data.text;
                     setMessages(prev => prev.map(msg => 
                       msg.id === modelMessageId ? { ...msg, text: fullResponse } : msg
                     ));
                  }
                } catch (e) {
                  console.error("Error parsing SSE data line:", e);
                }
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("Error communicating with backend API:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: 'I apologize, but I am currently unable to process your request. Please try again later or contact our office directly.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-heritage-gold text-industrial-charcoal-dark shadow-[0_0_40px_rgba(197,160,89,0.3)] hover:bg-heritage-gold-light hover:scale-105 transition-all duration-300"
        aria-label="Private Consultation"
      >
        <MessageSquare size={24} strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-28 right-8 z-50 w-[400px] h-[600px] max-h-[80vh] bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/5">
              <div>
                <h3 className="font-serif text-xl text-heritage-gold font-light tracking-wide">Private Consultation</h3>
                <p className="text-[9px] text-gray-400 font-sans tracking-[0.2em] uppercase mt-1">Executive Assistant</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                      msg.role === 'user' 
                        ? 'bg-heritage-gold/90 text-industrial-charcoal-dark rounded-tr-sm backdrop-blur-md' 
                        : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm backdrop-blur-md'
                    }`}
                  >
                    <p className="font-sans text-sm leading-relaxed whitespace-pre-wrap font-light">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-5 py-4 flex items-center space-x-3 backdrop-blur-md">
                    <Loader2 size={14} className="animate-spin text-heritage-gold" />
                    <span className="text-[10px] tracking-widest uppercase text-gray-400 font-sans">Drafting...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-black/40 border-t border-white/10 backdrop-blur-xl">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about a project..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-heritage-gold/50 transition-colors font-sans font-light"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-3 p-2 text-heritage-gold hover:text-heritage-gold-light disabled:opacity-50 disabled:hover:text-heritage-gold transition-colors"
                >
                  <Send size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
