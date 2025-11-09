"use server";
import { dbConnect } from "@/lib/db";
import Product from "@/utils/models/Products";
// import { ProductsDataType } from "@/utils/schemas/types";

export async function getAllProductsServerAction({
  currentPage,
  totalProductsOnPage,
}: {
  currentPage: number;
  totalProductsOnPage: number;
}) {
  try {
    await dbConnect();
    const page = Math.max(1, currentPage ?? 1);
    const pageSize = Math.max(1, totalProductsOnPage ?? 2);
    const start = (page - 1) * pageSize;
    // const end = start + pageSize;

    const totalProducts = await Product?.countDocuments();

    const products = await Product.find().skip(start).limit(pageSize).exec();
    console.log({ products, total: totalProducts, page, pageSize });
    const returningData = JSON.stringify({
      data: {
        products,
        totalProducts,
        page,
        pageSize,
        totalPages: Math.ceil(totalProducts / pageSize),
      },
      message: "",
      ok: true,
    });
    return returningData;
  } catch (error) {
    console.error("Error while getting products => ", error);
    return JSON.stringify({
      ok: false,
      message: "Error while getting products => " + error,
      data: null,
    });
  }
}
