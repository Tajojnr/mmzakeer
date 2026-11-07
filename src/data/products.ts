// ============================================
// M.M ZAKEER COMPUTER (00010) — Product Data
// Images: /public/images/products/*
// ============================================

export interface Product {
  id: string;
  name: string;
  category: string;
  brand?: string;
  price: number;
  specs: string[];
  image: string;
  condition: 'Brand New' | 'UK Used';
  isHot?: boolean;
  originalPrice?: number;
}

export interface CalculatorItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

// ============================================
// LAPTOPS (matched to your actual PNGs)
// ============================================

export const laptops: Product[] = [
  // --- Apple ---
  {
    id: 'l-mba-m1',
    name: 'MacBook Air M1',
    category: 'Apple',
    brand: 'Apple',
    price: 650000,
    specs: ['Apple M1 Chip', '8GB Unified Memory', '256GB SSD', '13.3" Retina', 'Fanless Design'],
    image: '/images/products/macbook-air-m1.png',
    condition: 'UK Used',
    isHot: true,
  },
  {
    id: 'l-mba-m2',
    name: 'MacBook Air M2',
    category: 'Apple',
    brand: 'Apple',
    price: 950000,
    specs: ['Apple M2 Chip', '8GB Unified Memory', '256GB SSD', '13.6" Liquid Retina', 'MagSafe 3'],
    image: '/images/products/macbook-air-m2.png',
    condition: 'Brand New',
    isHot: true,
  },
  {
    id: 'l-mbp-m1',
    name: 'MacBook Pro M1',
    category: 'Apple',
    brand: 'Apple',
    price: 780000,
    specs: ['Apple M1 Chip', '16GB Unified Memory', '512GB SSD', '13.3" Retina', 'Touch Bar'],
    image: '/images/products/macbook-pro-m1.png',
    condition: 'UK Used',
  },

  // --- Dell ---
  {
    id: 'l-xps15',
    name: 'Dell XPS 15',
    category: 'Dell',
    brand: 'Dell',
    price: 1850000,
    specs: ['Intel Core i9', '32GB RAM', '1TB NVMe SSD', 'RTX Graphics', '15.6" OLED'],
    image: '/images/products/dell-xps-15.png',
    condition: 'Brand New',
    isHot: true,
  },
  {
    id: 'l-inspiron15',
    name: 'Dell Inspiron 15',
    category: 'Dell',
    brand: 'Dell',
    price: 350000,
    specs: ['Intel Core i3/i5', '8GB RAM', '256GB SSD', '15.6" FHD', 'Windows 11'],
    image: '/images/products/dell-inspiron-15.png',
    condition: 'Brand New',
  },
  {
    id: 'l-precision',
    name: 'Dell Precision 5540 Workstation',
    category: 'Dell',
    brand: 'Dell',
    price: 650000,
    specs: ['Intel Core i7', '32GB RAM', '512GB SSD', 'Quadro GPU', '15.6" FHD'],
    image: '/images/products/dell-precision-5540.png',
    condition: 'UK Used',
  },

  // --- HP ---
  {
    id: 'l-spectre',
    name: 'HP Spectre x360 14',
    category: 'HP',
    brand: 'HP',
    price: 1200000,
    specs: ['Intel Core i7', '16GB RAM', '1TB SSD', '13.5" OLED Touch', '2-in-1 Convertible'],
    image: '/images/products/hp-spectre-x360-14.png',
    condition: 'Brand New',
  },
  {
    id: 'l-elitebook',
    name: 'HP EliteBook 840 G6',
    category: 'HP',
    brand: 'HP',
    price: 280000,
    specs: ['Intel Core i5 8th Gen', '16GB RAM', '256GB SSD', '14" FHD', 'Backlit Keyboard'],
    image: '/images/products/hp-elitebook-840-g6.png',
    condition: 'UK Used',
    isHot: true,
  },
  {
    id: 'l-probook',
    name: 'HP ProBook 450 G8',
    category: 'HP',
    brand: 'HP',
    price: 420000,
    specs: ['Intel Core i5 11th Gen', '8GB RAM', '256GB SSD', '15.6" Display', 'Business Grade'],
    image: '/images/products/hp-probook-450-g8.png',
    condition: 'UK Used',
  },
  {
    id: 'l-omen',
    name: 'HP Omen 16',
    category: 'HP',
    brand: 'HP',
    price: 1550000,
    specs: ['AMD Ryzen 7', '16GB RAM', '1TB NVMe', 'RTX 3060', '16.1" 144Hz'],
    image: '/images/products/hp-omen-16.png',
    condition: 'Brand New',
  },

  // --- Lenovo ---
  {
    id: 'l-x1',
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'Lenovo',
    brand: 'Lenovo',
    price: 750000,
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', '14" WUXGA', 'Fingerprint Reader'],
    image: '/images/products/lenovo-x1-carbon.png',
    condition: 'UK Used',
    isHot: true,
  },
  {
    id: 'l-x1b',
    name: 'ThinkPad X1 Carbon (Alt)',
    category: 'Lenovo',
    brand: 'Lenovo',
    price: 720000,
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', 'Ultra-light Business', 'Legendary Keyboard'],
    image: '/images/products/thinkpad-x1.png',
    condition: 'UK Used',
  },
  {
    id: 'l-t490',
    name: 'Lenovo ThinkPad T490',
    category: 'Lenovo',
    brand: 'Lenovo',
    price: 260000,
    specs: ['Intel Core i5 8th Gen', '8GB RAM', '256GB SSD', '14" FHD', 'Thunderbolt 3'],
    image: '/images/products/lenovo-thinkpad-t490.png',
    condition: 'UK Used',
  },
  {
    id: 'l-ideapad',
    name: 'Lenovo IdeaPad',
    category: 'Lenovo',
    brand: 'Lenovo',
    price: 520000,
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', '15.6" FHD', 'Everyday Performance'],
    image: '/images/products/lenovo-ideapad.png',
    condition: 'Brand New',
  },
  {
    id: 'l-legion',
    name: 'Lenovo Legion 5 Pro',
    category: 'Lenovo',
    brand: 'Lenovo',
    price: 1400000,
    specs: ['AMD Ryzen 7', '16GB RAM', '1TB SSD', 'RTX 3070', '16" High Refresh'],
    image: '/images/products/legion-5-pro.png',
    condition: 'Brand New',
    isHot: true,
  },

  // --- ASUS ---
  {
    id: 'l-zephyrus',
    name: 'ASUS ROG Zephyrus G14',
    category: 'ASUS',
    brand: 'ASUS',
    price: 1450000,
    specs: ['AMD Ryzen 9', '16GB RAM', '1TB SSD', 'RTX 4060', '14" QHD 165Hz'],
    image: '/images/products/asus-rog-zephyrus.png',
    condition: 'Brand New',
    isHot: true,
  },
  {
    id: 'l-zenbook',
    name: 'ASUS ZenBook 14X OLED',
    category: 'ASUS',
    brand: 'ASUS',
    price: 950000,
    specs: ['Intel Core i7', '16GB RAM', '1TB SSD', '14.5" OLED', 'Ultra Portable'],
    image: '/images/products/asus-zenbook-14x.png',
    condition: 'Brand New',
  },
  {
    id: 'l-strix',
    name: 'ASUS ROG Strix',
    category: 'ASUS',
    brand: 'ASUS',
    price: 1350000,
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', 'RTX Graphics', 'RGB Gaming'],
    image: '/images/products/rog-strix.png',
    condition: 'Brand New',
  },
  {
    id: 'l-tuf',
    name: 'ASUS TUF F15',
    category: 'ASUS',
    brand: 'ASUS',
    price: 980000,
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', 'RTX Graphics', '15.6" 144Hz'],
    image: '/images/products/tuf-f15.png',
    condition: 'Brand New',
  },

  // --- Acer ---
  {
    id: 'l-swift',
    name: 'Acer Swift 3',
    category: 'Acer',
    brand: 'Acer',
    price: 450000,
    specs: ['AMD Ryzen 7', '8GB RAM', '512GB SSD', '14" FHD IPS', 'All-Metal Body'],
    image: '/images/products/acer-swift-3.png',
    condition: 'Brand New',
  },
  {
    id: 'l-aspire',
    name: 'Acer Aspire 5',
    category: 'Acer',
    brand: 'Acer',
    price: 390000,
    specs: ['Intel Core i5', '8GB RAM', '512GB SSD', '15.6" FHD', 'Wi-Fi 6'],
    image: '/images/products/acer-aspire-5.png',
    condition: 'Brand New',
  },
  {
    id: 'l-helios',
    name: 'Acer Predator Helios 300',
    category: 'Acer',
    brand: 'Acer',
    price: 1350000,
    specs: ['Intel Core i7', '16GB RAM', '1TB SSD', 'RTX 3070 Ti', '15.6" QHD 165Hz'],
    image: '/images/products/acer-predator-helios.png',
    condition: 'Brand New',
  },
  {
    id: 'l-helios2',
    name: 'Acer Helios 300 (Bundle View)',
    category: 'Acer',
    brand: 'Acer',
    price: 1300000,
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', 'RTX Gaming GPU', 'High Refresh Display'],
    image: '/images/products/helios-300.png',
    condition: 'Brand New',
  },

  // --- Toshiba ---
  {
    id: 'l-tecra',
    name: 'Toshiba Tecra A50-E',
    category: 'Toshiba',
    brand: 'Toshiba',
    price: 210000,
    specs: ['Intel Core i5 8th Gen', '8GB RAM', '256GB SSD', '15.6" HD', 'DVD-RW'],
    image: '/images/products/toshiba-tecra-a50.png',
    condition: 'UK Used',
  },
  {
    id: 'l-portege',
    name: 'Toshiba Dynabook Portégé X30',
    category: 'Toshiba',
    brand: 'Toshiba',
    price: 280000,
    specs: ['Intel Core i7 8th Gen', '16GB RAM', '256GB SSD', '13.3" FHD Touch', 'Ultra-light'],
    image: '/images/products/toshiba-portege-x30.png',
    condition: 'UK Used',
  },
];

// ============================================
// SMARTPHONES (matched to your actual PNGs)
// ============================================

export const smartphones: Product[] = [
  // iPhone
  {
    id: 's-11',
    name: 'iPhone 11',
    category: 'Apple',
    brand: 'Apple',
    price: 280000,
    specs: ['A13 Bionic', '64/128GB', 'Dual Camera', 'Liquid Retina LCD'],
    image: '/images/products/iphone-11.png',
    condition: 'UK Used',
  },
  {
    id: 's-11pm',
    name: 'iPhone 11 Pro Max',
    category: 'Apple',
    brand: 'Apple',
    price: 420000,
    specs: ['A13 Bionic', '64/256GB', 'Triple Camera', 'Super Retina XDR'],
    image: '/images/products/iphone-11-promax.png',
    condition: 'UK Used',
  },
  {
    id: 's-12p',
    name: 'iPhone 12 Pro',
    category: 'Apple',
    brand: 'Apple',
    price: 520000,
    specs: ['A14 Bionic', '128GB', 'Triple Camera', 'Ceramic Shield'],
    image: '/images/products/iphone-12-pro.png',
    condition: 'UK Used',
  },
  {
    id: 's-12pm',
    name: 'iPhone 12 Pro Max',
    category: 'Apple',
    brand: 'Apple',
    price: 580000,
    specs: ['A14 Bionic', '128/256GB', 'Triple Camera', '6.7" Super Retina'],
    image: '/images/products/iphone-12-promax.png',
    condition: 'UK Used',
  },
  {
    id: 's-13p',
    name: 'iPhone 13 Pro',
    category: 'Apple',
    brand: 'Apple',
    price: 780000,
    specs: ['A15 Bionic', '128GB', 'ProMotion 120Hz', 'Triple Camera'],
    image: '/images/products/iphone-13-pro.png',
    condition: 'UK Used',
    isHot: true,
  },
  {
    id: 's-13pm',
    name: 'iPhone 13 Pro Max',
    category: 'Apple',
    brand: 'Apple',
    price: 850000,
    specs: ['A15 Bionic', '128/256GB', 'ProMotion 120Hz', '6.7" Display'],
    image: '/images/products/iphone-13-promax.png',
    condition: 'UK Used',
  },
  {
    id: 's-14p',
    name: 'iPhone 14 Pro',
    category: 'Apple',
    brand: 'Apple',
    price: 1050000,
    specs: ['A16 Bionic', '128/256GB', 'Dynamic Island', '48MP Main Camera'],
    image: '/images/products/iphone-14-pro.png',
    condition: 'Brand New',
  },
  {
    id: 's-14pm',
    name: 'iPhone 14 Pro Max',
    category: 'Apple',
    brand: 'Apple',
    price: 1150000,
    specs: ['A16 Bionic', '128/256GB', 'Dynamic Island', '6.7" Super Retina'],
    image: '/images/products/iphone-14-promax.png',
    condition: 'Brand New',
  },
  {
    id: 's-15p',
    name: 'iPhone 15 Pro',
    category: 'Apple',
    brand: 'Apple',
    price: 1450000,
    specs: ['A17 Pro', '128/256GB', 'Titanium', '48MP Camera'],
    image: '/images/products/iphone-15-pro.png',
    condition: 'Brand New',
    isHot: true,
  },
  {
    id: 's-15pm',
    name: 'iPhone 15 Pro Max',
    category: 'Apple',
    brand: 'Apple',
    price: 1650000,
    specs: ['A17 Pro', '256GB', 'Titanium Design', '5x Telephoto'],
    image: '/images/products/iphone-15-promax.png',
    condition: 'Brand New',
    isHot: true,
  },

  // Samsung
  {
    id: 's-s21u',
    name: 'Samsung Galaxy S21 Ultra',
    category: 'Samsung',
    brand: 'Samsung',
    price: 420000,
    specs: ['Exynos/Snapdragon', '12GB RAM', '128/256GB', '108MP Camera', 'S-Pen support'],
    image: '/images/products/s21-ultra.png',
    condition: 'UK Used',
  },
  {
    id: 's-s22u',
    name: 'Samsung Galaxy S22 Ultra',
    category: 'Samsung',
    brand: 'Samsung',
    price: 580000,
    specs: ['Snapdragon 8 Gen 1', '12GB RAM', '256GB', '108MP', 'Built-in S-Pen'],
    image: '/images/products/s22-ultra.png',
    condition: 'UK Used',
  },
  {
    id: 's-s23u',
    name: 'Samsung Galaxy S23 Ultra',
    category: 'Samsung',
    brand: 'Samsung',
    price: 980000,
    specs: ['Snapdragon 8 Gen 2', '12GB RAM', '256GB', '200MP Camera', 'S-Pen'],
    image: '/images/products/s23-ultra.png',
    condition: 'Brand New',
  },
  {
    id: 's-s24u',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Samsung',
    brand: 'Samsung',
    price: 1550000,
    specs: ['Snapdragon 8 Gen 3', '12GB RAM', '256GB', '200MP Camera', 'AI Galaxy'],
    image: '/images/products/s24-ultra.png',
    condition: 'Brand New',
    isHot: true,
  },
  {
    id: 's-zflip',
    name: 'Samsung Galaxy Z Flip 5',
    category: 'Samsung',
    brand: 'Samsung',
    price: 850000,
    specs: ['Snapdragon 8 Gen 2', '8GB RAM', '256GB', 'Foldable Flip', 'Flex Window'],
    image: '/images/products/z-flip-5.png',
    condition: 'Brand New',
  },
  {
    id: 's-zfold',
    name: 'Samsung Galaxy Z Fold 5',
    category: 'Samsung',
    brand: 'Samsung',
    price: 1450000,
    specs: ['Snapdragon 8 Gen 2', '12GB RAM', '256/512GB', 'Foldable Tablet', 'S-Pen ready'],
    image: '/images/products/z-fold-5.png',
    condition: 'Brand New',
    isHot: true,
  },
];

// ============================================
// SETUP CALCULATOR ITEMS
// ============================================

export const CALCULATOR_ITEMS: CalculatorItem[] = [
  // Core Systems
  { id: 'c1', name: 'HP EliteBook 840 G6 (UK Used)', price: 280000, category: 'Laptop' },
  { id: 'c2', name: 'Lenovo ThinkPad T490 (UK Used)', price: 260000, category: 'Laptop' },
  { id: 'c3', name: 'HP ProBook 450 G8 (UK Used)', price: 420000, category: 'Laptop' },
  { id: 'c4', name: 'Dell Inspiron 15 (Brand New)', price: 350000, category: 'Laptop' },
  { id: 'c5', name: 'MacBook Air M1 (UK Used)', price: 650000, category: 'Laptop' },

  // Monitors
  { id: 'm1', name: 'Dell 24" FHD Monitor', price: 85000, category: 'Monitor' },
  { id: 'm2', name: 'Redmi 34" Ultra-Wide Monitor', price: 280000, category: 'Monitor' },
  { id: 'm3', name: '27" QHD Curved Monitor', price: 145000, category: 'Monitor' },

  // Desk & Ergonomics
  { id: 'd1', name: 'Sit-Stand Adjustable Desk', price: 120000, category: 'Desk & Chair' },
  { id: 'd2', name: 'Ergonomic Mesh Office Chair', price: 75000, category: 'Desk & Chair' },
  { id: 'd3', name: 'Laptop Stand (Aluminium)', price: 15000, category: 'Desk & Chair' },
  { id: 'd4', name: 'Single Monitor Arm', price: 25000, category: 'Desk & Chair' },
  { id: 'd5', name: 'Heavy-Duty Monitor Arm', price: 40000, category: 'Desk & Chair' },

  // Accessories
  { id: 'a1', name: 'USB-C Docking Station', price: 55000, category: 'Accessories' },
  { id: 'a2', name: 'Havit Desk Lamp', price: 12000, category: 'Accessories' },
  { id: 'a3', name: 'Havit Wireless Mouse', price: 8000, category: 'Accessories' },
  { id: 'a4', name: 'Havit Headphones', price: 25000, category: 'Accessories' },
  { id: 'a5', name: '100W Fast Charger', price: 18000, category: 'Accessories' },
  { id: 'a6', name: 'RGB Desk Mat', price: 12000, category: 'Accessories' },
  { id: 'a7', name: 'RGB Headphone Stand', price: 10000, category: 'Accessories' },
  { id: 'a8', name: 'Phone Stand', price: 5000, category: 'Accessories' },
  { id: 'a9', name: 'Cable Management Kit', price: 8000, category: 'Accessories' },

  // Upgrades
  { id: 'u1', name: 'RAM Upgrade (+8GB DDR4)', price: 18000, category: 'Upgrades' },
  { id: 'u2', name: 'RAM Upgrade (+16GB DDR4)', price: 32000, category: 'Upgrades' },
  { id: 'u3', name: 'SSD Upgrade (256GB NVMe)', price: 25000, category: 'Upgrades' },
  { id: 'u4', name: 'SSD Upgrade (512GB NVMe)', price: 40000, category: 'Upgrades' },
  { id: 'u5', name: 'SSD Upgrade (1TB NVMe)', price: 65000, category: 'Upgrades' },
  { id: 'u6', name: 'Windows 11 Pro License', price: 15000, category: 'Upgrades' },
];

// ============================================
// SPOTLIGHT SETUPS
// ============================================

export const starterSetup = {
  title: 'The 00010 Complete Professional Workstation',
  price: 350000,
  specs: 'A complete workstation bundle built for productivity, comfort, and reliable daily performance.',
  tagline: 'Everything you need to start working like a pro — from ₦350,000',
  image: '/images/products/starter-setup.png',
  includes: [
    'HP / Dell / Lenovo Core i5 Laptop (UK Used, Grade A)',
    '8GB RAM + 256GB SSD',
    'Sit-Stand or Standard Desk',
    'Ergonomic Mesh Chair',
    'Wireless Mouse',
    'LED Desk Lamp',
    'Free Setup, Windows Install & Support',
  ],
};

export const LAPTOPS = laptops;
export const SMARTPHONES = smartphones;
export const SETUP_350K = starterSetup;