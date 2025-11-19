import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const MarketChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi, I'm Rob's AI Assistant. Ask me anything about the 2025 Crestmead market data!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await sendMessageToGemini(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-stone-800 rotate-45' : 'bg-zevesto'}`}
      >
        {isOpen ? (
          <span className="text-2xl text-white">+</span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 flex w-[90vw] max-w-[350px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-stone-900/5 sm:right-6">
          <div className="bg-stone-900 px-4 py-3 text-white">
            <h3 className="font-serif text-lg">Ask Rob AI</h3>
            <p className="text-xs text-stone-400">Powered by Gemini 2.5 • Crestmead Specialist</p>
          </div>
          
          <div className="flex h-80 flex-col gap-3 overflow-y-auto bg-stone-50 p-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                  msg.role === 'user' 
                    ? 'self-end bg-zevesto text-white' 
                    : 'self-start bg-white text-stone-800 shadow-sm ring-1 ring-stone-100'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="self-start rounded-xl bg-white px-3 py-2 text-xs italic text-stone-400 shadow-sm">
                Rob AI is thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="border-t border-stone-100 bg-white p-2">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: What was the highest sale?"
                className="flex-1 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm focus:border-zevesto focus:outline-none"
              />
              <button 
                type="submit" 
                disabled={loading}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-white transition hover:bg-stone-700 disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default MarketChat;