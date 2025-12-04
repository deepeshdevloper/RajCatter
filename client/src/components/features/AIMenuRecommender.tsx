import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Brain, Sparkles } from "lucide-react";
import { aiRules } from "@/data/aiRules";
import { motion } from "framer-motion";

export default function AIMenuRecommender() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    type: "",
    budget: "",
    guests: "",
    cuisine: ""
  });

  const handleGenerate = () => {
    setLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      // Offline logic
      const rule = aiRules.find(r => r.condition(formData)) || aiRules[aiRules.length - 1];
      setResult(rule.recommendation);
      setLoading(false);
      setStep(2);
    }, 2000);
  };

  return (
    <Card className="glass-card border-gold/30 max-w-2xl mx-auto">
      <CardHeader className="text-center bg-gold/5 border-b border-gold/10">
        <div className="mx-auto w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black mb-4">
          <Brain size={24} />
        </div>
        <CardTitle className="text-2xl font-serif text-gold">AI Menu Curator</CardTitle>
        <p className="text-gray-400">Let our AI design the perfect menu for your event.</p>
      </CardHeader>
      
      <CardContent className="p-6 md:p-8">
        {step === 1 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Event Type</Label>
                <Select onValueChange={(v) => setFormData({...formData, type: v})}>
                  <SelectTrigger className="bg-black/50 border-white/10"><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Budget Level</Label>
                <Select onValueChange={(v) => setFormData({...formData, budget: v})}>
                  <SelectTrigger className="bg-black/50 border-white/10"><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="high">Royal/High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleGenerate} 
              className="w-full h-12 bg-gradient-to-r from-gold via-[#FCF6BA] to-gold text-black font-bold hover:opacity-90 transition-opacity"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Sparkles className="animate-spin" size={18} /> Curating...
                </span>
              ) : "Generate Recommendation"}
            </Button>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <div className="bg-white/5 p-6 rounded-lg border border-gold/20">
              <h3 className="text-xl font-bold text-gold mb-2">{result.package}</h3>
              <p className="text-gray-300 mb-4 italic">"{result.reason}"</p>
              
              <div className="text-left">
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Key Highlights</h4>
                <ul className="space-y-2">
                  {result.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-white">
                      <Sparkles size={14} className="text-gold" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1 border-white/20 text-white hover:bg-white/10">Try Again</Button>
              <Button className="flex-1 bg-gold text-black hover:bg-gold/90">Save to Planner</Button>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}