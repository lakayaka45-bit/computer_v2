const prisma = require("./db");
const bcrypt = require("bcryptjs");

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "UNLIMITED PC HOUSE";
const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+94 71 578 0287";
const adminUsername = process.env.ADMIN_USERNAME || "adminLaka";
const adminPassword = process.env.ADMIN_PASSWORD || "Ux3@f=7x2";

const demoMerchant = [
  {
    id: "merchant-unlimited-pc-house",
    name: companyName,
    description: "Authorised PC and electronics retailer serving Sri Lanka with premium devices and support.",
    phone: companyPhone,
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "No. 123, Main Street, Colombo 01, Sri Lanka",
    status: "ACTIVE",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];

const demoCategories = [
  { id: "cat-laptops", name: "laptops" },
  { id: "cat-computers", name: "computers" },
  { id: "cat-mouses", name: "mouses" },
  { id: "cat-printers", name: "printers" },
  { id: "cat-headphones", name: "headphones" },
  { id: "cat-earbuds", name: "earbuds" },
  { id: "cat-speakers", name: "speakers" },
  { id: "cat-smartphones", name: "smart-phones" },
  { id: "cat-tablets", name: "tablets" },
  { id: "cat-cameras", name: "cameras" },
  { id: "cat-watches", name: "watches" },
  { id: "cat-juicers", name: "juicers" },
  { id: "cat-accessories", name: "accessories" }
];

const demoProducts = [
  { title: "UltraPort 14 Pro Laptop", price: 285000, rating: 5, description: "A slim business laptop with 16GB RAM, 512GB SSD and a vivid display for work and study.", mainImage: "product1.webp", slug: "ultraport-14-pro-laptop", manufacturer: "Dell", categoryName: "laptops", inStock: 12, merchantId: "merchant-unlimited-pc-house" },
  { title: "NovaBook Air 13", price: 324000, rating: 4, description: "Ultra-light notebook for creators, students and remote professionals.", mainImage: "product2.webp", slug: "novabook-air-13", manufacturer: "HP", categoryName: "laptops", inStock: 8, merchantId: "merchant-unlimited-pc-house" },
  { title: "Pulse RGB Gaming Mouse", price: 14500, rating: 5, description: "Precision gaming mouse tuned for fast clicks and durable performance.", mainImage: "product3.webp", slug: "pulse-rgb-gaming-mouse", manufacturer: "Logitech", categoryName: "mouses", inStock: 20, merchantId: "merchant-unlimited-pc-house" },
  { title: "EcoPrint Inkjet Printer", price: 42000, rating: 4, description: "Compact printer engineered for fast home office printing and scanning.", mainImage: "product4.webp", slug: "ecoprint-inkjet-printer", manufacturer: "Canon", categoryName: "printers", inStock: 9, merchantId: "merchant-unlimited-pc-house" },
  { title: "StudioPro Headphones", price: 32500, rating: 5, description: "Noise-insulating headphones with deep bass and all-day comfort.", mainImage: "product5.webp", slug: "studiopro-headphones", manufacturer: "Sony", categoryName: "headphones", inStock: 15, merchantId: "merchant-unlimited-pc-house" },
  { title: "WaveFlex Earbuds", price: 18500, rating: 4, description: "Water-resistant earbuds with fast pairing and a compact charging case.", mainImage: "product6.webp", slug: "waveflex-earbuds", manufacturer: "Samsung", categoryName: "earbuds", inStock: 25, merchantId: "merchant-unlimited-pc-house" },
  { title: "AeroSound Bluetooth Speaker", price: 29500, rating: 5, description: "Portable speaker carrying rich sound for study rooms, homes and outdoor events.", mainImage: "product7.webp", slug: "aerosound-bluetooth-speaker", manufacturer: "JBL", categoryName: "speakers", inStock: 16, merchantId: "merchant-unlimited-pc-house" },
  { title: "Galaxy X Smart Phone", price: 242000, rating: 5, description: "Flagship-level smartphone with AMOLED display and pro-grade camera features.", mainImage: "product8.webp", slug: "galaxy-x-smart-phone", manufacturer: "Samsung", categoryName: "smart-phones", inStock: 7, merchantId: "merchant-unlimited-pc-house" },
  { title: "TabLite 10 Tablet", price: 118000, rating: 4, description: "Family tablet for classes, reading, entertainment and work.", mainImage: "product9.webp", slug: "tablite-10-tablet", manufacturer: "Lenovo", categoryName: "tablets", inStock: 10, merchantId: "merchant-unlimited-pc-house" },
  { title: "LensMaster Mirrorless Camera", price: 368000, rating: 5, description: "Travel-friendly camera with AI autofocus and cinematic video capture.", mainImage: "product10.webp", slug: "lensmaster-mirrorless-camera", manufacturer: "Canon", categoryName: "cameras", inStock: 6, merchantId: "merchant-unlimited-pc-house" },
  { title: "PulseWatch Smartwatch", price: 64000, rating: 4, description: "Fitness tracker and smartwatch with health insights and long battery life.", mainImage: "product11.webp", slug: "pulsewatch-smartwatch", manufacturer: "Garmin", categoryName: "watches", inStock: 14, merchantId: "merchant-unlimited-pc-house" },
  { title: "GreenGlow Juice Extractor", price: 38500, rating: 4, description: "Quiet kitchen juicer tailored for fresh smoothies and healthy breakfasts.", mainImage: "product12.webp", slug: "greenglow-juice-extractor", manufacturer: "Philips", categoryName: "juicers", inStock: 8, merchantId: "merchant-unlimited-pc-house" },
  { title: "ProDock USB Hub", price: 12800, rating: 4, description: "Multi-port docking solution for workstations, laptops and creators.", mainImage: "product_placeholder.jpg", slug: "prodock-usb-hub", manufacturer: "Anker", categoryName: "accessories", inStock: 18, merchantId: "merchant-unlimited-pc-house" },
  { title: "OptiView 24 Inch Monitor", price: 96000, rating: 5, description: "Sharp full HD monitor for productivity and entertainment at home.", mainImage: "product_placeholder.jpg", slug: "optiview-24-inch-monitor", manufacturer: "AOC", categoryName: "computers", inStock: 11, merchantId: "merchant-unlimited-pc-house" },
  { title: "VividGrip Laptop Stand", price: 9500, rating: 3, description: "Slim ergonomic stand that keeps laptops cooler when you work long hours.", mainImage: "product_placeholder.jpg", slug: "vividgrip-laptop-stand", manufacturer: "Nexa", categoryName: "accessories", inStock: 20, merchantId: "merchant-unlimited-pc-house" },
  { title: "ThunderLite Backpack", price: 17500, rating: 4, description: "Water-resistant backpack for laptops, chargers and travel gear.", mainImage: "product_placeholder.jpg", slug: "thunderlite-backpack", manufacturer: "Swiss", categoryName: "accessories", inStock: 13, merchantId: "merchant-unlimited-pc-house" },
  { title: "GlideMate Wireless Keyboard", price: 22500, rating: 5, description: "Comfortable keyboard with silent switches and multi-device connectivity.", mainImage: "product_placeholder.jpg", slug: "glidemate-wireless-keyboard", manufacturer: "Microsoft", categoryName: "accessories", inStock: 12, merchantId: "merchant-unlimited-pc-house" },
  { title: "FlexCharge Power Bank", price: 16800, rating: 4, description: "Fast charging power bank designed for phones, tablets and laptops on the go.", mainImage: "product_placeholder.jpg", slug: "flexcharge-power-bank", manufacturer: "Anker", categoryName: "accessories", inStock: 17, merchantId: "merchant-unlimited-pc-house" }
];

async function insertDemoData() {
  const merchant = await prisma.merchant.upsert({
    where: { id: "merchant-unlimited-pc-house" },
    update: {},
    create: demoMerchant[0],
  });
  console.log("Company merchant ensured.");

  await prisma.category.createMany({
    data: demoCategories,
    skipDuplicates: true,
  });
  console.log("Demo categories ensured.");

  const categoryMap = await prisma.category.findMany({});
  const categoriesByName = Object.fromEntries(categoryMap.map((category) => [category.name, category.id]));

  const adminHash = await bcrypt.hash(adminPassword, 14);
  await prisma.user.upsert({
    where: { email: `${adminUsername}@local.test` },
    update: { password: adminHash, role: "admin" },
    create: {
      id: `admin-${Date.now()}`,
      email: `${adminUsername}@local.test`,
      password: adminHash,
      role: "admin",
    },
  });
  console.log("Admin account ensured.");

  const productPayload = demoProducts.map((product) => ({
    id: `product-${product.slug}`,
    title: product.title,
    price: product.price,
    rating: product.rating,
    description: product.description,
    mainImage: product.mainImage,
    slug: product.slug,
    manufacturer: product.manufacturer,
    categoryId: categoriesByName[product.categoryName] || categoryMap[0]?.id,
    inStock: product.inStock,
    merchantId: merchant.id,
  }));

  for (const product of productPayload) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }
  console.log("Demo products ensured.");
}

async function runInsertDemoData() {
  try {
    await insertDemoData();
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  runInsertDemoData();
}

module.exports = {
  insertDemoData,
};