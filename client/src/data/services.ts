import { ChefHat, Sparkles, Users, Utensils, Building, Music, Sun, Star } from "lucide-react";

export const servicesData = [
  {
    icon: ChefHat,
    title: "Luxury Catering",
    desc: "A royal catering experience with multi-cuisine menus designed to impress the most discerning palates.",
    features: ["Multi-Cuisine Menus", "Uniformed Waitstaff", "Premium Cutlery", "Elegant Dining Setup"],
    packages: [
      { name: "Silver", price: "Starts @ ₹800", items: "Essential Luxury" },
      { name: "Gold", price: "Starts @ ₹1200", items: "Premium Spread" },
      { name: "Royal", price: "Starts @ ₹1800", items: "Ultimate Experience" }
    ]
  },
  {
    icon: Sparkles,
    title: "Wedding Decoration",
    desc: "Mandap, stage, entry gate, photo booth, flower décor, lighting that creates a fairytale setting.",
    features: ["Floral Artistry", "Theme Lighting", "Stage Design", "Grand Entryways"],
    packages: [
      { name: "Standard", price: "Custom", items: "Beautiful Basics" },
      { name: "Premium", price: "Custom", items: "Thematic Design" },
      { name: "Luxury", price: "Custom", items: "Grand Scale" }
    ]
  },
  {
    icon: Users,
    title: "Event Organising",
    desc: "Complete event management from planning to execution, ensuring a stress-free celebration.",
    features: ["Logistics Handling", "Vendor Coordination", "Timeline Management", "On-site Support"],
    packages: [
      { name: "Coordination", price: "Fixed Fee", items: "Day-of Mgmt" },
      { name: "Planning", price: "Fixed Fee", items: "Full Planning" },
      { name: "Turnkey", price: "Custom", items: "All Inclusive" }
    ]
  },
  {
    icon: Utensils,
    title: "Live Food Counters",
    desc: "Interactive stations serving Dosa, pasta, chaat, Chinese, BBQ, tandoor, and desserts fresh to your guests.",
    features: ["Interactive Cooking", "Fresh Preparation", "Entertainment", "Customizable Options"],
    packages: [
      { name: "Basic", price: "₹15k+", items: "2 Stations" },
      { name: "Standard", price: "₹25k+", items: "4 Stations" },
      { name: "Grand", price: "₹40k+", items: "6+ Stations" }
    ]
  },
  {
    icon: Building,
    title: "Corporate Catering",
    desc: "Professional buffet setups for seminars, events, and conferences with punctual service.",
    features: ["Punctual Service", "Efficient Setup", "High-Profile Menus", "Professional Staff"],
    packages: [
      { name: "Box Meal", price: "₹350+", items: "Quick & Easy" },
      { name: "Buffet", price: "₹650+", items: "Full Spread" },
      { name: "Executive", price: "₹950+", items: "Premium Dining" }
    ]
  },
  {
    icon: Music,
    title: "Birthday & Theme Parties",
    desc: "Creative themed décor plus fun food stalls to make birthdays and special parties unforgettable.",
    features: ["Creative Themes", "Fun Food Stalls", "Kids Menu", "Party Entertainment"],
    packages: [
      { name: "Kids", price: "₹20k+", items: "Fun & Games" },
      { name: "Teen", price: "₹30k+", items: "Trend & Style" },
      { name: "Adult", price: "₹50k+", items: "Elegant Party" }
    ]
  },
  {
    icon: Sun,
    title: "Outdoor Catering",
    desc: "Specialized service for farmhouse events, resort weddings, and garden parties.",
    features: ["Mobile Kitchen", "Remote Capability", "Hot Food Service", "Large Capacity"],
    packages: [
      { name: "Garden", price: "Custom", items: "Open Air" },
      { name: "Resort", price: "Custom", items: "Full Service" },
      { name: "Farm", price: "Custom", items: "Rustic Luxury" }
    ]
  },
  {
    icon: Star,
    title: "Premium Buffet Setup",
    desc: "Glass counters, golden risers, and carved platters for a truly royal dining presentation.",
    features: ["Glass Counters", "Golden Risers", "Carved Platters", "Artistic Display"],
    packages: [
      { name: "Gold", price: "Included", items: "Standard Luxury" },
      { name: "Royal", price: "Upgrade", items: "Premium Props" },
      { name: "Maharaja", price: "Upgrade", items: "Elite Setup" }
    ]
  }
];
