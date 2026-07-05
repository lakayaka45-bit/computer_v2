// *********************
// Role of the component: Product table component on admin dashboard page
// Name of the component: DashboardProductTable.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <DashboardProductTable />
// Input parameters: no input parameters
// Output: products table
// *********************

"use client";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import toast from "react-hot-toast";
import apiClient from "@/lib/api";
import { sanitize } from "@/lib/sanitize";

const DashboardProductTable = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    apiClient.get("/api/products?mode=admin", {cache: "no-store"})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete product permanently? This cannot be undone.")) return;
    try {
      const res = await apiClient.delete(`/api/products/${id}`);
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        toast.error(err?.error || `Failed to delete product (${res.status})`);
        return;
      }
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Product deleted");
    } catch (error) {
      console.error(error);
      toast.error("Error deleting product");
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold text-white mb-5">Products</h1>
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-3">
          <Link href="/admin/products/new">
            <button className="rounded-full bg-[#86efac] px-4 py-2 text-sm font-semibold text-[#022c1a]">Create New Product</button>
          </Link>
          <button className="rounded-full bg-[#86efac]/20 px-4 py-2 text-sm font-semibold text-slate-200">Download sample template</button>
        </div>
        <div className="flex gap-3">
          <div className="rounded-md bg-[#0b1220] px-4 py-2 text-sm text-slate-300">Total Products: {products.length}</div>
        </div>
      </div>

      <div className="xl:ml-5 w-full max-xl:mt-5 overflow-auto w-full h-[70vh]">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product</th>
              <th>Stock Availability</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products &&
              products.map((product) => (
                <tr key={nanoid()} className="align-top">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            width={48}
                            height={48}
                            src={product?.mainImage ? `/${product?.mainImage}` : "/product_placeholder.jpg"}
                            alt={sanitize(product?.title) || "Product image"}
                            className="w-auto h-auto"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{sanitize(product?.title)}</div>
                        <div className="text-sm opacity-50">
                          {sanitize(product?.manufacturer)}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    { product?.inStock ? (<span className="badge badge-success text-white badge-sm">
                      In stock
                    </span>) : (<span className="badge badge-error text-white badge-sm">
                      Out of stock
                    </span>) }
                    
                  </td>
                  <td>${product?.price}</td>
                  <td className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/products/${product.id}`} className="btn btn-outline btn-success btn-sm">Edit</Link>
                      <button onClick={() => handleDelete(product.id)} className="btn btn-outline btn-error btn-sm">Delete</button>
                      <Link href={`/product/${product.slug || product.id}`} className="btn btn-outline btn-info btn-sm">View</Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Stock Availability</th>
              <th>Price</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default DashboardProductTable;
