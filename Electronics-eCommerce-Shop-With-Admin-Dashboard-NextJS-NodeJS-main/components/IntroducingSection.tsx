import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <section className="bg-[linear-gradient(135deg,#0f172a_0%,#111827_100%)] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Why customers return</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Premium computer solutions, built around real performance and dependable service.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Whether you&apos;re upgrading a home office, assembling a gaming setup or sourcing reliable parts, UNLIMIT PC HOUSE delivers a smoother, more confident buying experience.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur">
          <div className="flex items-center gap-3 text-emerald-300">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em]">What you get</span>
          </div>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              Carefully selected laptops, desktops and gaming hardware with competitive pricing.
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              Warranty-backed components and local support that helps you get the most from every purchase.
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              A focused storefront that keeps the experience clean, fast and easy to navigate.
            </div>
          </div>
          <Link href="/shop" className="mt-6 inline-flex rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-emerald-400">
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSection;
