export const siteConfig = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || "UNLIMITED PC HOUSE",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+94 71 578 0287",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "94715780287",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@unlimitedpchouse.lk",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "No. 123, Main Street, Colombo 01, Sri Lanka",
  currency: process.env.NEXT_PUBLIC_CURRENCY || "LKR",
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}`;
export const whatsappText = `Hello ${siteConfig.companyName}, I would like to enquire about your products.`;
