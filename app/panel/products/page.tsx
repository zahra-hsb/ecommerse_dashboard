import { getAllProductsServerAction } from "@/app/actions/product/getAllProductsServerAction";
import Products from "@/components/pages/products/Products";

const productsPage = async () => {
  const productsData = await getAllProductsServerAction({
    currentPage: 1,
    totalPostOnPage: 2,
  });

  console.log("pros => ", typeof productsData)
  return (
    <>
      <Products productsProps={JSON.parse(productsData)} />
    </>
  );
};

export default productsPage;
