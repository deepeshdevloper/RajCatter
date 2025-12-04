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
                Founded over 20 years ago, Raj Catters started as a humble family business with a singular vision: to serve food that touches the soul. What began in a small kitchen in Bhopal has now blossomed into the city's most trusted luxury catering brand.
              </p>
              <p>
                From intimate family gatherings of 50 guests to grand royal weddings hosting over 5000 people, we have seen it all. Our journey is defined by our passion for authentic flavors, innovative presentation, and an unyielding commitment to hospitality.
              </p>
              <p>
                Today, we are proud to be the preferred choice for Bhopal's elite, turning ordinary events into extraordinary memories through our culinary mastery and decor expertise.
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
              { title: "Food is Emotion", desc: "We believe food is not just a service, but an emotion that connects people.", icon: Heart },
              { title: "Royal Presentation", desc: "Every dish is plated with artistic precision to look as good as it tastes.", icon: Award },
              { title: "Hygiene First", desc: "We maintain world-class hygiene standards in our kitchens and service.", icon: Clock },
              { title: "Customization", desc: "Your event is unique, and so should be your menu. We tailor everything to you.", icon: Users },
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
          {teamData.map((member, i) => (
            <div key={i} className="group bg-secondary/10 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
              <div className="h-60 bg-gray-800 rounded-lg mb-6 overflow-hidden relative flex items-center justify-center">
                <div className="text-gray-600 text-4xl font-serif opacity-20">PHOTO</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-primary font-medium italic">"{member.quote}"</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-primary mb-4">{member.role}</p>
              <p className="text-sm text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}