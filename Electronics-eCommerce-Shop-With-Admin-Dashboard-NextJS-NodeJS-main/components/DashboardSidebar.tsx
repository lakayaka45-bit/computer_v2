"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard, MdCategory } from "react-icons/md";
import { FaTable, FaRegUser, FaGear, FaBagShopping, FaStore } from "react-icons/fa6";
import { FaFileUpload } from "react-icons/fa";

const navItems = [
  { href: "/admin", label: "Overview", icon: MdDashboard },
  { href: "/admin/orders", label: "Orders", icon: FaBagShopping },
  { href: "/admin/products", label: "Products", icon: FaTable },
  { href: "/admin/bulk-upload", label: "Bulk Upload", icon: FaFileUpload },
  { href: "/admin/categories", label: "Categories", icon: MdCategory },
  { href: "/admin/users", label: "Users", icon: FaRegUser },
  { href: "/admin/merchant", label: "Merchants", icon: FaStore },
  { href: "/admin/settings", label: "Settings", icon: FaGear },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] text-white xl:w-[320px] xl:min-h-screen">
      <div className="border-b border-white/10 px-6 py-7">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#86efac]">Control center</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Admin panel</h2>
        <p className="mt-2 text-sm text-slate-300">Manage inventory, orders, users and uploads from one place.</p>
      </div>

      <nav className="space-y-2 px-3 py-4">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || (href !== "/admin" && pathname.startsWith(href));

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1f2937] ${
                isActive ? "bg-[#2e7d32] shadow-lg shadow-[#2e7d32]/20" : "bg-transparent"
              }`}
            >
              <Icon className="text-lg" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
