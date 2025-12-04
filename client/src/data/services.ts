import { ChefHat, Sparkles, Users, Utensils, Building, Music, Sun, Star } from "lucide-react";

export const servicesData = [
  {
    icon: ChefHat,
    title: "Luxury Catering",
    desc: "A royal catering experience with multi-cuisine menus prepared by our master chefs. We specialize in authentic Indian, Mughlai, Continental, and Pan-Asian cuisines, served with impeccable style.",
    features: ["Customized Menus", "Premium Cutlery", "Uniformed Staff", "Live Stations"],
    packages: [
      { name: "Silver", price: "₹800/plate", items: "2 Starters, 4 Mains, 2 Desserts" },
      { name: "Gold", price: "₹1200/plate", items: "4 Starters, 6 Mains, 3 Desserts, Live Counter" },
      { name: "Platinum", price: "₹1800/plate", items: "6 Starters, 8 Mains, 4 Desserts, 3 Live Counters" }
    ]
  },
  {
    icon: Sparkles,
    title: "Wedding Decoration",
    desc: "Transform your wedding venue into a palace. We provide complete decor solutions including mandap design, floral arrangements, stage setup, entry gates, and ambient lighting.",
    features: ["Theme Based Decor", "Floral Artistry", "Lighting Design", "Photo Booths"],
    packages: [
      { name: "Essential", price: "₹50,000+", items: "Stage, Entry, Basic Lighting" },
      { name: "Premium", price: "₹1.5 Lakh+", items: "Full Floral, Themed Mandap, Ambient Lights" },
      { name: "Royal", price: "₹3 Lakh+", items: "Designer Sets, Imported Flowers, Special Effects" }
    ]
  },
  {
    icon: Users,
    title: "Complete Event Organising",
    desc: "From planning to execution, we handle everything. Our event managers ensure a seamless flow so you can enjoy your special day without any stress.",
    features: ["Vendor Management", "Timeline Planning", "Guest Hospitality", "Logistics"],
    packages: [
      { name: "Coordination", price: "₹25,000", items: "On-day Management" },
      { name: "Planning", price: "₹50,000", items: "Vendor Booking + Coordination" },
      { name: "Full Service", price: "₹1 Lakh+", items: "End-to-End Execution" }
    ]
  },
  {
    icon: Utensils,
    title: "Live Food Counters",
    desc: "Add an interactive element to your dining with our live food stations. Watch our chefs prepare fresh Dosa, Pasta, Chaat, BBQ, Tandoor, and Jalebi right before your eyes.",
    features: ["Interactive Chefs", "Fresh Preparation", "Diverse Cuisines", "Visual Appeal"],
    packages: [
      { name: "Basic", price: "₹15,000", items: "2 Live Stations" },
      { name: "Standard", price: "₹25,000", items: "4 Live Stations" },
      { name: "Grand", price: "₹40,000", items: "6+ Live Stations" }
    ]
  },
  {
    icon: Building,
    title: "Corporate Catering",
    desc: "Impress your clients and employees with our professional corporate catering services. Perfect for seminars, conferences, office parties, and executive luncheons.",
    features: ["Professional Service", "Timely Delivery", "Dietary Options", "Elegant Setup"],
    packages: [
      { name: "Lunch Box", price: "₹350/box", items: "Meal Trays" },
      { name: "Buffet", price: "₹650/head", items: "Full Spread" },
      { name: "High Tea", price: "₹450/head", items: "Snacks & Beverages" }
    ]
  },
  {
    icon: Music,
    title: "Birthday & Theme Parties",
    desc: "Make your parties pop with our creative themed decor and food stalls. Whether it's a kids' birthday or a milestone anniversary, we bring the fun.",
    features: ["Creative Themes", "Fun Food Stalls", "Entertainment", "Custom Cakes"],
    packages: [
      { name: "Kids Party", price: "₹20,000", items: "Decor + Food for 50" },
      { name: "Milestone", price: "₹50,000", items: "Premium Decor + Buffet" },
      { name: "Themed", price: "Custom", items: "Tailored Experience" }
    ]
  },
  {
    icon: Sun,
    title: "Outdoor Catering",
    desc: "Planning a farmhouse wedding or a garden party? We bring our luxury kitchen to your location, ensuring fresh hot food anywhere.",
    features: ["Mobile Kitchen", "All-Weather Setup", "Remote Locations", "Large Scale Capacity"],
    packages: [
      { name: "Garden", price: "₹900/plate", items: "Open Air Setup" },
      { name: "Resort", price: "₹1200/plate", items: "Full Service" },
      { name: "Farmhouse", price: "₹1500/plate", items: "Luxury Setup" }
    ]
  },
  {
    icon: Star,
    title: "Premium Buffet Setup",
    desc: "Elevate your dining experience with our royal buffet setups featuring glass counters, golden risers, carved platters, and artistic food displays.",
    features: ["Glass & Gold Setup", "Artistic Display", "Hygienic Service", "Grand Presentation"],
    packages: [
      { name: "Gold", price: "Included", items: "Standard Luxury Setup" },
      { name: "Royal", price: "+₹200/head", items: "Premium Glassware & Service" },
      { name: "Maharaja", price: "+₹500/head", items: "Silver/Gold Plated Service" }
    ]
  }
];