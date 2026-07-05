// *********************
// Role of the component: Product item component 
// Name of the component: ProductItem.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductItem product={product} color={color} />
// Input parameters: { product: Product; color: string; }
// Output: Product item component that contains product image, title, link to the single product page, price, button...
// *********************

import Image from "next/image";
import React from "react";
import Link from "next/link";

import { sanitize } from "@/lib/sanitize";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <Link href={`/product/${product.slug}`} className="w-full rounded-2xl bg-[#f7fdf4] p-3">
        <Image
          src={
            product.mainImage
              ? product.mainImage.startsWith("http") || product.mainImage.startsWith("/")
                ? product.mainImage
                : `/${product.mainImage}`
              : "/images/hero-computer.svg"
          }
          width="0"
          height="0"
          sizes="100vw"
          className="h-[220px] w-full rounded-xl object-cover"
          alt={sanitize(product?.title) || "Product image"}
        />
      </Link>
      <Link
        href={`/product/${product.slug}`}
        className={
          color === "black"
            ? `text-lg text-black font-semibold mt-2 uppercase text-center`
            : `text-lg text-black font-semibold mt-2 uppercase text-center`
        }
      >
        {sanitize(product.title)}
      </Link>
      <p
        className={
          color === "black"
            ? "text-base text-[#2e7d32] font-semibold"
            : "text-base text-[#2e7d32] font-semibold"
        }
      >
        ${product.price}
      </p>

  
      <Link
        href={`/product/${product?.slug}`}
        className="mt-2 flex w-full items-center justify-center rounded-full border border-[#2e7d32] bg-[#f7fdf4] px-3 py-2 text-sm font-semibold uppercase text-[#2e7d32] shadow-sm transition hover:bg-[#2e7d32] hover:text-white"
      >
        <p>View product</p>
      </Link>
    </div>
  );
};

export default ProductItem;
