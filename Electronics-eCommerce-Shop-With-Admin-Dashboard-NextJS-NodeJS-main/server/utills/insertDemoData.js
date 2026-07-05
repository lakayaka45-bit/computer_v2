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
  { id: "cat-desktops", name: "desktops" },
  { id: "cat-monitors", name: "monitors" },
  { id: "cat-keyboards", name: "keyboards" },
  { id: "cat-mice", name: "mice" },
  { id: "cat-headsets", name: "headsets" },
  { id: "cat-ssd", name: "ssd" },
  { id: "cat-ram", name: "ram" },
  { id: "cat-cpus", name: "cpus" },
  { id: "cat-gpus", name: "gpus" },
  { id: "cat-pc-cases", name: "pc-cases" },
  { id: "cat-power-supplies", name: "power-supplies" },
  { id: "cat-accessories", name: "accessories" }
];

const demoProducts = [
  { title: "UltraPort 14 Pro Laptop", price: 285000, rating: 5, description: "A slim business laptop with 16GB RAM, 512GB SSD and a vivid display for work and study.", mainImage: "images/product_1.svg", slug: "ultraport-14-pro-laptop", manufacturer: "Dell", categoryName: "laptops", inStock: 12, merchantId: "merchant-unlimited-pc-house" },
  { title: "NovaBook Air 13", price: 324000, rating: 4, description: "Ultra-light notebook for creators, students and remote professionals.", mainImage: "images/product_2.svg", slug: "novabook-air-13", manufacturer: "HP", categoryName: "laptops", inStock: 8, merchantId: "merchant-unlimited-pc-house" },
  { title: "EliteWork 15 Laptop", price: 312000, rating: 5, description: "Portable workstation laptop designed for multitasking, coding and office productivity.", mainImage: "images/product_3.svg", slug: "elitework-15-laptop", manufacturer: "Lenovo", categoryName: "laptops", inStock: 10, merchantId: "merchant-unlimited-pc-house" },
  { title: "GameCore RTX 4070 Desktop", price: 640000, rating: 5, description: "Powerful gaming desktop with latest GPU, SSD storage and liquid cooling support.", mainImage: "images/product_4.svg", slug: "gamecore-rtx-4070-desktop", manufacturer: "NVIDIA", categoryName: "desktops", inStock: 6, merchantId: "merchant-unlimited-pc-house" },
  { title: "StudioPro 24 Monitor", price: 96000, rating: 5, description: "Sharp full HD display for workstations, editing suites and immersive entertainment.", mainImage: "images/product_5.svg", slug: "studiopro-24-monitor", manufacturer: "AOC", categoryName: "monitors", inStock: 11, merchantId: "merchant-unlimited-pc-house" },
  { title: "Chrono RGB Keyboard", price: 22500, rating: 4, description: "Compact and responsive keyboard for gamers and professionals who need speed.", mainImage: "images/product_6.svg", slug: "chrono-rgb-keyboard", manufacturer: "Razer", categoryName: "keyboards", inStock: 14, merchantId: "merchant-unlimited-pc-house" },
  { title: "GlideMate Wireless Mouse", price: 14500, rating: 5, description: "Low-latency wireless mouse tuned for fast clicks and daily work.", mainImage: "images/product_7.svg", slug: "glidemate-wireless-mouse", manufacturer: "Logitech", categoryName: "mice", inStock: 20, merchantId: "merchant-unlimited-pc-house" },
  { title: "PulsePro Headset", price: 32500, rating: 5, description: "Immersive headset with noise isolation and crystal clear communications.", mainImage: "images/product_8.svg", slug: "pulsepro-headset", manufacturer: "HyperX", categoryName: "headsets", inStock: 15, merchantId: "merchant-unlimited-pc-house" },
  { title: "Turbo SSD 1TB", price: 38500, rating: 5, description: "Fast NVMe SSD upgrade for laptops and desktops with enhanced boot times.", mainImage: "images/product_9.svg", slug: "turbo-ssd-1tb", manufacturer: "Samsung", categoryName: "ssd", inStock: 25, merchantId: "merchant-unlimited-pc-house" },
  { title: "BoostRAM 32GB DDR5", price: 42000, rating: 5, description: "High speed memory kit built for creative workloads and next-gen gaming rigs.", mainImage: "images/product_10.svg", slug: "boostram-32gb-ddr5", manufacturer: "Corsair", categoryName: "ram", inStock: 18, merchantId: "merchant-unlimited-pc-house" },
  { title: "CoreX i7 Processor", price: 118000, rating: 4, description: "Reliable CPU for multitasking, content creation and modern gaming builds.", mainImage: "images/product_11.svg", slug: "corex-i7-processor", manufacturer: "Intel", categoryName: "cpus", inStock: 8, merchantId: "merchant-unlimited-pc-house" },
  { title: "ArcFlow RTX 4060 GPU", price: 225000, rating: 5, description: "Mid-range graphics card for 1440p gameplay and accelerated rendering.", mainImage: "images/product_12.svg", slug: "arcflow-rtx-4060-gpu", manufacturer: "NVIDIA", categoryName: "gpus", inStock: 9, merchantId: "merchant-unlimited-pc-house" },
  { title: "AirFlow PC Case", price: 16800, rating: 4, description: "Modern case with airflow tuning and easy cable management for custom rigs.", mainImage: "images/product_13.svg", slug: "airflow-pc-case", manufacturer: "NZXT", categoryName: "pc-cases", inStock: 16, merchantId: "merchant-unlimited-pc-house" },
  { title: "VoltPeak 750W PSU", price: 24500, rating: 5, description: "Efficient power supply with stable power delivery for gaming and work systems.", mainImage: "images/product_14.svg", slug: "voltpeak-750w-psu", manufacturer: "Corsair", categoryName: "power-supplies", inStock: 13, merchantId: "merchant-unlimited-pc-house" },
  { title: "DockPro USB Hub", price: 12800, rating: 4, description: "Multi-port docking hub for workstations and portable laptop setups.", mainImage: "images/product_15.svg", slug: "dockpro-usb-hub", manufacturer: "Anker", categoryName: "accessories", inStock: 18, merchantId: "merchant-unlimited-pc-house" },
  { title: "SlimStand Laptop Stand", price: 9500, rating: 4, description: "Ergonomic stand that improves airflow and posture for notebook users.", mainImage: "images/product_16.svg", slug: "slimstand-laptop-stand", manufacturer: "Nexa", categoryName: "accessories", inStock: 20, merchantId: "merchant-unlimited-pc-house" },
  { title: "LightBeam Web Camera", price: 17500, rating: 4, description: "1080p camera ideal for meetings, streaming and remote collaboration.", mainImage: "images/product_17.svg", slug: "lightbeam-web-camera", manufacturer: "Logitech", categoryName: "accessories", inStock: 12, merchantId: "merchant-unlimited-pc-house" },
  { title: "SilentFan Cooling Kit", price: 22500, rating: 5, description: "Quiet cooling solution for workstations, gaming desktops and laptop upgrades.", mainImage: "images/product_18.svg", slug: "silentfan-cooling-kit", manufacturer: "Cooler Master", categoryName: "accessories", inStock: 17, merchantId: "merchant-unlimited-pc-house" },
  { title: "FlexCharge Power Bank", price: 16800, rating: 4, description: "Compact charger built for laptops, phones and devices on the go.", mainImage: "images/product_19.svg", slug: "flexcharge-power-bank", manufacturer: "Anker", categoryName: "accessories", inStock: 17, merchantId: "merchant-unlimited-pc-house" },
  { title: "BrightView 27 Monitor", price: 132000, rating: 5, description: "Premium monitor for productivity, design work and immersive entertainment.", mainImage: "images/product_20.svg", slug: "brightview-27-monitor", manufacturer: "BenQ", categoryName: "monitors", inStock: 7, merchantId: "merchant-unlimited-pc-house" },
  { title: "PrimeBook Pro 14", price: 368000, rating: 5, description: "Premium creator laptop with a bright display and high-speed storage.", mainImage: "images/product_21.svg", slug: "primebook-pro-14", manufacturer: "Asus", categoryName: "laptops", inStock: 5, merchantId: "merchant-unlimited-pc-house" },
  { title: "NanoMesh Wi-Fi Adapter", price: 12800, rating: 4, description: "Fast wireless networking adapter for desktops and compact desk setups.", mainImage: "images/product_22.svg", slug: "nanomesh-wifi-adapter", manufacturer: "TP-Link", categoryName: "accessories", inStock: 21, merchantId: "merchant-unlimited-pc-house" },
  { title: "QuietCore Desktop", price: 485000, rating: 4, description: "Reliable office desktop with efficient processing and silent cooling.", mainImage: "images/product_23.svg", slug: "quietcore-desktop", manufacturer: "Dell", categoryName: "desktops", inStock: 10, merchantId: "merchant-unlimited-pc-house" },
  { title: "RenderX 4K Monitor", price: 178000, rating: 5, description: "High resolution display tuned for creative production and multitasking.", mainImage: "images/product_24.svg", slug: "renderx-4k-monitor", manufacturer: "LG", categoryName: "monitors", inStock: 6, merchantId: "merchant-unlimited-pc-house" },
  { title: "TurboDrive External SSD", price: 29500, rating: 4, description: "Portable SSD for fast file transfer and backup for work and travel.", mainImage: "images/product_25.svg", slug: "turbodrive-external-ssd", manufacturer: "SanDisk", categoryName: "ssd", inStock: 14, merchantId: "merchant-unlimited-pc-house" },
  { title: "Fusion RTX 4080 GPU", price: 395000, rating: 5, description: "High-end graphics card for rendering, gaming and workstation-grade visuals.", mainImage: "images/product_26.svg", slug: "fusion-rtx-4080-gpu", manufacturer: "MSI", categoryName: "gpus", inStock: 4, merchantId: "merchant-unlimited-pc-house" },
  { title: "XtraLite 2TB SSD", price: 62000, rating: 5, description: "Large capacity SSD for modern desktops and laptops that need speed.", mainImage: "images/product_27.svg", slug: "xtralite-2tb-ssd", manufacturer: "Crucial", categoryName: "ssd", inStock: 12, merchantId: "merchant-unlimited-pc-house" },
  { title: "ProClip Cable Organizer", price: 6500, rating: 4, description: "Desk accessory designed to keep cables tidy on workstations and gaming rigs.", mainImage: "images/product_28.svg", slug: "proclip-cable-organizer", manufacturer: "Cablex", categoryName: "accessories", inStock: 22, merchantId: "merchant-unlimited-pc-house" },
  { title: "AeroLite Gaming Case", price: 21400, rating: 5, description: "Tempered glass tower case with excellent cooling and modern styling.", mainImage: "images/product_29.svg", slug: "aerolite-gaming-case", manufacturer: "Cooler Master", categoryName: "pc-cases", inStock: 11, merchantId: "merchant-unlimited-pc-house" },
  { title: "OptiFlow 850W PSU", price: 28600, rating: 5, description: "High reliability modular power supply for premium gaming and workstation builds.", mainImage: "images/product_30.svg", slug: "optiflow-850w-psu", manufacturer: "EVGA", categoryName: "power-supplies", inStock: 9, merchantId: "merchant-unlimited-pc-house" }
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