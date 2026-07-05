// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// *********************

import React from "react";
import Link from "next/link";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
import apiClient from "@/lib/api";

const ProductsSection = async () => {
  let products = [];

  try {
    const data = await apiClient.get("/api/products");

    if (!data.ok) {
      console.error("Failed to fetch products:", data.statusText);
      products = [];
    } else {
      const result = await data.json();
      products = Array.isArray(result) ? result : [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    products = [];
  }

  const featuredProducts = products.slice(0, 30);

  return (
    <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f7fdf4_100%)] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2e7d32]">Featured collection</p>
            <Heading title="30 handpicked products" />
          </div>
          <Link href="/shop" className="rounded-full border border-[#2e7d32] px-5 py-2 text-sm font-semibold text-[#2e7d32] transition hover:bg-[#f7fdf4]">
            Explore more
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product: any) => (
              <div key={product.id} className="rounded-[1.5rem] border border-[#e8f7df] bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
                <ProductItem key={product.id} product={product} color="black" />
              </div>
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-[#cde8ba] bg-[#f7fdf4] py-12 text-center text-gray-700">
              <p>No featured products available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
