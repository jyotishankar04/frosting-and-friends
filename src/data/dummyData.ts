// Dummy data for the entire application

export const cakes = [
  {
    id: 1,
    name: "Classic Chocolate Cake",
    category: "Birthday",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Rich chocolate sponge with creamy chocolate buttercream",
    tags: ["Chocolate", "Popular"],
    rating: 4.8,
    reviews: 124,
    deliveryTime: "2-3 hours",
    featured: true,
    bestseller: true,
    inStock: true
  },
  {
    id: 2,
    name: "Strawberry Delight",
    category: "Birthday",
    price: 52.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Fresh strawberry cake with whipped cream and strawberry compote",
    tags: ["Fruit", "Fresh"],
    rating: 4.9,
    reviews: 89,
    deliveryTime: "3-4 hours",
    featured: true,
    bestseller: false,
    inStock: true
  },
  {
    id: 3,
    name: "Vanilla Wedding Cake",
    category: "Wedding",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Elegant 3-tier vanilla cake with buttercream roses",
    tags: ["Wedding", "Elegant", "Custom"],
    rating: 5.0,
    reviews: 67,
    deliveryTime: "24-48 hours",
    featured: false,
    bestseller: false,
    inStock: true
  },
  {
    id: 4,
    name: "Red Velvet Supreme",
    category: "Special",
    price: 48.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Classic red velvet with cream cheese frosting",
    tags: ["Red Velvet", "Classic"],
    rating: 4.7,
    reviews: 156,
    deliveryTime: "2-3 hours",
    featured: true,
    bestseller: true,
    inStock: true
  },
  {
    id: 5,
    name: "Eggless Chocolate Fudge",
    category: "Eggless",
    price: 42.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Rich eggless chocolate cake with fudge frosting",
    tags: ["Eggless", "Chocolate", "Vegan-Friendly"],
    rating: 4.6,
    reviews: 91,
    deliveryTime: "2-3 hours",
    featured: false,
    bestseller: false,
    inStock: false
  }
];

export const reviews = [
  {
    id: 1,
    userName: "Sarah Johnson",
    userAvatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "Absolutely amazing! The chocolate cake was perfect for my daughter's birthday. Will definitely order again!",
    cakeId: 1,
    date: "2024-01-15",
    images: ["/placeholder.svg?height=200&width=200"]
  },
  {
    id: 2,
    userName: "Mike Chen",
    userAvatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "Best strawberry cake in town! Fresh ingredients and beautiful presentation.",
    cakeId: 2,
    date: "2024-01-12",
    images: []
  },
  {
    id: 3,
    userName: "Emily Rodriguez",
    userAvatar: "/placeholder.svg?height=60&width=60",
    rating: 4,
    comment: "Great service and delicious cake. The delivery was right on time.",
    cakeId: 4,
    date: "2024-01-10",
    images: ["/placeholder.svg?height=200&width=200"]
  }
];

export const orders = [
  {
    id: "ORD-001",
    customerName: "John Smith",
    customerPhone: "+1-555-0123",
    customerAddress: "123 Main St, City, State 12345",
    items: [
      { cakeId: 1, quantity: 1, customMessage: "Happy Birthday Emma!" }
    ],
    total: 45.99,
    status: "Delivered",
    paymentStatus: "Paid",
    orderDate: "2024-01-15",
    deliveryDate: "2024-01-15",
    deliveryTime: "3:00 PM"
  },
  {
    id: "ORD-002",
    customerName: "Lisa Davis",
    customerPhone: "+1-555-0124",
    customerAddress: "456 Oak Ave, City, State 12345",
    items: [
      { cakeId: 2, quantity: 1, customMessage: "Congratulations!" }
    ],
    total: 52.99,
    status: "Preparing",
    paymentStatus: "Paid",
    orderDate: "2024-01-16",
    deliveryDate: "2024-01-16",
    deliveryTime: "5:00 PM"
  }
];

export const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "+1-555-0123",
    address: "123 Main St, City, State 12345",
    role: "customer",
    verified: true,
    joinDate: "2023-12-01",
    totalOrders: 5,
    totalSpent: 245.99
  },
  {
    id: 2,
    name: "Admin User",
    email: "admin@antonio.com",
    phone: "+1-555-0100",
    address: "Antonio Bakery HQ",
    role: "admin",
    verified: true,
    joinDate: "2023-01-01",
    totalOrders: 0,
    totalSpent: 0
  }
];

export const coupons = [
  {
    id: 1,
    code: "WELCOME20",
    type: "percentage",
    value: 20,
    minOrder: 50,
    maxDiscount: 15,
    expiry: "2024-12-31",
    active: true,
    usageCount: 45,
    maxUsage: 100
  },
  {
    id: 2,
    code: "FLAT10",
    type: "flat",
    value: 10,
    minOrder: 30,
    maxDiscount: 10,
    expiry: "2024-06-30",
    active: true,
    usageCount: 23,
    maxUsage: 50
  }
];

export const analytics = {
  dailyOrders: [
    { date: "2024-01-10", orders: 12, revenue: 540.50 },
    { date: "2024-01-11", orders: 15, revenue: 672.30 },
    { date: "2024-01-12", orders: 18, revenue: 845.20 },
    { date: "2024-01-13", orders: 14, revenue: 621.80 },
    { date: "2024-01-14", orders: 20, revenue: 890.40 },
    { date: "2024-01-15", orders: 22, revenue: 1024.60 },
    { date: "2024-01-16", orders: 16, revenue: 758.90 }
  ],
  topSellingCakes: [
    { name: "Classic Chocolate Cake", sales: 45 },
    { name: "Red Velvet Supreme", sales: 38 },
    { name: "Strawberry Delight", sales: 32 }
  ],
  totalStats: {
    totalOrders: 156,
    totalRevenue: 7420.50,
    pendingOrders: 8,
    totalCustomers: 89
  }
};

export const socialPosts = [
  {
    id: 1,
    platform: "instagram",
    content: "Fresh strawberry cake made with love! 🍓✨",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    date: "2024-01-15"
  },
  {
    id: 2,
    platform: "instagram", 
    content: "Behind the scenes: Creating our signature chocolate ganache 🍫",
    image: "/placeholder.svg?height=400&width=400",
    likes: 189,
    date: "2024-01-14"
  },
  {
    id: 3,
    platform: "twitter",
    content: "New flavor alert! Introducing our Salted Caramel Delight 🧂🍯",
    image: "/placeholder.svg?height=400&width=400",
    likes: 67,
    date: "2024-01-13"
  }
];

export const customRequests = [
  {
    id: 1,
    customerName: "Alice Brown",
    customerPhone: "+1-555-0125",
    description: "3-tier unicorn themed cake for 5-year-old",
    referenceImage: "/placeholder.svg?height=300&width=300",
    budgetRange: "$150-200",
    eventDate: "2024-02-01",
    status: "pending",
    adminNotes: "",
    quotedPrice: null,
    submittedDate: "2024-01-16"
  },
  {
    id: 2,
    customerName: "Robert Wilson",
    customerPhone: "+1-555-0126",
    description: "Corporate logo cake for company anniversary",
    referenceImage: "/placeholder.svg?height=300&width=300",
    budgetRange: "$100-150",
    eventDate: "2024-02-10",
    status: "quoted",
    adminNotes: "Logo design approved, proceeding with order",
    quotedPrice: 125.00,
    submittedDate: "2024-01-14"
  }
];