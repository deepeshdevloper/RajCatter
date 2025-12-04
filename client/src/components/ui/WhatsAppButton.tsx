import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "917999859833"; // Country code + number
  const message = "Hi Raj Catters, I want catering services for my event. Details: [Event Type] [Date] [Guest Count]";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button 
          size="icon" 
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg border-2 border-white/20"
        >
          <MessageCircle size={32} className="text-white" />
        </Button>
      </a>
    </motion.div>
  );
}