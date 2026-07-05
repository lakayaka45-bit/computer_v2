"use client";
import Link from "next/link";
import { DashboardSidebar, StatsElement } from "@/components";
import React, { useEffect, useState } from "react";
import { FaArrowUp, FaBoxesPacking, FaClipboardList, FaTags, FaUsers, FaUpload } from "react-icons/fa6";

type OverviewData = {
  products: number;
  orders: number;
  users: number;
  categories: number;
  uploads: number;
};

const AdminDashboardPage = () => {
  const [overview, setOverview] = useState<OverviewData>({
    products: 0,
    orders: 0,
    users: 0,
    categories: 0,
    uploads: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadOverview = async () => {
      try {
        const response = await fetch("/api/admin/overview", { cache: "no-store" });
        if (response.ok) {
          const data = await response.json();
          setOverview({
            products: data.products ?? 0,
            orders: data.orders ?? 0,
            users: data.users ?? 0,
            categories: data.categories ?? 0,
            uploads: data.uploads ?? 0,
          });
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadOverview();
  }, []);

  const actions = [
    { href: "/admin/products/new", title: "Add product", description: "Create new laptop, desktop or accessory listings.", icon: FaBoxesPacking },
    { href: "/admin/bulk-upload", title: "CSV bulk upload", description: "Import inventory from spreadsheets with one click.", icon: FaUpload },
    { href: "/admin/categories", title: "Manage categories", description: "Organize products into computer and parts groups.", icon: FaTags },
    { href: "/admin/users", title: "Manage users", description: "Review admins, customers and team access.", icon: FaUsers },
    { href: "/admin/orders", title: "Orders", description: "Track order progress and customer requests.", icon: FaClipboardList },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(135deg,#f7fdf4_0%,#ffffff_100%)] xl:flex-row">
      <DashboardSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="rounded-[2rem] border border-[#d9f5d0] bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2e7d32]">Admin control center</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">Welcome back, Administrator</h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">You can create, edit, remove and upload computer products and manage the storefront from one professional workspace.</p>
            </div>
            <div className="rounded-2xl bg-[#f7fdf4] px-4 py-3 text-sm font-semibold text-[#2e7d32]">
              {isLoading ? "Syncing inventory…" : "Connected to live store data"}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          <StatsElement title="Products" value={isLoading ? "—" : overview.products.toString()} description="Active computer listings ready to sell" accent="from-[#1d4ed8] to-[#2563eb]" icon={<FaBoxesPacking />} />
          <StatsElement title="Orders" value={isLoading ? "—" : overview.orders.toString()} description="Customer orders tracked in real time" accent="from-[#0f766e] to-[#14b8a6]" icon={<FaClipboardList />} />
          <StatsElement title="Users" value={isLoading ? "—" : overview.users.toString()} description="Registered shoppers and admin accounts" accent="from-[#7c3aed] to-[#8b5cf6]" icon={<FaUsers />} />
          <StatsElement title="Uploads" value={isLoading ? "—" : overview.uploads.toString()} description="Recent import batches and inventory syncs" accent="from-[#c2410c] to-[#fb923c]" icon={<FaUpload />} />
        </div>

        <div className="mt-6 rounded-[2rem] border border-[#d9f5d0] bg-[#0f172a] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#86efac]">Daily momentum</p>
              <h2 className="mt-2 text-2xl font-semibold">Store activity is being tracked from your database</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-[#bbf7d0]">
              <FaArrowUp />
              {isLoading ? "Updating…" : `${overview.categories} categories available`}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {actions.map(({ href, title, description, icon: Icon }) => (
            <Link key={href} href={href} className="group rounded-[1.5rem] border border-[#d9f5d0] bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(46,125,50,0.12)]">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#f7fdf4] p-3 text-[#2e7d32]">
                  <Icon className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
