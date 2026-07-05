"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const slides = [
  {
    badge: "Premium desktop builds",
    title: "Performance machines for creators, gamers and professionals.",
    description:
      "Discover curated laptops, desktops, networking gear and upgrades designed for speed, reliability and modern workstyles.",
    image: "/laptop 4.webp",
    highlight: "New arrivals • Ryzen and Intel options",
    cta: "Explore the range",
  },
  {
    badge: "Fast local support",
    title: "Build smarter with experts who understand Sri Lankan tech needs.",
    description:
      "From office laptops to immersive gaming rigs, our team helps you choose the right hardware and setup without the noise.",
    image: "/pc 1.png",
    highlight: "Installation support • warranty backed",
    cta: "Talk to our team",
  },
  {
    badge: "Upgrade ready",
    title: "Every part, accessory and device is selected to keep your setup future-ready.",
    description:
      "Upgrade your workstation with dependable components, accessories and maintenance support that feel premium from day one.",
    image: "/laptop 1.webp",
    highlight: "Parts + peripherals • next-day delivery",
    cta: "Browse parts",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.28),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.24),_transparent_35%)]" />
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="relative z-10">
          <p className="inline-flex rounded-full border border-emerald-400/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300 backdrop-blur">
            {currentSlide.badge}
          </p>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            {currentSlide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {currentSlide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/shop" className="rounded-full bg-emerald-500 px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-emerald-400">
              {currentSlide.cta}
            </Link>
            <Link href="/contact" className="rounded-full border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/20">
              Contact us
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.badge}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-emerald-400" : "w-2.5 bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Fast delivery", value: "24h" },
              { label: "Trusted brands", value: "40+" },
              { label: "Expert support", value: "Live" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <Image
              key={currentSlide.image}
              src={currentSlide.image}
              width={640}
              height={720}
              priority
              alt="Featured computer and accessory showcase"
              className="h-[420px] w-full object-cover transition-all duration-700 sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">{currentSlide.highlight}</p>
              <div className="mt-3 inline-flex rounded-full border border-white/15 bg-black/20 px-3 py-2 text-sm text-white backdrop-blur">
                Now available in-store and online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
