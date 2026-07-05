// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { siteConfig } from "@/lib/site";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_#f7fdf4_0%,_#ffffff_40%,_#eef8e8_100%)]">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="animate-[fadeInUp_0.8s_ease-out]">
          <p className="inline-flex rounded-full border border-[#d6f3c5] bg-[#f7fdf4] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#2e7d32]">
            Premium tech for Sri Lanka
          </p>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight text-black sm:text-5xl lg:text-6xl">
            Build smarter, game harder, work lighter.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            Discover curated laptops, custom PCs, accessories, and future-ready gadgets from {siteConfig.companyName}. Every product is selected for quality, speed, and value in LKR.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/shop" className="rounded-full bg-[#2e7d32] px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#1b5e20]">
              Shop now
            </Link>
            <Link href="/contact" className="rounded-full border border-[#2e7d32] px-7 py-3 font-semibold text-[#2e7d32] transition hover:-translate-y-1 hover:bg-[#f7fdf4]">
              Contact us
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-gray-700">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Fast delivery in Sri Lanka</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Flexible payment options</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Expert support</span>
          </div>
        </div>
        <div className="animate-[fadeInRight_0.9s_ease-out] rounded-[2rem] border border-[#d6f3c5] bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
          <Image
            src="/images/hero-computer.svg"
            width={480}
            height={480}
            alt="UNLIMITED PC HOUSE computer showcase"
            className="w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
