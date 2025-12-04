import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 text-center"
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] mb-4 drop-shadow-lg">
              Raj Catters
            </h1>
            <p className="text-white/80 tracking-[0.5em] uppercase text-sm md:text-lg font-light">
              Luxury Redefined
            </p>
          </motion.div>
          
          {/* Golden Particles Effect (Simulated with CSS/Divs for performance) */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gold/40 blur-sm"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 100,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: -100,
                x: `calc(${Math.random() * 100}% + ${(Math.random() - 0.5) * 200}px)`
              }}
              transition={{ 
                duration: Math.random() * 2 + 2, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 2
              }}
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
              }}
            />
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}