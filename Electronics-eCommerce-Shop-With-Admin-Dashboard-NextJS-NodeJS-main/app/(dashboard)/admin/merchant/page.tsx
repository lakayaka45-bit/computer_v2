"use client";
import React, { useEffect, useState } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import Link from "next/link";
import apiClient from "@/lib/api";
import { toast } from "react-hot-toast";

interface Merchant {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  description: string | null;
  status: string;
  products: any[];
}

export default function MerchantPage() {
  const [merchants, setMerchants] = useState<Merchant[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMerchants = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/api/merchants");
      if (!response.ok) throw new Error("Failed to fetch merchants");
      const data = await response.json();
      setMerchants(data);
    } catch (error) {
      console.error("Error fetching merchants:", error);
      toast.error("Failed to load merchants");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMerchants();
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220_0%,#0f172a_100%)] text-white">
      <div className="flex max-w-screen-2xl mx-auto h-full max-xl:flex-col">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="rounded-[1.5rem] bg-[#0b1220]/60 border border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-semibold">Merchants</h1>
              <Link href="/admin/merchant/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Merchant</Link>
            </div>

            <div className="bg-transparent rounded p-2">
              {loading ? (
                <div className="text-center py-10">Loading merchants...</div>
              ) : merchants.length > 0 ? (
                <table className="table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Products</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {merchants.map((merchant) => (
                      <tr key={merchant.id}>
                        <td>{merchant.name}</td>
                        <td>{merchant.email || "-"}</td>
                        <td>{merchant.status}</td>
                        <td>{merchant.products?.length ?? 0}</td>
                        <td>
                          <Link href={`/admin/merchant/${merchant.id}`} className="mr-3 text-blue-400 hover:underline">View</Link>
                          <Link href={`/admin/merchant/${merchant.id}/edit`} className="text-blue-400 hover:underline">Edit</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-10">No merchants found</div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}