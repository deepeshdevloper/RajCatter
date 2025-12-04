import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

export default function BookingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm the Raj Catters royal assistant. How can I help you plan your event today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simple mock response logic
    setTimeout(() => {
      let botText = "I'd love to help with that. Could you tell me your event date and estimated guest count?";
      if (input.toLowerCase().includes("price") || input.toLowerCase().includes("cost")) {
        botText = "Our packages start from ₹800/plate. Would you like to see a detailed breakdown?";
      } else if (input.toLowerCase().includes("wedding")) {
        botText = "Weddings are our specialty! We offer full royal themes. Have you checked our Gallery?";
      } else if (input.toLowerCase().includes("contact")) {
        botText = "You can reach us at 7999859833 anytime.";
      }

      const botMsg: Message = { id: Date.now() + 1, text: botText, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-24 right-6 z-40"
      >
        {!isOpen && (
          <Button 
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gold text-black hover:bg-gold/80 shadow-lg border-2 border-white/20 flex items-center justify-center"
          >
            <MessageSquare size={28} />
          </Button>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] bg-black/95 backdrop-blur-xl border border-gold/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gold/10 p-4 border-b border-gold/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gold">Royal Assistant</h3>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                <X size={20} />
              </Button>
            </div>

            {/* Chat Area */}
            <ScrollArea className="flex-grow p-4 space-y-4">
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        msg.sender === 'user' 
                          ? 'bg-gold text-black rounded-br-none' 
                          : 'bg-white/10 text-white rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-gold/20 bg-black/50">
              <div className="flex gap-2">
                <Input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="bg-white/5 border-white/10 focus:border-gold/50 text-white"
                />
                <Button onClick={handleSend} size="icon" className="bg-gold text-black hover:bg-gold/80">
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}