export const aiRules = [
  {
    condition: (input: any) => input.budget === "high" && input.type === "wedding",
    recommendation: {
      package: "Platinum Royal",
      reason: "For a high-budget royal wedding, we recommend our Platinum package featuring extensive live counters and premium Mughlai delicacies.",
      highlights: ["Mutton Rogan Josh", "Live Tandoor", "Premium Desserts"]
    }
  },
  {
    condition: (input: any) => input.type === "birthday" && input.guests < 50,
    recommendation: {
      package: "Intimate Celebration",
      reason: "For smaller gatherings, a focused menu with crowd-pleasers works best.",
      highlights: ["Pasta Station", "Paneer Tikka", "Ice Cream Counter"]
    }
  },
  {
    condition: (input: any) => input.cuisine === "south_indian",
    recommendation: {
      package: "Dakshin Delight",
      reason: "Based on your preference for South Indian cuisine.",
      highlights: ["Live Dosa", "Idli Sambar", "Filter Coffee"]
    }
  },
  {
    condition: (input: any) => true, // Default
    recommendation: {
      package: "Gold Standard",
      reason: "Our most popular package balancing variety and luxury.",
      highlights: ["Shahi Paneer", "Dal Makhani", "Butter Naan"]
    }
  }
];