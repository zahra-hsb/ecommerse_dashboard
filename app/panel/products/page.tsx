import { getAllProductsServerAction } from "@/app/actions/product/getAllProductsServerAction";
import Products from "@/components/pages/products/Products";

const productsPage = async () => {
  const productsData = await getAllProductsServerAction({
    currentPage: 1,
    totalProductsOnPage: 2
  });

  console.log("pros => ", JSON.parse(productsData));
  return (
    <>
      <Products />
    </>
  );
};

export default productsPage;
