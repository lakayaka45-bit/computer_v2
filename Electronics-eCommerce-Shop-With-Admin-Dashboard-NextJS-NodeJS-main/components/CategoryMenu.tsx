// *********************
// Role of the component: Category wrapper that will contain title and category items
// Name of the component: CategoryMenu.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <CategoryMenu />
// Input parameters: no input parameters
// Output: section title and category items
// *********************

import React from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { computerCategoryMenuList } from "@/lib/utils";
import Heading from "./Heading";

const CategoryMenu = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">Browse categories</p>
          <Heading title="Shop the right gear for every build" />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {computerCategoryMenuList.map((item) => (
            <CategoryItem title={item.title} key={item.id} href={item.href}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
                <Image src={item.src} width={40} height={40} alt={item.title} />
              </div>
            </CategoryItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryMenu;
