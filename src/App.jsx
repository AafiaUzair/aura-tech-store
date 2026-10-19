import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShoppingBag, Heart, Search, User, Sun, Moon, Star, X, Plus, Minus, 
  Trash2, Filter, ChevronRight, CheckCircle2, Truck, CreditCard, ShieldCheck, 
  Sparkles, Tag, ArrowRight, Eye, RefreshCw, Check, Clock, Package, ChevronLeft,
  Share2, ArrowUpRight, Volume2, VolumeX, Mic, Activity, BatteryCharging,
  Wifi, Sliders, Layers, BarChart2, Radio, Zap, Cpu, Shirt, Footprints, Flame
} from 'lucide-react';

const TECH_PRODUCTS = [
  // --- WIRELESS EARBUDS ---
  {
    id: 1,
    name: "Aura Pods Pro 2 ANC",
    category: "Wireless Earbuds",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviewsCount: 428,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800",
    description: "Flagship true wireless earbuds with custom adaptive noise cancellation, 11mm beryllium drivers, dual spatial audio, and up to 36 hours total playtime.",
    colors: ["Phantom Black", "Silver Ice", "Cyber Violet"],
    sizes: ["S/M/L Tips"],
    stock: 24,
    badge: "Flagship",
    hasANC: true,
    ipxRating: "IPX8",
    batteryLife: 36,
    driverSize: "11mm Beryllium",
    bluetooth: "v5.4 Ultra-Low Latency",
    weight: "5.2g per earbud"
  },
  {
    id: 6,
    name: "StealthBuds ANC Sport",
    category: "Wireless Earbuds",
    price: 129.00,
    originalPrice: 159.00,
    rating: 4.7,
    reviewsCount: 150,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=800",
    description: "Secure-fit ear hook wireless earbuds built for extreme workouts. Waterproof IPX7 rating with ambient passthrough sound mode.",
    colors: ["Neon Green", "Tactical Gray"],
    sizes: ["Secure Hooks S/M/L"],
    stock: 28,
    badge: "SweatProof",
    hasANC: true,
    ipxRating: "IPX7",
    batteryLife: 28,
    driverSize: "10mm Graphene",
    bluetooth: "v5.4",
    weight: "7.8g per earbud"
  },
  {
    id: 11,
    name: "Aura Air Open-Ear Clip Pods",
    category: "Wireless Earbuds",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.8,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&q=80&w=800",
    description: "Next-gen clip-on open ear design with directional sound conduction, keeping you aware of surroundings while delivering rich bass.",
    colors: ["Matte Titanium", "Cyber Amber"],
    sizes: ["Flexible C-Bridge"],
    stock: 18,
    badge: "Open Ear",
    hasANC: false,
    ipxRating: "IPX5",
    batteryLife: 32,
    driverSize: "12mm DirectConduct",
    bluetooth: "v5.4 Dual Sync",
    weight: "4.8g per pod"
  },
  {
    id: 12,
    name: "CyberBeats Mini Gaming Pods",
    category: "Wireless Earbuds",
    price: 89.00,
    originalPrice: 119.00,
    rating: 4.6,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1631867675167-90a456a90863?auto=format&fit=crop&q=80&w=800",
    description: "Ultra-low 25ms latency gaming earbuds with customizable RGB glowing charge case and dynamic competitive sound matrix.",
    colors: ["Neon Cyan", "Obsidian Black"],
    sizes: ["Silicon S/M/L"],
    stock: 30,
    badge: "RGB Gaming",
    hasANC: true,
    ipxRating: "IPX4",
    batteryLife: 24,
    driverSize: "10mm Neodymium",
    bluetooth: "v5.3 Low Latency",
    weight: "5.0g per earbud"
  },

  // --- HEADPHONES ---
  {
    id: 2,
    name: "Aura Studio Master ANC",
    category: "Headphones",
    price: 349.00,
    originalPrice: 420.00,
    rating: 4.9,
    reviewsCount: 312,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    description: "Premium over-ear studio headphones with hybrid active noise cancellation, planarmagnetic dynamic drivers, and memory foam lambskin earcups.",
    colors: ["Matte Obsidian", "Titanium Silver"],
    sizes: ["Adjustable Headband"],
    stock: 11,
    badge: "Bestseller",
    hasANC: true,
    ipxRating: "IPX4",
    batteryLife: 50,
    driverSize: "40mm Planar Magnetic",
    bluetooth: "v5.3 LDAC / AptX HD",
    weight: "260g"
  },
  {
    id: 10,
    name: "Pulse Max Wireless Headphones",
    category: "Headphones",
    price: 219.00,
    originalPrice: 269.00,
    rating: 4.8,
    reviewsCount: 173,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=800",
    description: "Lightweight foldable wireless headphones featuring ultra-low latency game mode, spatial 3D theater audio, and quick 10-minute fast charge.",
    colors: ["Neon Crimson", "Cosmic Gray"],
    sizes: ["Foldable Frame"],
    stock: 14,
    badge: "3D Spatial",
    hasANC: true,
    ipxRating: "IPX4",
    batteryLife: 40,
    driverSize: "45mm Neodymium",
    bluetooth: "v5.4 2.4GHz Dongle",
    weight: "220g"
  },
  {
    id: 13,
    name: "Aura Pro Bone Conduction Headset",
    category: "Headphones",
    price: 169.50,
    originalPrice: 199.00,
    rating: 4.7,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800",
    description: "Titanium neckband open-ear headset utilizing bone conduction vibration for crystal clear acoustic transmission without blocking ear canals.",
    colors: ["Stealth Black", "Ocean Teal"],
    sizes: ["Titanium Frame"],
    stock: 16,
    badge: "Bone Transmit",
    hasANC: false,
    ipxRating: "IPX8 Waterproof",
    batteryLife: 10,
    driverSize: "9th Gen Transducer",
    bluetooth: "v5.3 Multipoint",
    weight: "29g"
  },
  {
    id: 14,
    name: "Walnut Wood Reference Studio Headphones",
    category: "Headphones",
    price: 499.00,
    originalPrice: 599.00,
    rating: 5.0,
    reviewsCount: 67,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800",
    description: "Handcrafted open-back wooden headphones featuring 50mm beryllium-coated dynamic drivers for warm, uncompressed audiophile master tracks.",
    colors: ["Natural Walnut"],
    sizes: ["Over-Ear Studio"],
    stock: 5,
    badge: "Audiophile",
    hasANC: false,
    ipxRating: "N/A",
    batteryLife: 0, // Passive
    driverSize: "50mm Beryllium",
    bluetooth: "Balanced 4.4mm Cable / 3.5mm",
    weight: "340g"
  },

  // --- WIRED EARBUDS ---
  {
    id: 4,
    name: "Audiophile Hi-Fi Reference IEM",
    category: "Wired Earbuds",
    price: 159.50,
    originalPrice: 199.00,
    rating: 4.7,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=800",
    description: "Quad balanced-armature acoustic in-ear monitors with silver-plated oxygen-free copper detachable MMCX cable and custom resin shell.",
    colors: ["Clear Resin", "Translucent Cobalt"],
    sizes: ["Memory Foam Tips"],
    stock: 19,
    badge: "Hi-Res Cert",
    hasANC: false,
    ipxRating: "IPX5",
    batteryLife: 0,
    driverSize: "4 Balanced Armatures",
    bluetooth: "3.5mm Gold Plug / MMCX",
    weight: "12g"
  },
  {
    id: 8,
    name: "BassBuds Pro Titanium IEM",
    category: "Wired Earbuds",
    price: 79.00,
    originalPrice: 99.00,
    rating: 4.6,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800",
    description: "CNC-machined titanium housing with dual dynamic drivers for deep sub-bass reproduction and tangle-free braided Kevlar wire.",
    colors: ["Titanium Silver"],
    sizes: ["Silicon Multi-Fit"],
    stock: 22,
    badge: "Heavy Bass",
    hasANC: false,
    ipxRating: "IPX4",
    batteryLife: 0,
    driverSize: "Dual 8mm Dynamic",
    bluetooth: "3.5mm Gold Jack",
    weight: "16g"
  },

  // --- SMARTWATCHES ---
  {
    id: 3,
    name: "Aura Watch Ultra Stealth",
    category: "Smartwatches",
    price: 299.99,
    originalPrice: 350.00,
    rating: 4.8,
    reviewsCount: 189,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    description: "Titanium chassis smartwatch with sapphire glass LTPO AMOLED display, dual-frequency GPS tracking, cellular connectivity, and 100m water resistance.",
    colors: ["Stealth Gray", "Cyber Orange"],
    sizes: ["45mm", "49mm"],
    stock: 15,
    badge: "Titanium",
    hasANC: false,
    ipxRating: "IPX8 (100m)",
    batteryLife: 96,
    driverSize: "BioSensor Gen-3 Array",
    bluetooth: "v5.3 Low Energy",
    weight: "52g"
  },
  {
    id: 9,
    name: "Apex Pro Tactical Smartwatch",
    category: "Smartwatches",
    price: 399.00,
    originalPrice: 480.00,
    rating: 4.9,
    reviewsCount: 205,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800",
    description: "Military-grade sapphire display with built-in LED flashlight, topographic map offline rendering, solar charging ring, and tactical night-vision mode.",
    colors: ["Desert Tan", "Tactical Black"],
    sizes: ["47mm"],
    stock: 8,
    badge: "Solar Rugged",
    hasANC: false,
    ipxRating: "IPX8 (10ATM)",
    batteryLife: 336,
    driverSize: "Solar LTPO & Biometrics",
    bluetooth: "v5.3 Satellite Link",
    weight: "68g"
  },

  // --- FITNESS & HEALTH BANDS ---
  {
    id: 5,
    name: "Aura BioTrack X Band",
    category: "Fitness & Health Bands",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviewsCount: 260,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=800",
    description: "Ultra-lightweight continuous ECG & SpO2 tracker with continuous stress analysis, sleep stage mapping, and haptic workout coaching.",
    colors: ["Volt Green", "Midnight Black", "Coral Red"],
    sizes: ["One-Size Stretch Strap"],
    stock: 35,
    badge: "ECG Sensor",
    hasANC: false,
    ipxRating: "IPX8",
    batteryLife: 168,
    driverSize: "Optical PPG Array",
    bluetooth: "v5.2 BLE",
    weight: "18g"
  },
  {
    id: 7,
    name: "PulseBand Slim 3",
    category: "Fitness & Health Bands",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.5,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=800",
    description: "Sleek curved OLED band with 24/7 heart rate monitoring, body temperature sensor, dynamic GPS syncing, and smart notifications.",
    colors: ["Graphite", "Lavender Mist"],
    sizes: ["Slim Adjustable"],
    stock: 40,
    badge: "Value Pick",
    hasANC: false,
    ipxRating: "IPX7",
    batteryLife: 240,
    driverSize: "HR & Temp Dual Array",
    bluetooth: "v5.1",
    weight: "15g"
  },

  // --- HOODIES & APPAREL ---
  {
    id: 15,
    name: "Aura Cyber-Techwear Waterproof Hoodie",
    category: "Hoodies & Apparel",
    price: 129.00,
    originalPrice: 160.00,
    rating: 4.9,
    reviewsCount: 184,
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800",
    description: "450 GSM heavy fleece techwear hoodie with waterproof DWR coating, magnetic quick-release utility harness pockets, and thumb-hole storm cuffs.",
    colors: ["Tactical Black", "Cyber Olive", "Ghost White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 20,
    badge: "Techwear",
    hasANC: false,
    ipxRating: "DWR Waterproof",
    batteryLife: 0,
    driverSize: "450 GSM Heavy Fleece",
    bluetooth: "Magnetic Harness Buckles",
    weight: "850g"
  },
  {
    id: 16,
    name: "Aesthetic Matcha Cute Graphic Hoodie",
    category: "Hoodies & Apparel",
    price: 98.00,
    originalPrice: 120.00,
    rating: 4.9,
    reviewsCount: 164,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
    description: "Ultra-soft aesthetic pastel hoodie with a cute graphic print, relaxed oversized drop-shoulder fit, and double-lined plush fleece hood.",
    colors: ["Soft Pink", "Matcha Green", "Vanilla Cream"],
    sizes: ["S", "M", "L", "XL"],
    stock: 18,
    badge: "Cute Aesthetic",
    hasANC: false,
    ipxRating: "100% Organic Cotton",
    batteryLife: 0,
    driverSize: "420 GSM Soft Fleece",
    bluetooth: "Oversized Cozy Fit",
    weight: "750g"
  },
  {
    id: 17,
    name: "Reflective Neon Night Runner Hoodie",
    category: "Hoodies & Apparel",
    price: 110.00,
    originalPrice: 135.00,
    rating: 4.7,
    reviewsCount: 96,
    image: "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?auto=format&fit=crop&q=80&w=800",
    description: "Performance athletic stretch hoodie equipped with 3M 360-degree high-visibility reflective geometric stripes for night urban workouts.",
    colors: ["Reflective Silver/Black", "Volt Yellow"],
    sizes: ["S", "M", "L", "XL"],
    stock: 25,
    badge: "3M Reflective",
    hasANC: false,
    ipxRating: "Breathable Stretch",
    batteryLife: 0,
    driverSize: "Poly-Spandex Blend",
    bluetooth: "Hidden Media Pocket",
    weight: "520g"
  },
  {
    id: 18,
    name: "Minimalist Aura Embroidered Essential Hoodie",
    category: "Hoodies & Apparel",
    price: 85.00,
    originalPrice: 105.00,
    rating: 4.9,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
    description: "Clean aesthetic luxury hoodie with micro-embroidered metallic Aura logo, brushed velvet interior lining, and metal-tipped tonal drawstrings.",
    colors: ["Cream Beige", "Midnight Obsidian", "Slate Blue"],
    sizes: ["S", "M", "L", "XL"],
    stock: 32,
    badge: "Luxury Basic",
    hasANC: false,
    ipxRating: "Soft Touch Cotton",
    batteryLife: 0,
    driverSize: "380 GSM Organic Cotton",
    bluetooth: "Custom Aglets",
    weight: "690g"
  },
  {
    id: 23,
    name: "Y2K Cyber-Matrix Graphic Zip Hoodie",
    category: "Hoodies & Apparel",
    price: 115.00,
    originalPrice: 140.00,
    rating: 4.9,
    reviewsCount: 178,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
    description: "Funky Gen-Z Y2K full-zip hoodie with holographic chrome typography, rhinestone cyber spider-web sleeve prints, and double-layer thermal hood.",
    colors: ["Vaporwave Black", "Cyber Lilac"],
    sizes: ["S", "M", "L", "XL"],
    stock: 18,
    badge: "Y2K Gen-Z",
    hasANC: false,
    ipxRating: "100% Ring-Spun Cotton",
    batteryLife: 0,
    driverSize: "420 GSM Heavyweight",
    bluetooth: "Full-Length Dual Zip",
    weight: "810g"
  },
  {
    id: 24,
    name: "Gen-Z Puff-Print Butterfly Oversized Hoodie",
    category: "Hoodies & Apparel",
    price: 102.00,
    originalPrice: 125.00,
    rating: 4.8,
    reviewsCount: 156,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    description: "Trendsetting oversized boxy hoodie with 3D tactile puff-printed neon butterfly back motif, distressed hem details, and ultra-soft fleece lining.",
    colors: ["Electric Violet", "Phantom Cream"],
    sizes: ["M", "L", "XL"],
    stock: 22,
    badge: "Puff Print",
    hasANC: false,
    ipxRating: "Pre-Shrunk Fleece",
    batteryLife: 0,
    driverSize: "400 GSM Heavy Fleece",
    bluetooth: "Boxy Drop-Shoulder",
    weight: "760g"
  },

  // --- SNEAKERS & JORDANS ---
  {
    id: 19,
    name: "Air Jordan 1 High 'Cyber Phantom' Custom",
    category: "Sneakers & Jordans",
    price: 289.00,
    originalPrice: 340.00,
    rating: 4.9,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800",
    description: "Iconic Jordan 1 high-top silhouette updated with glow-in-the-dark translucent wings logo, premium tumbled leather, and cyan air cushioning unit.",
    colors: ["Phantom Cyan / Black", "Chicago Neon Red"],
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    stock: 12,
    badge: "Exclusive Drop",
    hasANC: false,
    ipxRating: "Leather & Canvas",
    batteryLife: 0,
    driverSize: "Encapsulated Air Sole",
    bluetooth: "Custom Box & Lace Set",
    weight: "1100g Pair"
  },
  {
    id: 20,
    name: "Air Jordan 4 Retro 'Neon Tech' Edition",
    category: "Sneakers & Jordans",
    price: 310.00,
    originalPrice: 380.00,
    rating: 5.0,
    reviewsCount: 245,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800",
    description: "Legendary Air Jordan 4 retuned with carbon-fiber side cage mesh, matte black nubuck upper, and energetic volt accenting on eyelets and heel tab.",
    colors: ["Matte Black / Volt", "Cement Gray / Cyan"],
    sizes: ["US 8.5", "US 9.5", "US 10.5", "US 11.5"],
    stock: 8,
    badge: "Grail Kicks",
    hasANC: false,
    ipxRating: "Nubuck & Carbon Mesh",
    batteryLife: 0,
    driverSize: "Dual Visible Air Unit",
    bluetooth: "Carbon Fiber Plate",
    weight: "1250g Pair"
  },
  {
    id: 21,
    name: "Aura Future Runner 3D Lattice Sneakers",
    category: "Sneakers & Jordans",
    price: 220.00,
    originalPrice: 270.00,
    rating: 4.8,
    reviewsCount: 168,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    description: "Futuristic running sneaker featuring a digitally light-synthesized 3D lattice midsole for maximum energy return and breathable PrimeKnit wrap upper.",
    colors: ["Solar Crimson", "Matrix Green", "Monochrome White"],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    stock: 18,
    badge: "3D Printed",
    hasANC: false,
    ipxRating: "Water-Repellent PrimeKnit",
    batteryLife: 0,
    driverSize: "3D Light-Lattice Midsole",
    bluetooth: "Sock-Fit Collar",
    weight: "720g Pair"
  },
  {
    id: 22,
    name: "Chunky Cyber Streetwear High-Tops",
    category: "Sneakers & Jordans",
    price: 175.00,
    originalPrice: 210.00,
    rating: 4.7,
    reviewsCount: 115,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    description: "Heavy-duty platform streetwear high-top sneakers with exaggerated tread outsoles, dual quick-cinch zip buckles, and industrial webbing straps.",
    colors: ["All Obsidian", "Cyber Silver"],
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    stock: 14,
    badge: "Platform Tech",
    hasANC: false,
    ipxRating: "Reinforced Leather",
    batteryLife: 0,
    driverSize: "Heavy Tread Platform",
    bluetooth: "Dual Zip Buckles",
    weight: "1400g Pair"
  }
];

const HERO_SLIDES = [
  {
    id: 1,
    title: "Air Jordan 1 'Cyber Phantom'",
    subtitle: "Custom Tumbled Leather, Glow Wings & Encapsulated Air Sole.",
    category: "Sneakers & Jordans",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1200",
    badge: "Limited Kick Drop",
    accent: "from-cyan-500 via-indigo-600 to-violet-900"
  },
  {
    id: 2,
    title: "Gen-Z Cyber & Y2K Hoodie Drop",
    subtitle: "450 GSM Heavy Fleece, Puff Prints & Y2K Rhinestone Cyber Fits.",
    category: "Hoodies & Apparel",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=1200",
    badge: "Streetwear Apparel",
    accent: "from-purple-600 via-pink-600 to-slate-950"
  },
  {
    id: 3,
    title: "Aura Pods Pro 2 ANC",
    subtitle: "Active Noise Cancellation Elevated. 11mm Beryllium Clarity.",
    category: "Wireless Earbuds",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1200",
    badge: "Audio Flagship",
    accent: "from-amber-500 via-rose-600 to-slate-950"
  }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("featured");
  
  // Custom Filters
  const [priceRange, setPriceRange] = useState(600);
  const [onlyANC, setOnlyANC] = useState(false);
  const [selectedIPX, setSelectedIPX] = useState("All");

  // Drawers & Modals State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Sound Profile / ANC Simulator State
  const [isAudioSimOpen, setIsAudioSimOpen] = useState(false);
  const [simEQ, setSimEQ] = useState("Balanced");
  const [simANC, setSimANC] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState([
    { ...TECH_PRODUCTS[0], selectedColor: "Phantom Black", selectedSize: "S/M/L Tips", quantity: 1 },
    { ...TECH_PRODUCTS[14], selectedColor: "Tactical Black", selectedSize: "L", quantity: 1 }
  ]);
  const [wishlist, setWishlist] = useState([18, 19]);
  const [compareList, setCompareList] = useState([1, 2]);
  const [toastMessage, setToastMessage] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);

  // Checkout State
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoError, setPromoError] = useState("");
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "Alex Rivera",
    email: "alex@auratech.io",
    address: "101 Cyber Way",
    city: "Neo-Tokyo",
    zip: "90210",
    country: "United States"
  });
  const [shippingMethod, setShippingMethod] = useState("express");
  const [completedOrder, setCompletedOrder] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const categories = [
    "All", 
    "Wireless Earbuds", 
    "Headphones", 
    "Wired Earbuds", 
    "Smartwatches", 
    "Fitness & Health Bands",
    "Hoodies & Apparel",
    "Sneakers & Jordans"
  ];

  const filteredProducts = useMemo(() => {
    return TECH_PRODUCTS.filter((product) => {
      const matchesCat = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price <= priceRange;
      const matchesANC = !onlyANC || product.hasANC;
      const matchesIPX = selectedIPX === "All" || product.ipxRating.includes(selectedIPX);

      return matchesCat && matchesSearch && matchesPrice && matchesANC && matchesIPX;
    }).sort((a, b) => {
      if (selectedSort === "price-low") return a.price - b.price;
      if (selectedSort === "price-high") return b.price - a.price;
      if (selectedSort === "rating") return b.rating - a.rating;
      if (selectedSort === "battery") return b.batteryLife - a.batteryLife;
      return a.id - b.id;
    });
  }, [activeCategory, searchQuery, priceRange, onlyANC, selectedIPX, selectedSort]);

  const addToCart = (product, color = null, size = null, qty = 1) => {
    const chosenColor = color || (product.colors ? product.colors[0] : "Standard");
    const chosenSize = size || (product.sizes ? product.sizes[0] : "Standard");

    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.selectedColor === chosenColor && i.selectedSize === chosenSize
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedColor === chosenColor && item.selectedSize === chosenSize
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { ...product, selectedColor: chosenColor, selectedSize: chosenSize, quantity: qty }];
    });
    showToast(`Added ${product.name} to Cart`);
  };

  const updateCartQty = (id, color, size, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.selectedColor === color && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id, color, size) => {
    setCartItems((prev) => prev.filter((i) => !(i.id === id && i.selectedColor === color && i.selectedSize === size)));
    showToast("Removed item from cart");
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      if (prev.includes(id)) {
        showToast("Removed from Wishlist");
        return prev.filter((item) => item !== id);
      } else {
        showToast("Saved to Wishlist!");
        return [...prev, id];
      }
    });
  };

  const toggleCompare = (id) => {
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 3) {
          showToast("Comparison limit reached (Max 3 items)");
          return prev;
        }
        showToast("Added to Comparison Matrix");
        return [...prev, id];
      }
    });
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = subtotal > 200 || cartItems.length === 0 ? 0 : shippingMethod === "express" ? 15 : 8.99;
  const taxCost = subtotal * 0.08;
  const discountAmount = subtotal * appliedDiscount;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost + taxCost);

  const handleApplyPromo = () => {
    setPromoError("");
    const code = promoCode.trim().toUpperCase();
    if (code === "AURA20" || code === "KICKS20") {
      setAppliedDiscount(0.20);
      showToast("20% Cyber Coupon Applied!");
    } else if (code === "FREESHIP") {
      setAppliedDiscount(0.10);
      showToast("Free Shipping Discount Applied!");
    } else {
      setPromoError("Invalid code. Try 'AURA20' or 'FREESHIP'");
    }
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    const orderId = "AURA-TECH-" + Math.floor(100000 + Math.random() * 900000);
    setCompletedOrder({
      id: orderId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      items: [...cartItems],
      grandTotal,
      shippingDetails
    });
    setCartItems([]);
    setCheckoutStep(4);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans antialiased selection:bg-cyan-500 selection:text-black`}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white px-5 py-3 rounded-2xl shadow-2xl border border-cyan-400/30 animate-bounce">
          <Zap className="w-5 h-5 text-amber-300" />
          <span className="font-semibold text-xs tracking-wide">{toastMessage}</span>
        </div>
      )}

      {}
      <header className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-all ${
        darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/80 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Brand Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveCategory("All")}>
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group">
                <Flame className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
                  AURA<span className="text-cyan-400 font-light">TECH</span>
                </span>
                <span className="block text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
                  Tech • Apparel • Jordans
                </span>
              </div>
            </div>

            {/* Instant Real-Time Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
              <input
                type="text"
                placeholder="Search Jordans, hoodies, earbuds, smartwatches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-11 pr-4 py-2.5 text-xs font-medium rounded-2xl border transition-all outline-none ${
                  darkMode 
                    ? 'bg-slate-900/90 border-slate-800 text-slate-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500' 
                    : 'bg-slate-100 border-slate-200 text-slate-900 focus:border-cyan-600 focus:bg-white'
                }`}
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-200">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Header Right Tech Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Sound Profile / ANC Test Button */}
              <button
                onClick={() => setIsAudioSimOpen(true)}
                className="hidden lg:flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 text-xs font-bold transition-all"
                title="Test Virtual ANC & EQ Profile"
              >
                <Volume2 className="w-4 h-4 animate-pulse" />
                <span>ANC Lab</span>
              </button>

              {/* Compare Matrix Trigger */}
              <button
                onClick={() => setIsCompareOpen(true)}
                className={`relative p-2.5 rounded-xl border transition-all ${
                  darkMode ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800' : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                title="Compare Specs"
              >
                <BarChart2 className="w-5 h-5 text-indigo-400" />
                {compareList.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {compareList.length}
                  </span>
                )}
              </button>

              {/* Dark/Light Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800' : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Wishlist Drawer */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className={`relative p-2.5 rounded-xl border transition-all ${
                  darkMode ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800' : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Heart className="w-5 h-5 text-rose-400" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* User Account */}
              <button
                onClick={() => setIsProfileOpen(true)}
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800' : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <User className="w-5 h-5" />
              </button>

              {/* Shopping Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(false) || setIsCartOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 hover:opacity-90 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Cart</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </button>
            </div>
          </div>

          {/* Category Navigation Pills */}
          <nav className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none border-t border-slate-800/40">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                  activeCategory === cat
                    ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-md shadow-cyan-500/10'
                    : darkMode
                    ? 'border-transparent text-slate-400 hover:text-white hover:bg-slate-900'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat === "Hoodies & Apparel" && <Shirt className="w-3.5 h-3.5 text-pink-400" />}
                {cat === "Sneakers & Jordans" && <Footprints className="w-3.5 h-3.5 text-amber-400" />}
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex items-center shadow-2xl border border-slate-800/80">
          <img
            src={HERO_SLIDES[heroIndex].image}
            alt="Hero Spotlight"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 transform scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${HERO_SLIDES[heroIndex].accent} opacity-90 backdrop-blur-xs`} />

          <div className="relative z-10 max-w-2xl px-8 sm:px-12 py-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
              <Sparkles className="w-3 h-3" /> {HERO_SLIDES[heroIndex].badge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {HERO_SLIDES[heroIndex].title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              {HERO_SLIDES[heroIndex].subtitle}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => setActiveCategory(HERO_SLIDES[heroIndex].category)}
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold text-xs shadow-xl shadow-cyan-500/30 transition-all"
              >
                Shop {HERO_SLIDES[heroIndex].category} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Banner Switchers */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroIndex(idx)}
                className={`h-2 rounded-full transition-all ${heroIndex === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-600'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Tech & Apparel Sidebar Filter Controls */}
          <aside className="w-full lg:w-64 space-y-6 flex-shrink-0">
            <div className={`p-6 rounded-3xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" /> Filter Store
                </h3>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setPriceRange(600);
                    setOnlyANC(false);
                    setSelectedIPX("All");
                    setSearchQuery("");
                  }}
                  className="text-[10px] font-mono text-cyan-400 hover:underline"
                >
                  Reset
                </button>
              </div>

              {/* ANC Toggle Switch */}
              <div className="mt-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <VolumeX className="w-3.5 h-3.5 text-indigo-400" /> Active Noise Cancel
                  </span>
                  <input
                    type="checkbox"
                    checked={onlyANC}
                    onChange={(e) => setOnlyANC(e.target.checked)}
                    className="accent-cyan-500 w-4 h-4 rounded cursor-pointer"
                  />
                </label>
              </div>

              {/* Water Resistance Filter */}
              <div className="mt-6">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">Water Resistance (IPX)</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {["All", "IPX4", "IPX7", "IPX8"].map((ipx) => (
                    <button
                      key={ipx}
                      onClick={() => setSelectedIPX(ipx)}
                      className={`py-1.5 text-[10px] font-bold rounded-lg border transition-all ${
                        selectedIPX === ipx
                          ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                          : 'border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {ipx}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="mt-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Max Price</label>
                  <span className="font-bold text-cyan-400">${priceRange}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="10"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>
            </div>
          </aside>

          {/* Product Grid & Sorting Controls */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  {activeCategory === "All" ? "All Tech, Hoodies & Sneakers" : activeCategory}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Showing {filteredProducts.length} items
                </p>
              </div>

              {/* Sorting Selection Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Sort By:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className={`text-xs font-semibold px-3 py-2 rounded-xl border outline-none cursor-pointer ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <option value="featured">Featured Collection</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Customer Rated</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 border rounded-3xl border-dashed border-slate-800">
                <Package className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <p className="text-lg font-semibold text-slate-400">No items match your specific search or filter.</p>
                <p className="text-xs text-slate-500 mt-1">Try resetting filter sliders or clearing search query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const isWishlisted = wishlist.includes(product.id);
                  const isCompared = compareList.includes(product.id);

                  return (
                    <div
                      key={product.id}
                      className={`group relative rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col overflow-hidden ${
                        darkMode 
                          ? 'bg-slate-900/60 border-slate-800/80 hover:border-cyan-500/50 hover:shadow-cyan-500/10' 
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {/* Product Image & Badges */}
                      <div className="relative aspect-square overflow-hidden bg-slate-900/40">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                          {product.badge && (
                            <span className="px-2.5 py-1 text-[9px] font-mono font-black uppercase tracking-wider rounded-md bg-gradient-to-r from-cyan-500 to-indigo-600 text-black shadow-md">
                              {product.badge}
                            </span>
                          )}
                          {product.hasANC && (
                            <span className="px-2 py-0.5 text-[9px] font-bold rounded bg-indigo-950/80 text-indigo-300 border border-indigo-500/30 backdrop-blur-md flex items-center gap-1">
                              <VolumeX className="w-2.5 h-2.5" /> ANC
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                              isWishlisted 
                                ? 'bg-rose-500 text-white border-rose-400' 
                                : 'bg-slate-900/60 border-slate-700/50 text-slate-300 hover:text-white'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                          </button>
                          <button
                            onClick={() => toggleCompare(product.id)}
                            className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                              isCompared
                                ? 'bg-indigo-600 text-white border-indigo-400'
                                : 'bg-slate-900/60 border-slate-700/50 text-slate-300 hover:text-white'
                            }`}
                            title="Compare Specs"
                          >
                            <BarChart2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setQuickViewProduct(product)}
                            className="p-2 rounded-full bg-slate-900/60 border border-slate-700/50 text-slate-300 hover:text-white backdrop-blur-md transition-all"
                            title="Quick View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                            <span className="font-mono text-[10px] text-cyan-400 uppercase">{product.category}</span>
                            <span className="flex items-center gap-1 text-amber-400 font-bold">
                              <Star className="w-3.5 h-3.5 fill-amber-400" /> {product.rating}
                            </span>
                          </div>
                          <h3 className="font-bold text-sm group-hover:text-cyan-400 transition-colors line-clamp-1">
                            {product.name}
                          </h3>

                          {/* Quick Spec Tags */}
                          <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-400">
                            {product.sizes && (
                              <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/50">
                                {product.sizes.length} Sizes Available
                              </span>
                            )}
                            {product.batteryLife > 0 && (
                              <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/50 flex items-center gap-1">
                                <BatteryCharging className="w-2.5 h-2.5 text-emerald-400" /> {product.batteryLife}h Play
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Price & Add to Cart */}
                        <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                          <div>
                            <div className="text-lg font-black text-cyan-400">
                              ${product.price.toFixed(2)}
                            </div>
                            {product.originalPrice && (
                              <div className="text-[10px] text-slate-500 line-through">
                                ${product.originalPrice.toFixed(2)}
                              </div>
                            )}
                          </div>

                          <button
                            onClick={() => addToCart(product)}
                            className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all border border-cyan-500/20"
                            title="Add to Shopping Cart"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      {}
      {isAudioSimOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`relative w-full max-w-lg rounded-3xl border shadow-2xl p-6 sm:p-8 ${
            darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button onClick={() => setIsAudioSimOpen(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400">
                <Volume2 className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Aura Virtual Sound Lab</h3>
                <p className="text-xs text-slate-400">Simulate EQ Profiles & Active Noise Cancellation</p>
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="flex items-center gap-1.5 h-16 my-4">
                {[40, 75, 30, 90, 50, 100, 60, 85, 45, 95, 30, 70].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: isPlayingAudio ? `${h}%` : '15%' }}
                    className={`w-2 rounded-full transition-all duration-300 ${
                      simANC ? 'bg-gradient-to-t from-cyan-500 to-indigo-500' : 'bg-rose-500 opacity-60'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                >
                  {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  {isPlayingAudio ? 'Stop Sound Test' : 'Play Sound Test'}
                </button>
                <button
                  onClick={() => setSimANC(!simANC)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    simANC ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}
                >
                  ANC Mode: {simANC ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-mono">Profile Preset:</span>
              <div className="flex gap-2">
                {["Balanced", "Bass Boost", "Vocal"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSimEQ(mode)}
                    className={`px-3 py-1.5 rounded-lg border text-[11px] font-semibold transition-all ${
                      simEQ === mode
                        ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                        : 'border-slate-800 text-slate-400 hover:bg-slate-900'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className={`w-screen max-w-md border-l shadow-2xl flex flex-col justify-between ${
              darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-cyan-400" />
                  <h2 className="font-bold text-lg">Shopping Bag</h2>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <p className="text-center py-20 text-slate-400 text-xs">Your bag is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4 p-3 rounded-2xl border border-slate-800 bg-slate-900/40">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl border border-slate-800" />
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="text-xs font-semibold line-clamp-1">{item.name}</h4>
                            <span className="text-[10px] text-slate-400">{item.selectedSize} • {item.selectedColor}</span>
                          </div>
                          <button onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)} className="text-slate-500 hover:text-rose-400">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs font-bold text-cyan-400">${(item.price * item.quantity).toFixed(2)}</span>
                          <div className="flex items-center gap-2 border border-slate-800 rounded-lg px-2 py-0.5 bg-slate-900">
                            <button onClick={() => updateCartQty(item.id, item.selectedColor, item.selectedSize, -1)} className="text-slate-400"><Minus className="w-3 h-3" /></button>
                            <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateCartQty(item.id, item.selectedColor, item.selectedSize, 1)} className="text-slate-400"><Plus className="w-3 h-3" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-slate-800 bg-slate-950 space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo Code (AURA20 / KICKS20)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-800 bg-slate-900 text-white outline-none"
                    />
                    <button onClick={handleApplyPromo} className="px-4 py-2 bg-slate-800 text-xs font-bold rounded-xl text-slate-200">
                      Apply
                    </button>
                  </div>
                  {promoError && <p className="text-[10px] text-rose-400">{promoError}</p>}

                  <div className="space-y-1.5 text-xs text-slate-400">
                    <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                    <div className="flex justify-between font-bold text-slate-100 text-sm pt-2 border-t border-slate-800">
                      <span>Total</span>
                      <span className="text-cyan-400">${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsCheckoutOpen(true);
                    }}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-black font-bold rounded-xl text-xs shadow-lg shadow-cyan-500/20"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className={`relative w-full max-w-xl rounded-3xl border shadow-2xl p-6 sm:p-8 ${
            darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-bold text-lg mb-4">Secure Checkout</h3>

            {checkoutStep === 1 && (
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1">Full Name</label>
                  <input type="text" value={shippingDetails.fullName} onChange={(e) => setShippingDetails({...shippingDetails, fullName: e.target.value})} className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-white" />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Delivery Address</label>
                  <input type="text" value={shippingDetails.address} onChange={(e) => setShippingDetails({...shippingDetails, address: e.target.value})} className="w-full p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-white" />
                </div>
                <button onClick={() => setCheckoutStep(2)} className="w-full py-3 bg-cyan-500 text-black font-bold rounded-xl">Next: Shipping Option</button>
              </div>
            )}

            {checkoutStep === 2 && (
              <div className="space-y-4">
                <div onClick={() => setShippingMethod("express")} className={`p-4 rounded-xl border cursor-pointer ${shippingMethod === 'express' ? 'border-cyan-500 bg-cyan-500/10' : 'border-slate-800'}`}>
                  <p className="font-bold text-xs">Express Cyber Delivery ($15.00)</p>
                  <p className="text-[10px] text-slate-400">1-2 Business Days Priority Dispatch</p>
                </div>
                <button onClick={() => setCheckoutStep(3)} className="w-full py-3 bg-cyan-500 text-black font-bold rounded-xl text-xs">Next: Payment Gateway</button>
              </div>
            )}

            {checkoutStep === 3 && (
              <form onSubmit={handleCompleteOrder} className="space-y-4">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900 space-y-2">
                  <p className="text-xs font-bold text-cyan-400">Credit / Debit Card</p>
                  <input type="text" value="•••• •••• •••• 8821" readOnly className="w-full p-2 rounded-lg border border-slate-800 bg-slate-950 text-xs text-slate-400" />
                </div>
                <button type="submit" className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-bold rounded-xl text-xs">
                  Pay ${grandTotal.toFixed(2)} & Place Order
                </button>
              </form>
            )}

            {checkoutStep === 4 && completedOrder && (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold">Order Confirmed!</h3>
                <p className="text-xs text-slate-400">Order ID: <span className="text-cyan-400 font-mono">{completedOrder.id}</span></p>
                <button onClick={() => setIsCheckoutOpen(false)} className="w-full py-3 bg-cyan-500 text-black font-bold rounded-xl text-xs">Return to Store</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Wishlist Drawer */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setIsWishlistOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className={`w-screen max-w-md border-l shadow-2xl flex flex-col justify-between ${
              darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                <h2 className="font-bold text-lg flex items-center gap-2"><Heart className="w-5 h-5 text-rose-500" /> Saved Wishlist</h2>
                <button onClick={() => setIsWishlistOpen(false)} className="p-2 text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {wishlist.length === 0 ? (
                  <p className="text-center py-20 text-slate-400 text-xs">No saved items.</p>
                ) : (
                  TECH_PRODUCTS.filter((p) => wishlist.includes(p.id)).map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 rounded-2xl border border-slate-800 bg-slate-900/40">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl border border-slate-800" />
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold">{item.name}</h4>
                        <p className="text-xs font-bold text-cyan-400 mt-1">${item.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(item)} className="mt-2 text-[10px] font-bold text-cyan-400 underline">Move to Cart</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Profile Drawer */}
      {isProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className={`relative w-full max-w-md rounded-3xl border shadow-2xl p-6 ${
            darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button onClick={() => setIsProfileOpen(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
              <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-lg font-bold text-black">
                AR
              </div>
              <div>
                <h3 className="font-bold text-sm">Alex Rivera</h3>
                <p className="text-xs text-slate-400">alex@auratech.io</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest">Aura Membership Status</h4>
              <div className="p-3.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-xs">
                <p className="font-bold text-cyan-300">Cyber Tier VIP</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Priority drop access for limited Jordans & Tech wear.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`mt-20 border-t ${darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
            <div className="space-y-3">
              <span className="font-black text-cyan-400 text-base">AURA TECH & STREETWEAR</span>
              <p className="leading-relaxed text-slate-400">
                Next-gen audio tech, techwear fleece hoodies, and exclusive sneaker drops for urban creators.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-200 uppercase tracking-wider mb-3">Categories</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveCategory("Sneakers & Jordans")} className="hover:text-cyan-400">Sneakers & Jordans</button></li>
                <li><button onClick={() => setActiveCategory("Hoodies & Apparel")} className="hover:text-cyan-400">Hoodies & Techwear</button></li>
                <li><button onClick={() => setActiveCategory("Wireless Earbuds")} className="hover:text-cyan-400">Wireless Earbuds</button></li>
                <li><button onClick={() => setActiveCategory("Headphones")} className="hover:text-cyan-400">Studio Headphones</button></li>
                <li><button onClick={() => setActiveCategory("Smartwatches")} className="hover:text-cyan-400">Smartwatches</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-200 uppercase tracking-wider mb-3">Customer Service</h4>
              <p className="text-slate-400">100% Authenticity Guarantee on all Jordan drops and 2-Year Warranty on Audio Hardware.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-200 uppercase tracking-wider mb-3">Coupons</h4>
              <p className="text-slate-400 font-mono text-[11px] text-cyan-400">Use 'AURA20' or 'KICKS20' for 20% off!</p>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-slate-800 text-center text-[10px] text-slate-500 font-mono">
            &copy; 2026 AURA TECH & STREETWEAR INC. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}