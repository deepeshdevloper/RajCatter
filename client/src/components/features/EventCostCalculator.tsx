import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { Calculator, DollarSign } from "lucide-react";

export default function EventCostCalculator() {
  const [guestCount, setGuestCount] = useState(100);
  const [eventType, setEventType] = useState("wedding");
  const [packageType, setPackageType] = useState("gold");
  
  const baseRates = {
    wedding: 800,
    corporate: 500,
    birthday: 400,
    other: 400
  };
  
  const packageMultipliers = {
    silver: 1,
    gold: 1.4,
    platinum: 1.8
  };

  const calculateTotal = () => {
    const base = baseRates[eventType as keyof typeof baseRates];
    const multiplier = packageMultipliers[packageType as keyof typeof packageMultipliers];
    return base * multiplier * guestCount;
  };

  const total = calculateTotal();

  return (
    <Card className="glass-card border-gold/20 text-white">
      <CardHeader className="bg-gold/10 border-b border-gold/10">
        <CardTitle className="flex items-center gap-2 text-gold font-serif">
          <Calculator className="w-5 h-5" />
          Event Cost Estimator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label>Event Type</Label>
          <Select value={eventType} onValueChange={setEventType}>
            <SelectTrigger className="bg-black/50 border-white/10">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-black border-gold/20 text-white">
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Guest Count: {guestCount}</Label>
          <Slider 
            value={[guestCount]} 
            onValueChange={(vals) => setGuestCount(vals[0])} 
            max={5000} 
            step={50}
            className="py-4"
          />
        </div>

        <div className="space-y-2">
          <Label>Package Tier</Label>
          <div className="grid grid-cols-3 gap-2">
            {['silver', 'gold', 'platinum'].map((pkg) => (
              <div 
                key={pkg}
                onClick={() => setPackageType(pkg)}
                className={`cursor-pointer text-center p-2 rounded border transition-all ${
                  packageType === pkg 
                    ? 'bg-gold text-black border-gold font-bold' 
                    : 'bg-black/50 border-white/10 hover:border-gold/50'
                }`}
              >
                <span className="capitalize">{pkg}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          key={total}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gold/20 p-4 rounded-lg border border-gold/30 text-center"
        >
          <p className="text-sm text-gold/80 uppercase tracking-wider mb-1">Estimated Cost</p>
          <p className="text-3xl font-bold text-white flex items-center justify-center gap-1">
            <DollarSign className="w-6 h-6 text-gold" />
            ₹{total.toLocaleString('en-IN')}
          </p>
          <p className="text-xs text-gray-400 mt-2">*Approximate estimation. Contact for final quote.</p>
        </motion.div>

        <Button className="w-full bg-gold text-black hover:bg-gold/80">
          Request Formal Quote
        </Button>
      </CardContent>
    </Card>
  );
}