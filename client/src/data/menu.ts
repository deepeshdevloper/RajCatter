export const menuData = {
  royal: {
    label: "Royal Indian",
    description: "A majestic spread of authentic Indian delicacies fit for kings.",
    items: [
      { id: "ri1", name: "Shahi Paneer", description: "Cottage cheese in rich cashew & tomato gravy", veg: true, allergens: ["Dairy", "Nuts"], price: 350, image: "/assets/food/shahi-paneer.jpg" },
      { id: "ri2", name: "Paneer Lababdar", description: "Cottage cheese in a creamy, spicy tomato sauce", veg: true, allergens: ["Dairy"], price: 360, image: "/assets/food/paneer-lababdar.jpg" },
      { id: "ri3", name: "Malai Kofta", description: "Fried potato and paneer balls in creamy white gravy", veg: true, allergens: ["Dairy", "Nuts", "Gluten"], price: 380, image: "/assets/food/malai-kofta.jpg" },
      { id: "ri4", name: "Dal Makhani", description: "Slow-cooked black lentils with butter and cream", veg: true, allergens: ["Dairy"], price: 300, image: "/assets/food/dal-makhani.jpg" },
      { id: "ri5", name: "Dal Tadka", description: "Yellow lentils tempered with ghee and spices", veg: true, allergens: [], price: 250, image: "/assets/food/dal-tadka.jpg" },
      { id: "ri6", name: "Jeera Rice", description: "Basmati rice flavored with cumin seeds", veg: true, allergens: [], price: 180, image: "/assets/food/jeera-rice.jpg" },
      { id: "ri7", name: "Veg Pulao", description: "Aromatic rice cooked with mixed vegetables", veg: true, allergens: [], price: 220, image: "/assets/food/veg-pulao.jpg" },
      { id: "ri8", name: "Hyderabadi Biryani", description: "Spicy and fragrant rice dish with vegetables", veg: true, allergens: ["Dairy"], price: 350, image: "/assets/food/biryani.jpg" },
      { id: "ri9", name: "Butter Naan", description: "Soft Indian bread topped with butter", veg: true, allergens: ["Gluten", "Dairy"], price: 60, image: "/assets/food/butter-naan.jpg" },
      { id: "ri10", name: "Missi Roti", description: "Spiced gram flour bread", veg: true, allergens: ["Gluten"], price: 50, image: "/assets/food/missi-roti.jpg" },
      { id: "ri11", name: "Stuffed Kulcha", description: "Leavened bread stuffed with spicy potatoes", veg: true, allergens: ["Gluten", "Dairy"], price: 80, image: "/assets/food/kulcha.jpg" }
    ]
  },
  mughlai: {
    label: "Mughlai Special",
    description: "Rich and aromatic dishes from the royal Mughal kitchens.",
    items: [
      { id: "ms1", name: "Mutton Rogan Josh", description: "Tender mutton cooked in aromatic Kashmiri spices", veg: false, allergens: [], price: 550, image: "/assets/food/rogan-josh.jpg" },
      { id: "ms2", name: "Chicken Korma", description: "Chicken simmered in a creamy yogurt and nut sauce", veg: false, allergens: ["Dairy", "Nuts"], price: 450, image: "/assets/food/chicken-korma.jpg" },
      { id: "ms3", name: "Galouti Kebab", description: "Melt-in-mouth minced meat kebabs", veg: false, allergens: [], price: 480, image: "/assets/food/galouti.jpg" },
      { id: "ms4", name: "Seekh Kebab", description: "Minced meat skewers grilled in tandoor", veg: false, allergens: [], price: 420, image: "/assets/food/seekh.jpg" },
      { id: "ms5", name: "Chicken Tikka Masala", description: "Roasted chicken chunks in spicy sauce", veg: false, allergens: ["Dairy"], price: 460, image: "/assets/food/tikka-masala.jpg" },
      { id: "ms6", name: "Mutton Biryani", description: "Layered rice and meat dish with saffron", veg: false, allergens: ["Dairy"], price: 500, image: "/assets/food/mutton-biryani.jpg" },
      { id: "ms7", name: "Nargisi Kofta", description: "Boiled eggs wrapped in minced meat and fried", veg: false, allergens: ["Egg"], price: 400, image: "/assets/food/nargisi.jpg" },
      { id: "ms8", name: "Nalli Nihari", description: "Slow-cooked mutton shank stew", veg: false, allergens: [], price: 600, image: "/assets/food/nihari.jpg" }
    ]
  },
  continental: {
    label: "Continental",
    description: "Classic European flavors for a sophisticated palate.",
    items: [
      { id: "cn1", name: "Alfredo Pasta", description: "Pasta in creamy white cheese sauce", veg: true, allergens: ["Gluten", "Dairy"], price: 350, image: "/assets/food/alfredo.jpg" },
      { id: "cn2", name: "Arrabbiata Pasta", description: "Pasta in spicy tomato garlic sauce", veg: true, allergens: ["Gluten"], price: 320, image: "/assets/food/arrabbiata.jpg" },
      { id: "cn3", name: "Garlic Bread", description: "Toasted bread with garlic butter and herbs", veg: true, allergens: ["Gluten", "Dairy"], price: 150, image: "/assets/food/garlic-bread.jpg" },
      { id: "cn4", name: "Russian Salad", description: "Diced vegetables and fruits in mayonnaise", veg: true, allergens: ["Egg"], price: 200, image: "/assets/food/russian-salad.jpg" },
      { id: "cn5", name: "Waldorf Salad", description: "Apples, celery, walnuts, and grapes in mayo", veg: true, allergens: ["Nuts", "Egg"], price: 250, image: "/assets/food/waldorf.jpg" },
      { id: "cn6", name: "Baked Corn & Spinach", description: "Creamy spinach and corn baked with cheese", veg: true, allergens: ["Dairy"], price: 300, image: "/assets/food/baked-corn.jpg" },
      { id: "cn7", name: "Lasagna", description: "Layered pasta with sauce, cheese, and vegetables", veg: true, allergens: ["Gluten", "Dairy"], price: 400, image: "/assets/food/lasagna.jpg" }
    ]
  },
  south: {
    label: "South Indian",
    description: "Authentic flavors from the southern states of India.",
    items: [
      { id: "si1", name: "Masala Dosa", description: "Crispy rice crepe filled with spiced potatoes", veg: true, allergens: [], price: 150, image: "/assets/food/dosa.jpg" },
      { id: "si2", name: "Idli Sambar", description: "Steamed rice cakes with lentil stew", veg: true, allergens: [], price: 120, image: "/assets/food/idli.jpg" },
      { id: "si3", name: "Medu Vada", description: "Crispy lentil donuts", veg: true, allergens: [], price: 140, image: "/assets/food/vada.jpg" },
      { id: "si4", name: "Uttapam", description: "Thick rice pancake with vegetable toppings", veg: true, allergens: [], price: 160, image: "/assets/food/uttapam.jpg" },
      { id: "si5", name: "Pongal", description: "Savory rice and lentil porridge", veg: true, allergens: ["Dairy", "Nuts"], price: 180, image: "/assets/food/pongal.jpg" }
    ]
  },
  snacks: {
    label: "Snacks & Chaat",
    description: "Irresistible street food and appetizers.",
    items: [
      { id: "sn1", name: "Paneer Tikka", description: "Marinated cottage cheese grilled in tandoor", veg: true, allergens: ["Dairy"], price: 280, image: "/assets/food/paneer-tikka.jpg" },
      { id: "sn2", name: "Hara Bhara Kebab", description: "Spinach and green pea patties", veg: true, allergens: [], price: 240, image: "/assets/food/hara-bhara.jpg" },
      { id: "sn3", name: "Spring Rolls", description: "Crispy fried rolls with vegetable filling", veg: true, allergens: ["Gluten"], price: 220, image: "/assets/food/spring-rolls.jpg" },
      { id: "sn4", name: "Dahi Bhalla", description: "Lentil dumplings in yogurt with chutneys", veg: true, allergens: ["Dairy"], price: 150, image: "/assets/food/dahi-bhalla.jpg" },
      { id: "sn5", name: "Papdi Chaat", description: "Crispy wafers with potatoes, yogurt, and chutneys", veg: true, allergens: ["Gluten", "Dairy"], price: 140, image: "/assets/food/papdi-chaat.jpg" },
      { id: "sn6", name: "Pani Puri", description: "Hollow balls filled with spicy water", veg: true, allergens: ["Gluten"], price: 100, image: "/assets/food/pani-puri.jpg" }
    ]
  },
  live: {
    label: "Live Counters",
    description: "Interactive food stations prepared fresh before your eyes.",
    items: [
      { id: "lc1", name: "Live Dosa Station", description: "Hot dosas with variety of fillings", veg: true, allergens: [], price: 5000, image: "/assets/food/live-dosa.jpg" },
      { id: "lc2", name: "Live Pasta Station", description: "Pasta tossed in sauce of your choice", veg: true, allergens: ["Gluten", "Dairy"], price: 6000, image: "/assets/food/live-pasta.jpg" },
      { id: "lc3", name: "Live Chaat Counter", description: "Assorted fresh chaat items", veg: true, allergens: ["Dairy", "Gluten"], price: 5500, image: "/assets/food/live-chaat.jpg" },
      { id: "lc4", name: "Tandoor Live", description: "Fresh breads and kebabs from clay oven", veg: true, allergens: ["Gluten"], price: 7000, image: "/assets/food/live-tandoor.jpg" },
      { id: "lc5", name: "Jalebi Live", description: "Hot, crispy, syrupy spirals", veg: true, allergens: ["Gluten", "Dairy"], price: 4500, image: "/assets/food/live-jalebi.jpg" }
    ]
  },
  dessert: {
    label: "Desserts",
    description: "Sweet endings to a perfect meal.",
    items: [
      { id: "ds1", name: "Gulab Jamun", description: "Deep-fried milk solids in sugar syrup", veg: true, allergens: ["Dairy", "Gluten"], price: 120, image: "/assets/food/gulab-jamun.jpg" },
      { id: "ds2", name: "Rasmalai", description: "Cottage cheese patties in thickened milk", veg: true, allergens: ["Dairy", "Nuts"], price: 140, image: "/assets/food/rasmalai.jpg" },
      { id: "ds3", name: "Gajar Ka Halwa", description: "Carrot pudding with nuts", veg: true, allergens: ["Dairy", "Nuts"], price: 150, image: "/assets/food/gajar-halwa.jpg" },
      { id: "ds4", name: "Moong Dal Halwa", description: "Rich lentil sweet dish", veg: true, allergens: ["Dairy", "Nuts"], price: 160, image: "/assets/food/moong-dal.jpg" },
      { id: "ds5", name: "Ice Cream Counter", description: "Variety of ice cream flavors", veg: true, allergens: ["Dairy"], price: 100, image: "/assets/food/ice-cream.jpg" },
      { id: "ds6", name: "Brownie with Ice Cream", description: "Warm brownie with cold vanilla scoop", veg: true, allergens: ["Dairy", "Gluten", "Egg"], price: 180, image: "/assets/food/brownie.jpg" }
    ]
  }
};