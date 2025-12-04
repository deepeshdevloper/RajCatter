import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Phone, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function PortalAuth() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const { toast } = useToast();

  const handleSendOtp = () => {
    if (phone.length < 10) {
      toast({ variant: "destructive", title: "Invalid Phone", description: "Please enter a valid phone number" });
      return;
    }
    // Mock API call
    setStep('otp');
    toast({ title: "OTP Sent", description: "Your mock OTP is 1234" });
  };

  const handleLogin = () => {
    if (otp === "1234") {
      toast({ title: "Login Successful", description: "Welcome back to your dashboard" });
      window.location.href = "/portal/dashboard";
    } else {
      toast({ variant: "destructive", title: "Invalid OTP", description: "Please enter 1234" });
    }
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-black p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="glass-card border-gold/30">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto text-gold border border-gold/30">
              <Lock size={32} />
            </div>
            <div>
              <CardTitle className="text-3xl font-serif text-gold">Customer Portal</CardTitle>
              <p className="text-gray-400 mt-2">Manage your bookings & menu</p>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {step === 'phone' ? (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label className="text-gray-300">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-500" size={18} />
                    <Input 
                      className="bg-black/50 border-white/10 pl-10 text-white h-12" 
                      placeholder="Enter your mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <Button onClick={handleSendOtp} className="w-full h-12 bg-gold text-black hover:bg-gold/80 font-bold">
                  Send OTP <ArrowRight className="ml-2" size={18} />
                </Button>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label className="text-gray-300">Enter OTP</Label>
                  <Input 
                    className="bg-black/50 border-white/10 text-white h-12 text-center text-2xl tracking-widest" 
                    placeholder="••••"
                    maxLength={4}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <p className="text-xs text-center text-gray-500">Enter 1234 for demo</p>
                </div>
                <Button onClick={handleLogin} className="w-full h-12 bg-gold text-black hover:bg-gold/80 font-bold">
                  Verify & Login
                </Button>
                <Button variant="ghost" onClick={() => setStep('phone')} className="w-full text-gray-400 hover:text-white">
                  Change Phone Number
                </Button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}