import { motion } from "framer-motion";
import { Users, Award, Clock, Heart } from "lucide-react";
import chefImage from "@assets/generated_images/professional_chef_plating_a_gourmet_dish..png";
import { teamData } from "@/data/team";
import { useSEO } from "@/hooks/use-seo";

export default function About() {
  useSEO("About Us", "Learn about Raj Catters' 20+ year legacy, our philosophy, and the expert team behind your royal events.");

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            About <span className="text-primary">Raj Catters</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are not just caterers; we are creators of royal culinary experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                For over 20 years, Raj Catters has been synonymous with culinary excellence and royal hospitality in Bhopal. What started as a small family business driven by a passion for authentic flavors has blossomed into the city's premier luxury catering service.
              </p>
              <p>
                We have journeyed from serving intimate family gatherings to orchestrating grand weddings and corporate galas for up to 5000 guests. Our legacy is built on trust, word-of-mouth recommendations, and an unwavering commitment to quality.
              </p>
              <p>
                Today, we continue to set the standard for luxury catering in Bhopal, turning ordinary events into extraordinary memories through our culinary mastery and decor expertise.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-2 border-primary transform translate-x-4 translate-y-4 rounded-lg" />
            <img 
              src={chefImage} 
              alt="Our History" 
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Our Philosophy</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Food is Emotion", desc: "We believe that food is emotion, not just a service. Every dish we serve is a testament to our dedication.", icon: Heart },
              { title: "Royal Presentation", desc: "Our presentation is designed to be a feast for the eyes, matching the grandeur of your occasion.", icon: Award },
              { title: "Hygiene First", desc: "We maintain a hygiene-first mindset, ensuring that safety and cleanliness are never compromised.", icon: Clock },
              { title: "Customizable Menus", desc: "Our customizable menus allow you to curate an experience that reflects your personal taste.", icon: Users },
            ].map((item, index) => (
              <div key={index} className="bg-secondary/20 p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-16">Meet The Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Master Chef", role: "Culinary Head", bio: "With years of experience in royal cuisines, our Master Chef ensures every dish is a masterpiece of flavor." },
            { name: "Food Stylist", role: "Presentation Expert", bio: "Believes that we eat with our eyes first. Transforms buffets into visual feasts." },
            { name: "Event Manager", role: "Operations Lead", bio: "Ensures flawless execution from the first guest arrival to the last farewell." },
            { name: "Décor Designer", role: "Creative Director", bio: "Crafts the royal ambience that sets the perfect mood for your celebration." }
          ].map((member, i) => (
            <div key={i} className="group bg-secondary/10 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
              <div className="h-60 bg-gray-800 rounded-lg mb-6 overflow-hidden relative flex items-center justify-center">
                <div className="text-gray-600 text-4xl font-serif opacity-20">PHOTO</div>
              </div>
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-primary mb-4">{member.role}</p>
              <p className="text-sm text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-secondary/20 p-10 rounded-2xl border border-white/5">
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-10">Our Promise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
             {["Punctual service", "Flawless execution", "High-quality ingredients", "No compromise on taste"].map((promise, i) => (
               <div key={i} className="bg-black/40 p-6 rounded-lg border border-white/5 text-lg text-gray-200 font-medium">
                 <span className="text-primary block text-2xl mb-2">✦</span>
                 {promise}
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}