import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Utensils, Music, Gift, ChefHat, Sparkles, Phone, Cuboid as Cube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { testimonialsData } from "@/data/testimonials";
import ThreeDShowcase from "@/components/3d/ThreeDShowcase";
import EventCostCalculator from "@/components/features/EventCostCalculator";
import InteractiveTestimonials from "@/components/features/InteractiveTestimonials";
import FoodCounterSimulator from "@/components/features/FoodCounterSimulator";
import AIMenuRecommender from "@/components/features/AIMenuRecommender";

// Images
import heroBg from "@assets/generated_images/luxury_banquet_hall_with_golden_chandeliers_and_elegant_table_settings..png";
import foodPlatter from "@assets/generated_images/gourmet_indian_food_platter_with_royal_presentation..png";
import chefImage from "@assets/generated_images/professional_chef_plating_a_gourmet_dish..png";
import decorImage from "@assets/generated_images/grand_indian_wedding_mandap_decoration_with_flowers_and_lights..png";
import buffetImage from "@assets/generated_images/luxury_buffet_setup_with_glass_counters_and_golden_chafing_dishes..png";

export default function Home() {
  useSEO("Home", "Luxury Catering that turns every celebration into a royal experience. Serving unforgettable food in Bhopal.");

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 animate-subtle-zoom"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="container relative z-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Luxury Catering That Turns Every <br/>
              <span className="text-gradient-gold">Celebration Into a Royal Experience</span> ✨🌟
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light tracking-wide">
              Serving unforgettable food, flawless décor & seamless event management.
            </p>
            <p className="text-primary/80 mb-8 font-medium tracking-widest uppercase text-sm">Bhopal | 7999859833 | 9229658667</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-black hover:bg-primary/90 text-lg px-8 py-6 rounded-full"
                onClick={() => window.location.href = "/menu"}
              >
                Explore Menu
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full bg-transparent"
                onClick={() => window.location.href = "/contact"}
              >
                Book Your Event
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Summary */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/50" />
                <img 
                  src={chefImage} 
                  alt="Master Chef" 
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/50" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-primary font-serif italic text-xl mb-4">About Raj Catters</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                A Legacy of <span className="text-primary">Royal Flavors</span> & Elegance
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                For over 20 years, Raj Catters has been the name synonymous with luxury and trust in Bhopal. Starting as a family passion, we have grown into the city's most premier catering service, known for blending traditional recipes with modern presentation.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We don't just serve food; we curate experiences. From intimate gatherings to grand weddings of 5000+ guests, our commitment to hygiene, taste, and royal hospitality remains unwavering.
              </p>
              <Link href="/about">
                <Button variant="link" className="text-primary p-0 text-lg group">
                  Read Our Story <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Showcase Section */}
      <section className="py-20 bg-black border-y border-gold/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
             <h2 className="text-3xl font-serif font-bold text-white">Experience <span className="text-gold">Virtual Luxury</span></h2>
             <div className="flex items-center gap-2 text-gold/70 text-sm">
               <Cube size={16} /> Interactive 3D
             </div>
          </div>
          <ThreeDShowcase />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Our Premium Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ChefHat, title: "Luxury Catering", desc: "Exquisite multi-cuisine menus prepared by master chefs." },
              { icon: Sparkles, title: "Wedding Decoration", desc: "Breathtaking floral arrangements, lighting, and stage setups." },
              { icon: Users, title: "Event Organising", desc: "End-to-end planning and execution for stress-free events." },
              { icon: Utensils, title: "Live Food Counters", desc: "Interactive stations featuring global and local delicacies." },
              { icon: Star, title: "Premium Buffet Setup", desc: "Royal glass counters, golden risers, and elegant presentation." },
              { icon: Gift, title: "Theme-Based Catering", desc: "Customized menus and decor to match your event's theme." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/40 border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Cost Estimator Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 skew-y-3 transform -translate-y-12" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-4xl font-serif font-bold text-white mb-6">Plan Your Dream Budget</h2>
                 <p className="text-gray-400 mb-8">Use our advanced estimator to get an instant idea of your event costs based on guest count and preferences.</p>
                 <EventCostCalculator />
              </div>
              <div className="space-y-8">
                 <div>
                   <h2 className="text-4xl font-serif font-bold text-white mb-6 text-right">AI Menu Curator</h2>
                   <p className="text-gray-400 mb-8 text-right">Not sure what to serve? Let our AI build a perfect menu for your occasion.</p>
                 </div>
                 <AIMenuRecommender />
              </div>
           </div>
        </div>
      </section>

      {/* Food Simulator */}
      <section className="bg-black py-12">
         <FoodCounterSimulator />
      </section>

      {/* Signature Experience */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: `url(${buffetImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-none">
                The Raj Catters <br/><span className="text-primary">Signature Experience</span>
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Events Served", value: "5000+" },
                  { label: "Years Legacy", value: "20+" },
                  { label: "Expert Chefs", value: "50+" },
                  { label: "Happy Guests", value: "1M+" }
                ].map((stat, i) => (
                  <div key={i} className="border-l-4 border-primary pl-4">
                    <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 space-y-4">
                {[
                  "Hygienic World-Class Kitchen",
                  "Royal Décor Styling & Presentation",
                  "Customizable Premium Menus",
                  "Flawless On-Time Execution"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Star className="text-primary fill-primary" size={18} />
                    <span className="text-gray-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] bg-black/50 rounded-xl border border-white/10 p-4 backdrop-blur-sm flex items-center justify-center">
               <img src={foodPlatter} className="w-full h-full object-cover rounded-lg opacity-80" alt="Signature Dish" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-md border border-primary/50 animate-pulse">
                   <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white text-center mb-16">What Our Guests Say</h2>
          <InteractiveTestimonials />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonialsData.slice(0, 3).map((test, i) => (
              <Card key={i} className="bg-secondary/20 border-none p-8 relative">
                <div className="absolute -top-4 left-8 text-6xl text-primary font-serif">"</div>
                <CardContent className="pt-8">
                  <p className="text-gray-300 mb-6 italic leading-relaxed">{test.text}</p>
                  <div>
                    <h4 className="text-white font-bold">{test.name}</h4>
                    <p className="text-primary text-sm">{test.role} | {test.location}</p>
                  </div>
                  <div className="flex text-primary mt-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-black mb-6">Ready to Plan Your Royal Event?</h2>
          <p className="text-black/80 text-xl mb-10 max-w-2xl mx-auto font-medium">Let us handle the details while you enjoy the moment. Contact us today for a customized quote.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
             <Button className="bg-black text-white hover:bg-black/80 text-lg px-10 py-6 rounded-full shadow-2xl" onClick={() => window.location.href = "tel:7999859833"}>
               <Phone className="mr-2" size={20} /> Call 7999859833
             </Button>
             <Button variant="outline" className="border-black text-black hover:bg-black/10 text-lg px-10 py-6 rounded-full border-2" onClick={() => window.open("https://wa.me/917999859833", "_blank")}>
               WhatsApp Us
             </Button>
          </div>
          <p className="mt-6 text-black/70 text-sm font-medium">24×7 Support Available</p>
        </div>
      </section>
    </div>
  );
}