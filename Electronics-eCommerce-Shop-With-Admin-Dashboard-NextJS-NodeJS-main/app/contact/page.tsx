import Link from "next/link";
import { siteConfig, whatsappHref, whatsappText } from "@/lib/site";

const ContactPage = () => {
  return (
    <div className="bg-[linear-gradient(135deg,#f7fdf4_0%,#ffffff_50%,#f1f8e9_100%)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:px-10">
        <div className="flex-1 rounded-[2rem] border border-[#dbf3d3] bg-white/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2e7d32]">Contact us</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-black sm:text-5xl">
            Let&apos;s power your next build
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            Our team at {siteConfig.companyName} helps Sri Lankan homes, offices, and gaming setups with reliable laptops, custom PCs, accessories, and fast support. Reach out for product guidance, bulk purchases, or expert advice.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full bg-[#2e7d32] px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#1b5e20]">
              WhatsApp {siteConfig.phone}
            </a>
            <Link href="/shop" className="rounded-full border border-[#2e7d32] px-6 py-3 font-semibold text-[#2e7d32] transition hover:-translate-y-1 hover:bg-[#f7fdf4]">
              Explore products
            </Link>
          </div>
          <div className="mt-8 grid gap-4 rounded-2xl bg-[#f7fdf4] p-6 text-sm text-gray-700 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-black">Phone</p>
              <p className="mt-2">{siteConfig.phone}</p>
            </div>
            <div>
              <p className="font-semibold text-black">Email</p>
              <p className="mt-2">{siteConfig.email}</p>
            </div>
            <div>
              <p className="font-semibold text-black">Address</p>
              <p className="mt-2">{siteConfig.address}</p>
            </div>
            <div>
              <p className="font-semibold text-black">Business hours</p>
              <p className="mt-2">Mon - Sat · 8:30 AM to 7:30 PM</p>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-[2rem] border border-[#dbf3d3] bg-[#0f172a] p-8 text-white shadow-[0_30px_100px_rgba(46,125,50,0.25)]">
          <div className="animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-[#2e7d32]/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#d6f5c6] w-fit">
            Fast response guarantee
          </div>
          <h2 className="mt-6 text-3xl font-bold">Need a tailored recommendation?</h2>
          <p className="mt-4 leading-8 text-gray-300">
            Describe your workload, budget, or dream workstation and we will guide you to the perfect setup with transparent pricing in LKR.
          </p>
          <div className="mt-8 space-y-4 rounded-2xl bg-white/10 p-5">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d6f5c6]">Dream setup</p>
              <p className="mt-2 text-lg font-semibold">High performance workstation for gaming and video editing</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d6f5c6]">Plan</p>
              <p className="mt-2 text-lg font-semibold">Same-day guidance for upgrades, accessories and bundles</p>
            </div>
          </div>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center rounded-full bg-[#4caf50] px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#66bb6a]">
            {whatsappText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
