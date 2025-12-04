import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import { menuData } from "@/data/menu";

// Simplified Flipbook-like experience
export default function DigitalMenuFlipbook() {
  useSEO("Digital Menu", "Experience our royal menu in an interactive digital format.");
  const [page, setPage] = useState(0);
  const categories = Object.values(menuData);
  const totalPages = categories.length;

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="pt-24 min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-serif text-gold mb-8 z-10 flex items-center gap-3"
      >
        <BookOpen /> Digital Menu Book
      </motion.h1>

      <div className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[3/2] perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full h-full bg-[#1a1a1a] border-2 border-gold/30 rounded-lg shadow-2xl flex overflow-hidden relative"
          >
            {/* Page Content */}
            <div className="w-full h-full p-8 md:p-12 flex flex-col bg-[url('/assets/paper-texture.png')] bg-cover">
              <div className="border-2 border-gold/20 h-full p-6 md:p-8 flex flex-col relative">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/50" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/50" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/50" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/50" />

                <div className="text-center mb-8">
                   <h2 className="text-3xl md:text-5xl font-serif text-gold font-bold">{categories[page].label}</h2>
                   <div className="w-24 h-1 bg-gold mx-auto my-4" />
                   <p className="text-gray-400 italic text-lg">{categories[page].description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 overflow-y-auto pr-4 custom-scrollbar flex-grow">
                  {categories[page].items.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between items-baseline border-b border-white/5 pb-2 hover:bg-white/5 px-2 rounded transition-colors">
                      <div>
                        <h3 className="text-white font-bold text-lg">{item.name}</h3>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 flex justify-between text-gray-500 text-sm">
                   <span>Raj Catters Luxury Collection</span>
                   <span>Page {page + 1} of {totalPages}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 z-20">
          <Button 
            size="icon" 
            variant="outline" 
            onClick={prevPage} 
            disabled={page === 0}
            className="rounded-full h-12 w-12 border-gold/50 text-gold hover:bg-gold hover:text-black disabled:opacity-30"
          >
            <ArrowLeft />
          </Button>
        </div>
        
        <div className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 z-20">
          <Button 
            size="icon" 
            variant="outline" 
            onClick={nextPage} 
            disabled={page === totalPages - 1}
            className="rounded-full h-12 w-12 border-gold/50 text-gold hover:bg-gold hover:text-black disabled:opacity-30"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="mt-8 flex gap-2">
        {categories.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === page ? 'bg-gold' : 'bg-gray-700 hover:bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
}