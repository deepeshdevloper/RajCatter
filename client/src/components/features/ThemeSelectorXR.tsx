import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Palette, Check } from "lucide-react";

// 3D Model Placeholders using basic shapes
function ThemeModel({ theme }: { theme: string }) {
  const color = 
    theme === "Royal Gold" ? "#D4AF37" : 
    theme === "Midnight Blue" ? "#191970" : 
    theme === "Ruby Red" ? "#9b111e" : "#D4AF37";

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <group>
        {/* Table */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        
        {/* Centerpiece */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Plates */}
        {[0, 90, 180, 270].map((angle, i) => (
          <mesh key={i} position={[Math.cos(angle * Math.PI / 180) * 1, -0.4, Math.sin(angle * Math.PI / 180) * 1]}>
             <cylinderGeometry args={[0.3, 0.25, 0.05, 16]} />
             <meshStandardMaterial color="white" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function ThemeSelectorXR() {
  const [selectedTheme, setSelectedTheme] = useState("Royal Gold");
  const [arMode, setArMode] = useState(false);

  const themes = [
    { name: "Royal Gold", color: "bg-[#D4AF37]" },
    { name: "Midnight Blue", color: "bg-[#191970]" },
    { name: "Ruby Red", color: "bg-[#9b111e]" }
  ];

  return (
    <div className="bg-black/50 border border-gold/20 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-gold/10 flex justify-between items-center">
        <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
          <Palette className="text-gold" /> Theme Visualizer
        </h3>
        <Button 
          variant="outline" 
          className="border-gold text-gold hover:bg-gold hover:text-black"
          onClick={() => setArMode(!arMode)}
        >
          {arMode ? "Exit AR View" : "View in AR"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 h-[500px]">
        {/* Controls */}
        <div className="p-6 border-r border-gold/10 space-y-6">
           <h4 className="text-white font-bold mb-4">Select Decor Theme</h4>
           <div className="space-y-3">
             {themes.map((theme) => (
               <div 
                 key={theme.name}
                 className={`p-4 rounded-lg border cursor-pointer flex justify-between items-center transition-all ${
                   selectedTheme === theme.name 
                     ? 'bg-white/10 border-gold' 
                     : 'bg-transparent border-white/10 hover:bg-white/5'
                 }`}
                 onClick={() => setSelectedTheme(theme.name)}
               >
                 <div className="flex items-center gap-3">
                   <div className={`w-6 h-6 rounded-full ${theme.color}`} />
                   <span className="text-white">{theme.name}</span>
                 </div>
                 {selectedTheme === theme.name && <Check className="text-gold" size={18} />}
               </div>
             ))}
           </div>
           
           <div className="mt-8 p-4 bg-gold/10 rounded text-sm text-gray-300">
             <p className="font-bold text-gold mb-1">About this theme:</p>
             {selectedTheme === "Royal Gold" && "Our signature look featuring gold accents, black velvet drapes, and warm ambient lighting."}
             {selectedTheme === "Midnight Blue" && "Elegant and mysterious, with deep blue fabrics, silver cutlery, and cool-toned floral arrangements."}
             {selectedTheme === "Ruby Red" && "Passionate and grand, utilizing rich red roses, gold candelabras, and royal red carpets."}
           </div>
        </div>

        {/* 3D Viewport */}
        <div className="col-span-2 bg-gradient-to-b from-gray-900 to-black relative">
           {arMode ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
               <div className="w-24 h-24 border-4 border-gold rounded-lg mb-4 animate-pulse flex items-center justify-center">
                 <span className="text-4xl">AR</span>
               </div>
               <h3 className="text-2xl text-white font-bold mb-2">AR Mode Active</h3>
               <p className="text-gray-400 max-w-md">
                 Point your camera at a flat surface to place the virtual table setup.
                 <br/>(Mock AR functionality - would integrate WebXR API here)
               </p>
             </div>
           ) : (
             <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
               <Suspense fallback={null}>
                 <ambientLight intensity={0.5} />
                 <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                 <pointLight position={[-10, -10, -10]} intensity={0.5} />
                 
                 <ThemeModel theme={selectedTheme} />
                 
                 <Environment preset="night" />
                 <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={true} minDistance={3} maxDistance={8} />
               </Suspense>
             </Canvas>
           )}
           
           <div className="absolute bottom-4 left-4 text-xs text-gray-500">
             * 3D Visualization is an approximation
           </div>
        </div>
      </div>
    </div>
  );
}