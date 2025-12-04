import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Utensils } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

export default function Tasting() {
  useSEO("Book a Tasting", "Experience our royal flavors before you book. Schedule a private tasting session.");
  
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState("12:00 PM");
  const [type, setType] = useState("mughlai");
  const { toast } = useToast();

  const handleBooking = () => {
    toast({
      title: "Request Sent!",
      description: `Tasting request for ${type} menu on ${date?.toLocaleDateString()} at ${time} has been sent.`,
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-black relative">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Book a <span className="text-gold">Tasting</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We believe in our taste. Experience our culinary excellence firsthand before you decide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="glass-card border-gold/20 p-6">
            <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
              <Utensils className="text-gold" /> Select Cuisine Preference
            </h2>
            <RadioGroup defaultValue="mughlai" onValueChange={setType} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: "mughlai", label: "Royal Mughlai", desc: "Kebabs, Biryani, Curries" },
                { id: "indian", label: "North Indian", desc: "Paneer, Dal Makhani, Breads" },
                { id: "continental", label: "Continental", desc: "Pastas, Salads, Grills" },
                { id: "fusion", label: "Modern Fusion", desc: "Innovative Mix of Flavors" },
              ].map((item) => (
                <div key={item.id}>
                  <RadioGroupItem value={item.id} id={item.id} className="peer sr-only" />
                  <Label
                    htmlFor={item.id}
                    className="flex flex-col items-center justify-between rounded-md border-2 border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-gold/50 peer-data-[state=checked]:border-gold peer-data-[state=checked]:text-gold cursor-pointer transition-all"
                  >
                    <span className="text-lg font-bold mb-1">{item.label}</span>
                    <span className="text-xs text-gray-400">{item.desc}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </Card>

          <div className="space-y-8">
            <Card className="glass-card border-gold/20 p-6">
              <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                <CalendarIcon className="text-gold" /> Select Date & Time
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded-lg flex justify-center">
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    inline
                    calendarClassName="bg-transparent text-white border-none"
                    dayClassName={() => "text-white hover:bg-gold hover:text-black rounded-full"}
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {["12:00 PM", "2:00 PM", "5:00 PM", "7:00 PM"].map((t) => (
                    <Button
                      key={t}
                      variant={time === t ? "default" : "outline"}
                      onClick={() => setTime(t)}
                      className={time === t ? "bg-gold text-black" : "border-white/20 text-gray-300"}
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>

            <Button 
              onClick={handleBooking} 
              className="w-full h-14 text-lg font-bold bg-gradient-to-r from-gold via-[#FCF6BA] to-gold text-black hover:opacity-90"
            >
              Confirm Tasting Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}