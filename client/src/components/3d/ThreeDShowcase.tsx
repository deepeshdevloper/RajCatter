import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Stars } from "@react-three/drei";
import { Suspense } from "react";

function GoldSphere() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#D4AF37" 
          metalness={1} 
          roughness={0.1} 
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingPlatter({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh position={position}>
        <cylinderGeometry args={[0.8, 0.6, 0.1, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[position[0], position[1] + 0.1, position[2]]}>
         <sphereGeometry args={[0.3, 16, 16]} />
         <meshStandardMaterial color={color} roughness={0.4} />
      </mesh>
    </Float>
  );
}

export default function ThreeDShowcase() {
  return (
    <div className="h-[400px] w-full bg-black/90 rounded-xl overflow-hidden border border-gold/20 relative">
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-gold font-serif text-xl font-bold">3D Experience</h3>
        <p className="text-white/60 text-sm">Interact with our royal setup</p>
      </div>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#D4AF37" />
          
          <GoldSphere />
          <FloatingPlatter position={[-2.5, 0.5, -1]} color="#ff6b6b" />
          <FloatingPlatter position={[2.5, -0.5, -1]} color="#4ecdc4" />
          
          <Environment preset="city" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}