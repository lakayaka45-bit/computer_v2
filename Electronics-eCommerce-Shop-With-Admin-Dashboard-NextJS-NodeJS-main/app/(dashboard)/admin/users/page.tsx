"use client";
import { CustomButton, DashboardSidebar } from "@/components";
import apiClient from "@/lib/api";
import { nanoid } from "nanoid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DashboardUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    apiClient.get("/api/users").then((res) => res.json()).then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220_0%,#0f172a_100%)] text-white">
      <div className="flex max-w-screen-2xl mx-auto h-full max-xl:flex-col">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="rounded-[1.5rem] bg-[#0b1220]/60 border border-white/10 p-6">
            <h1 className="text-3xl font-semibold mb-5">All users</h1>
            <div className="flex justify-end mb-5">
              <Link href="/admin/users/new">
                <CustomButton buttonType="button" customWidth="110px" paddingX={10} paddingY={5} textSize="base" text="Add new user" />
              </Link>
            </div>

            <div className="xl:ml-5 w-full max-xl:mt-5 overflow-auto w-full h-[70vh]">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users && users.length > 0 && users.map((user) => (
                    <tr key={nanoid()}>
                      <th></th>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td className="text-right"><Link href={`admin/users/${user.id}`} className="btn btn-outline btn-sm">Details</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardUsers;
