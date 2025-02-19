export const products = [
  // Electronics
  {
    id: "E1",
    category: "Electronics",
    name: "iPhone 14 Pro",
    price: 129900,
    reviews: 4,
    quantity: 10,
    image: "/images/iPhone 14 Pro.jpg", // This is the important part
    description: "The latest iPhone with advanced camera system and powerful A16 Bionic chip.",
  },
  {
    id: "E2",
    category: "Electronics",
    name: "Samsung Galaxy S23",
    price: 74999,
    reviews: 4,
    quantity: 15,
    image: "/images/s23.jpg", // Remove "/public" from the path
    description: "Featuring a pro-grade camera and long-lasting battery life.",
  },
  {
    id: "E3",
    category: "Electronics",
    name: "Sony WH-1000XM5",
    price: 29990,
    reviews: 5,
    quantity: 20,
    image: "/images/sony wh-1000xm5.jpg",
    description: "Industry-leading noise cancellation for immersive sound.",
  },
  {
    id: "E4",
    category: "Electronics",
    name: "MacBook Air M2",
    price: 114900,
    reviews: 5,
    quantity: 8,
    image: "/images/macbook air m2.jpg",
    description: "Thin, light, and powerful laptop with the M2 chip.",
  },
  {
    id: "E5",
    category: "Electronics",
    name: "Dell XPS 15",
    price: 150000,
    reviews: 4,
    quantity: 5,
    image: "/images/dell xps 15.jpg",
    description: "High-performance laptop with stunning display and powerful processor.",
  },

  // Groceries
  {
    id: "G1",
    category: "Groceries",
    name: "Basmati Rice",
    price: 1200,
    reviews: 4,
    quantity: 50,
    image: "/images/Basmati Rice.jpg",
    description: "Premium quality basmati rice for your daily meals.",
  },
  {
    id: "G2",
    category: "Groceries",
    name: "Organic Turmeric",
    price: 500,
    reviews: 5,
    quantity: 100,
    image: "/images/Organic Turmeric.jpg",
    description: "100% organic turmeric powder for your health and well-being.",
  },
  {
    id: "G3",
    category: "Groceries",
    name: "Cold Pressed Mustard Oil",
    price: 300,
    reviews: 4,
    quantity: 75,
    image: "/images/Cold Pressed Mustard Oil.jpg",
    description: "Healthy and flavorful cold-pressed mustard oil.",
  },
  {
    id: "G4",
    category: "Groceries",
    name: "Whole Wheat Atta",
    price: 250,
    reviews: 4,
    quantity: 80,
    image: "/images/Whole Wheat Atta.jpg",
    description: "100% whole wheat atta for your roti and chapati.",
  },
  {
    id: "G5",
    category: "Groceries",
    name: "Himalayan Pink Salt",
    price: 150,
    reviews: 5,
    quantity: 120,
    image: "/images/Himalayan Pink Salt.jpg",
    description: "Pure and unrefined Himalayan pink salt.",
  },

  // Home Appliances
  {
    id: "H1",
    category: "Home Appliances",
    name: "LG Smart TV",
    price: 55000,
    reviews: 4,
    quantity: 10,
    image: "/images/LG Smart TV.jpg",
    description: "Enjoy your favorite shows and movies on this smart TV.",
  },
  {
    id: "H2",
    category: "Home Appliances",
    name: "Dyson Vacuum Cleaner",
    price: 40000,
    reviews: 5,
    quantity: 15,
    image: "/images/Dyson Vacuum Cleaner.jpg",
    description: "Powerful and efficient vacuum cleaner for a spotless home.",
  },
  {
    id: "H3",
    category: "Home Appliances",
    name: "Philips Air Fryer",
    price: 15000,
    reviews: 4,
    quantity: 20,
    image: "/images/Philips Air Fryer.jpg",
    description: "Healthy and delicious air frying with this Philips air fryer.",
  },
  {
    id: "H4",
    category: "Home Appliances",
    name: "Bosch Washing Machine",
    price: 35000,
    reviews: 4,
    quantity: 12,
    image: "/images/Bosch Washing Machine.jpg",
    description: "Reliable and efficient washing machine from Bosch.",
  },
  {
    id: "H5",
    category: "Home Appliances",
    name: "Prestige Induction Cooktop",
    price: 3000,
    reviews: 4,
    quantity: 30,
    image: "/images/Prestige Induction Cooktop.jpg",
    description: "Convenient and energy-efficient induction cooktop.",
  },

  // Fashion
  {
    id: "F1",
    category: "Fashion",
    name: "Nike Running Shoes",
    price: 7500,
    reviews: 5,
    quantity: 25,
    image: "/images/Nike Running Shoes.jpg",
    description: "Comfortable and stylish running shoes from Nike.",
  },
  {
    id: "F2",
    category: "Fashion",
    name: "Levis Jeans",
    price: 3500,
    reviews: 4,
    quantity: 40,
    image: "/images/Levis Jeans.jpg",
    description: "Classic and durable Levi's jeans.",
  },
  {
    id: "F3",
    category: "Fashion",
    name: "Ray Ban Sunglasses",
    price: 6000,
    reviews: 5,
    quantity: 20,
    image: "/images/Ray Ban Sunglasses.jpg",
    description: "Stylish and protective Ray-Ban sunglasses.",
  },
  {
    id: "F4",
    category: "Fashion",
    name: "Titan Watch",
    price: 9000,
    reviews: 4,
    quantity: 15,
    image: "/images/Titan Watch.jpg",
    description: "Classic and elegant Titan watch.",
  },
  {
    id: "F5",
    category: "Fashion",
    name: "Adidas Hoodie",
    price: 4500,
    reviews: 4,
    quantity: 30,
    image: "/images/adidas hoodie.jpg",
    description: "Comfortable and stylish Adidas hoodie.",
  },

  // Books
  {
    id: "B1",
    category: "Books",
    name: "The Alchemist",
    price: 400,
    reviews: 5,
    quantity: 50,
    image: "/images/alchemist.jpg",
    description: "A timeless classic about following your dreams.",
  },
  {
    id: "B2",
    category: "Books",
    name: "Atomic Habits",
    price: 500,
    reviews: 5,
    quantity: 45,
    image: "/images/atomic.jpg",
    description: "Learn how to build good habits and break bad ones.",
  },
  {
    id: "B3",
    category: "Books",
    name: "Rich Dad Poor Dad",
    price: 450,
    reviews: 4,
    quantity: 40,
    image: "/images/rich.jpg",
    description: "A classic guide to financial literacy.",
  },
  {
    id: "B4",
    category: "Books",
    name: "Sapiens",
    price: 700,
    reviews: 5,
    quantity: 35,
    image: "/images/sapien.jpg",
    description: "A sweeping history of humankind.",
  },
  {
    id: "B5",
    category: "Books",
    name: "The Psychology of Money",
    price: 550,
    reviews: 4,
    quantity: 38,
    image: "/images/psychology.jpg",
    description: "A practical guide to understanding money and behavior.",
  },
] as const

export const categories = ["Electronics", "Groceries", "Home Appliances", "Fashion", "Books"] as const

