
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, Minimize2, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './ChatBot.css';

interface Message {
   id: number;
   text: string;
   sender: 'user' | 'bot';
}

const ChatBot = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [input, setInput] = useState('');
   const [messages, setMessages] = useState<Message[]>([
      { id: 1, text: "Hello! How can I assist you today?", sender: 'bot' }
   ]);
   const messagesEndRef = useRef<HTMLDivElement>(null);
   const navigate = useNavigate();

   const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
   };

   useEffect(() => {
      scrollToBottom();
   }, [messages]);

   const handleSend = (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim()) return;

      const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
      setMessages(prev => [...prev, userMsg]);
      setInput('');

      // Simulate Bot Response
      setTimeout(() => {
         const botResponse = getBotResponse(userMsg.text);
         setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
      }, 600);
   };

   const getBotResponse = (text: string): string => {
      const lowerText = text.toLowerCase();

      if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
         return "Hello there! Ready to plan something amazing?";
      }
      if (lowerText.includes('book') || lowerText.includes('appointment')) {
         return "You can book an event easily! I can take you to our booking page. Just ask me to 'go to booking'.";
      }
      if (lowerText.includes('go to booking')) {
         navigate('/booking');
         return "Navigating you to the booking page now...";
      }
      if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('budget')) {
         return "Our pricing depends on your specific needs. We have flexible packages starting from ₹50,000. Check the Booking page for estimates!";
      }
      if (lowerText.includes('services') || lowerText.includes('what do you do')) {
         return "We offer Wedding Planning, Catering, Photography, DJ & Sound, and more!";
      }
      if (lowerText.includes('contact') || lowerText.includes('call') || lowerText.includes('phone')) {
         return "You can reach us at +91 9361669314 or email nammaooruevents@gmail.com.";
      }
      if (lowerText.includes('location') || lowerText.includes('where')) {
         return "We are based in Namma Ooru, Chennai (Aranthangi).";
      }
      if (lowerText.includes('thank')) {
         return "You're welcome! Let me know if you need anything else.";
      }

      return "I'm not sure about that. Try asking about 'booking', 'services', 'pricing', or 'contact'.";
   };

   const text = "VK INTELLIGENCE - ";

   return (
      <div className="fixed bottom-6 right-6 z-50 font-heebo">
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  // Using the new structure requested
                  className="max-w-md w-72 sm:w-80 mx-auto bg-white dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden mb-6 border border-zinc-200 dark:border-zinc-700"
               >
                  <div className="flex flex-col h-[400px]">
                     {/* Header */}
                     <div className="px-4 py-3 border-b border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                        <div className="flex justify-between items-center">
                           <div className="flex items-center gap-2">
                              <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                                 VK INTELLIGENCE
                              </h2>
                           </div>
                           <div className="flex items-center gap-2">
                              <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                 Online
                              </div>
                              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
                                 <Minimize2 size={16} />
                              </button>
                           </div>
                        </div>
                     </div>

                     {/* Messages */}
                     <div className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2 bg-gray-50 dark:bg-zinc-900" id="chatDisplay">
                        {messages.map((msg) => (
                           <div
                              key={msg.id}
                              className={`chat-message max-w-[80%] rounded-lg px-3 py-1.5 text-sm ${msg.sender === 'user'
                                 ? 'self-end bg-violet-600 text-white'
                                 : 'self-start bg-zinc-500 text-white'
                                 }`}
                           >
                              {msg.text}
                           </div>
                        ))}
                        <div ref={messagesEndRef} />
                     </div>

                     {/* Input */}
                     <div className="px-3 py-2 border-t border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                        <form onSubmit={handleSend} className="flex gap-2">
                           <input
                              placeholder="Type your message..."
                              className="flex-1 p-2 border rounded-lg bg-gray-50 border-gray-300 text-gray-900 dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                              id="chatInput"
                              type="text"
                              value={input}
                              onChange={(e) => setInput(e.target.value)}
                           />
                           <button
                              type="submit"
                              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
                              id="sendButton"
                              disabled={!input.trim()}
                           >
                              Send
                           </button>
                        </form>
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         {/* Custom Toggle Button (Kept as per previous request) */}
         {!isOpen && (
            <button className="vk-button" onClick={() => setIsOpen(true)}>
               <div className="vk-button__text">
                  {text.split("").map((char, i) => (
                     <span key={i} style={{ "--index": i } as React.CSSProperties}>
                        {char}
                     </span>
                  ))}
               </div>
               <div className="vk-button__circle">
                  <Bot size={24} className="vk-button__icon" />
                  <MessageSquare size={24} className="vk-button__icon--copy" />
               </div>
            </button>
         )}
      </div>
   );
};

export default ChatBot;
