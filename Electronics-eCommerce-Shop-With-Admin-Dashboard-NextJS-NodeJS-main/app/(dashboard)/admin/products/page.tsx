"use client";
import {
  CustomButton,
  DashboardProductTable,
  DashboardSidebar,
} from "@/components";
import React from "react";

const DashboardProducts = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220_0%,#0f172a_100%)] text-white">
      <div className="flex max-w-screen-2xl mx-auto h-full max-xl:flex-col">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="rounded-[1.5rem] bg-[#0b1220]/60 border border-white/10 p-6">
            <DashboardProductTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardProducts;
