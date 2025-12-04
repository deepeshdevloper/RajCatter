import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroBg from "@assets/generated_images/gourmet_indian_food_platter_with_royal_presentation..png";
import { menuData } from "@/data/menu";
import { useSEO } from "@/hooks/use-seo";

export default function Menu() {
  useSEO("Our Menu", "Explore our luxury catering menu featuring Royal Indian, Mughlai, Continental, and Live Counters.");
  
  const [activeTab, setActiveTab] = useState("royal");

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="relative py-20 bg-black/50 overflow-hidden mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Our <span className="text-primary">Menu</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A culinary journey through the finest flavors of India and the world.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        <Tabs defaultValue="royal" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <TabsList className="bg-secondary/30 p-1 border border-white/10 h-auto flex-wrap justify-center gap-2">
              {Object.entries(menuData).map(([key, category]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="px-6 py-3 text-lg data-[state=active]:bg-primary data-[state=active]:text-black text-gray-300"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(menuData).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="text-center mb-8">
                <p className="text-gray-400 italic text-lg">{category.description}</p>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 border border-white/5 p-6 rounded-lg hover:border-primary/30 hover:bg-white/10 transition-all group h-full flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{item.name}</h4>
                      <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity mt-2" />
                    </div>
                    <p className="text-sm text-gray-500 mt-auto">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}