// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// *********************

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
import apiClient from "@/lib/api";
import { isComputerRelatedProduct } from "@/lib/utils";

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await apiClient.get("/api/products");
        if (!response.ok) {
          console.error("Failed to fetch products:", response.statusText);
          setProducts([]);
          return;
        }
        const result = await response.json();
        setProducts(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const featuredProducts = products.filter(isComputerRelatedProduct).slice(0, 12);

  return (
    <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f7fdf4_100%)] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2e7d32]">Computer essentials</p>
            <Heading title="12 curated products for your setup" />
          </div>
          <Link href="/shop" className="rounded-full border border-[#2e7d32] px-5 py-2 text-sm font-semibold text-[#2e7d32] transition hover:bg-[#f7fdf4]">
            Explore more
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-[1.5rem] border border-[#e8f7df] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
                <div className="h-48 rounded-3xl bg-slate-100" />
                <div className="mt-5 h-6 w-3/4 rounded-full bg-slate-200" />
                <div className="mt-3 h-4 w-1/2 rounded-full bg-slate-200" />
              </div>
            ))
          ) : featuredProducts.length > 0 ? (
            featuredProducts.map((product: any) => (
              <div key={product.id} className="rounded-[1.5rem] border border-[#e8f7df] bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(46,125,50,0.12)]">
                <ProductItem key={product.id} product={product} color="black" />
              </div>
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-[#cde8ba] bg-[#f7fdf4] py-12 text-center text-gray-700">
              <p>No computer products are available right now. Please check back soon.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
