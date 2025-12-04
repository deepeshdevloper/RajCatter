import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import buffetImage from "@assets/generated_images/luxury_buffet_setup_with_glass_counters_and_golden_chafing_dishes..png";
import { useSEO } from "@/hooks/use-seo";
import QuoteGenerator from "@/components/features/QuoteGenerator";

export default function Services() {
  useSEO("Our Services", "From Luxury Catering to Wedding Decoration, we offer complete event management solutions.");

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="relative py-20 bg-black/50 overflow-hidden mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${buffetImage})` }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive solutions for all your celebration needs.
          </p>
          <QuoteGenerator />
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/20 border border-white/5 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-primary/80">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                <h4 className="text-primary font-serif mb-4 text-sm uppercase tracking-widest">Sample Packages</h4>
                <div className="grid grid-cols-3 gap-2">
                   {service.packages.map((pkg, i) => (
                     <div key={i} className="bg-black/30 p-3 rounded text-center border border-white/5 hover:border-primary/20 transition-colors">
                       <p className="text-white font-bold text-sm">{pkg.name}</p>
                       <p className="text-primary text-xs my-1">{pkg.price}</p>
                       <p className="text-gray-500 text-[10px] leading-tight">{pkg.items}</p>
                     </div>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}