export const aiRules = [
  {
    condition: (data: any) => data.type === 'wedding' && data.budget === 'high',
    recommendation: {
      package: "Royal Wedding Feast",
      reason: "For a grand wedding with a high budget, we recommend our signature Royal Feast with live counters and premium presentation.",
      highlights: ["Welcome Drinks with Dry Ice", "7-Course Sit-down Dinner", "Live Tandoor & Pasta", "Designer Dessert Bar"]
    }
  },
  {
    condition: (data: any) => data.type === 'wedding' && data.budget === 'standard',
    recommendation: {
      package: "Classic Wedding Buffet",
      reason: "A perfect balance of luxury and value, featuring crowd-favorite dishes.",
      highlights: ["Standard Welcome Drinks", "Buffet Setup", "Live Chaat Counter", "Traditional Sweets"]
    }
  },
  {
    condition: (data: any) => data.type === 'corporate',
    recommendation: {
      package: "Executive Corporate Lunch",
      reason: "Professional, efficient, and impressive. Perfect for business networking.",
      highlights: ["Gourmet Boxed Meals", "Coffee & Tea Station", "Finger Foods", "Light Desserts"]
    }
  },
  {
    condition: (data: any) => data.type === 'birthday',
    recommendation: {
      package: "Fun & Fiesta Party",
      reason: "Designed for fun! Kid-friendly options with live interactive stations.",
      highlights: ["Mini Burgers & Fries", "Live Pasta Station", "Chocolate Fountain", "Mocktail Bar"]
    }
  },
  {
    condition: (data: any) => true, // Fallback
    recommendation: {
      package: "Signature Celebration Mix",
      reason: "Our most versatile package suitable for any joyful gathering.",
      highlights: ["Mix of Indian & Continental", "Live Dosa Counter", "Assorted Breads", "Ice Cream Parlor"]
    }
  }
];