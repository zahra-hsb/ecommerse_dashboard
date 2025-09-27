import { dbConnect } from "@/lib/db";
import Product from "@/utils/models/Products";
// import { ProductsDataType } from "@/utils/schemas/types";

export async function getAllProductsServerAction({
  currentPage,
  totalPostOnPage,
}: {
  currentPage: number;
  totalPostOnPage: number;
}) {
  try {
    await dbConnect();
    const page = Math.max(1, currentPage ?? 1);
    const pageSize = Math.max(1, totalPostOnPage ?? 2);
    const start = (page - 1) * pageSize;
    // const end = start + pageSize;

    const totalProducts = await Product.countDocuments();

    const products = await Product.find().skip(start).limit(pageSize).exec();
    console.log({ products, total: totalProducts, page, pageSize });
    const returningData = JSON.stringify({
      products,
      total: totalProducts,
      page,
      pageSize,
    });
    return returningData;
  } catch (error) {
    console.error("Error while getting products => ", error);
    return "";
  }
}
