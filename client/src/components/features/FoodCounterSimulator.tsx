import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, X, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Counter {
  id: string;
  name: string;
  description: string;
  image: string;
}

const counters: Counter[] = [
  { id: "c1", name: "Live Pasta", description: "Customized pasta tossed in cheese wheel.", image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?q=80&w=1000&auto=format&fit=crop" },
  { id: "c2", name: "Tandoor", description: "Fresh naans and kebabs from clay oven.", image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=1000&auto=format&fit=crop" },
  { id: "c3", name: "Chaat Gali", description: "Spicy tangy street food made fresh.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop" },
];

export default function FoodCounterSimulator() {
  const [activeCounter, setActiveCounter] = useState<Counter | null>(null);

  return (
    <div className="relative py-12">
      <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">Explore Our <span className="text-gold">Live Counters</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
        {counters.map((counter) => (
          <motion.div
            key={counter.id}
            whileHover={{ scale: 1.05 }}
            className="relative h-64 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-gold/50 transition-colors"
            onClick={() => setActiveCounter(counter)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${counter.image})` }}
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Utensils className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{counter.name}</h3>
              <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">Click to preview</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeCounter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActiveCounter(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900 rounded-2xl overflow-hidden max-w-3xl w-full border border-gold/30 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-black">
                {/* Placeholder for video */}
                <div 
                   className="absolute inset-0 bg-cover bg-center opacity-50"
                   style={{ backgroundImage: `url(${activeCounter.image})` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle size={64} className="text-gold opacity-80" />
                </div>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-4 right-4 text-white hover:bg-black/50 rounded-full"
                  onClick={() => setActiveCounter(null)}
                >
                  <X size={24} />
                </Button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold text-gold mb-2">{activeCounter.name}</h3>
                <p className="text-gray-300 text-lg">{activeCounter.description}</p>
                <Button className="mt-6 bg-gold text-black hover:bg-gold/80">Add to Menu</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}