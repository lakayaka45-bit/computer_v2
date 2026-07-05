import { NextResponse } from "next/server";
import prisma from "@/utils/db";

export async function GET() {
  try {
    const [products, orders, users, categories, uploads] = await Promise.all([
      prisma.product.count(),
      prisma.customer_order.count(),
      prisma.user.count(),
      prisma.category.count(),
      prisma.bulk_upload_batch.count(),
    ]);

    return NextResponse.json({
      products,
      orders,
      users,
      categories,
      uploads,
    });
  } catch (error) {
    console.error("Admin overview fetch failed", error);
    return NextResponse.json(
      { error: "Unable to load overview" },
      { status: 500 }
    );
  }
}
