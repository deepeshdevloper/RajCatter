import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "@/hooks/use-seo";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address.").optional().or(z.literal("")),
  eventDate: z.string().min(1, "Please select a date."),
  guestCount: z.string().min(1, "Please estimate guest count."),
  eventType: z.string().min(1, "Please select an event type."),
  message: z.string().optional(),
});

export default function Contact() {
  useSEO("Contact Us", "Get in touch with Raj Catters for bookings and inquiries. We are available 24x7.");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      eventDate: "",
      guestCount: "",
      eventType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock API submission
    console.log(values);
    toast({
      title: "Message Sent Successfully!",
      description: "We have received your inquiry and will contact you shortly.",
    });
    form.reset();
  }

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to plan your royal event? Get in touch with us today for a customized quote and consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-8">Get In Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-400 text-lg">7999859833</p>
                  <p className="text-gray-400 text-lg">9229658667</p>
                  <p className="text-primary text-sm mt-1">Click to call on mobile</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-400 text-lg">Bhopal, Madhya Pradesh</p>
                  <p className="text-gray-500">Serving all across the city and nearby areas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Working Hours</h3>
                  <p className="text-gray-400 text-lg">24×7 Support</p>
                  <p className="text-gray-500">Always available for your celebrations.</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-secondary/30 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="text-center z-10">
                <MapPin size={48} className="text-primary mx-auto mb-2" />
                <p className="text-white font-bold">Bhopal, Madhya Pradesh</p>
                <p className="text-gray-400 text-sm">View on Google Maps</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-secondary/20 p-8 md:p-12 rounded-2xl border border-white/5"
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-8">Send Us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Event Date</FormLabel>
                        <FormControl>
                          <Input type="date" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guestCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Guest Count (Approx)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 500" type="number" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Event Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/10 text-white h-12">
                            <SelectValue placeholder="Select Event Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black border-white/10 text-white">
                          <SelectItem value="Wedding">Wedding</SelectItem>
                          <SelectItem value="Reception">Reception</SelectItem>
                          <SelectItem value="Engagement">Engagement / Sangeet</SelectItem>
                          <SelectItem value="Birthday">Birthday Party</SelectItem>
                          <SelectItem value="Corporate">Corporate Event</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message / Special Requirements</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us more about your event..." className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 h-12 text-lg font-bold rounded-lg mt-4">
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}