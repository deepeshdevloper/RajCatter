import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, Mic } from "lucide-react";

export default function InteractiveTestimonials() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Video Testimonial Card */}
      <Card className="glass-card border-gold/20 overflow-hidden group">
        <div className="relative aspect-video bg-black">
          {/* Placeholder for user uploaded video */}
          <video 
            ref={videoRef}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            poster="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" 
            onEnded={() => setIsPlaying(false)}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <Button 
              size="icon" 
              className="w-16 h-16 rounded-full bg-gold/80 text-black hover:bg-gold hover:scale-110 transition-all backdrop-blur-sm"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
            </Button>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-white mb-1">Anita & Rajesh</h3>
          <p className="text-gold text-sm uppercase tracking-wider mb-2">Wedding Reception</p>
          <p className="text-gray-400 italic">"Seeing the live pasta counter was the highlight for our guests. Absolutely magical!"</p>
        </CardContent>
      </Card>

      {/* Audio Review Card */}
      <Card className="glass-card border-gold/20 flex flex-col justify-center p-8 text-center space-y-6">
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto text-gold animate-pulse">
          <Mic size={40} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Share Your Story</h3>
          <p className="text-gray-400 mt-2">Record a 30-second audio review of your experience.</p>
        </div>
        <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black mx-auto">
          Start Recording
        </Button>
        <p className="text-xs text-gray-600">Feature coming soon</p>
      </Card>
    </div>
  );
}