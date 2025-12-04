import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryData } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";

export default function Gallery() {
  useSEO("Gallery", "Explore our portfolio of royal weddings, corporate events, and luxury décor setups.");
  
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", ...new Set(galleryData.map(item => item.category))];
  
  const filteredImages = filter === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
        >
          Our <span className="text-primary">Gallery</span>
        </motion.h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Glimpses of the royal experiences we've created.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={`rounded-full ${filter === cat ? "bg-gold text-black" : "border-white/20 text-gray-300"}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer border border-white/5"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
                  <ZoomIn className="text-gold mb-2" size={32} />
                  <p className="text-white font-serif text-lg">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <Button 
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
                variant="ghost"
                size="icon"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </Button>
              
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-gold/20"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <h3 className="text-2xl text-gold font-serif">{selectedImage.caption}</h3>
                <p className="text-gray-400">{selectedImage.category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}