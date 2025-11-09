"use client";
import Button from "@/components/globals/Button";
import Card from "@/components/globals/Card";
import Pagination from "@/components/globals/Pagination";
// import { ProductsDataType } from "@/utils/schemas/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { getAllProductsServerAction } from "@/app/actions/product/getAllProductsServerAction";
import { ProductType } from "@/utils/schemas/types";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProductsOnPage, setTotalProductsOnPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [productsList, setProductsList] = useState<ProductType[]>([]);
  const router = useRouter();
  // const productsList = productsProps?.products;

  useEffect(() => {
    async function getAllProducts() {
      const productsData = await getAllProductsServerAction({
        currentPage,
        totalProductsOnPage,
      });
      const parsedProductsData = JSON.parse(productsData);
      console.log("parsedProductsData ", parsedProductsData);
      if (parsedProductsData.data) {
        setProductsList(parsedProductsData?.data.products);
        setTotalPages(parsedProductsData?.data?.totalPages);
        console.log(parsedProductsData?.data?.totalPages);
      } else setProductsList([]);
    }

    getAllProducts();
  }, [currentPage, totalProductsOnPage]);
  return (
    <>
      <section className="w-full flex flex-col gap-10">
        <Card className="!flex items-center !justify-between w-full">
          <h2 className="text-lg font-bold">محصولات</h2>
          <Button
            onClick={() => router.push("/panel/products/add")}
            className="!w-auto !mt-0"
          >
            افزودن محصول
          </Button>
        </Card>
        <Card className="">
          <ul>
            {productsList?.map((pro) => (
              <li key={pro._id}>{pro.title}</li>
            ))}
          </ul>
        </Card>
        <Card className="flex flex-row items-center justify-center gap-2">
          <Pagination
            onNextPage={(setDisable) => {
              console.log(currentPage, totalPages);
              setDisable(currentPage === totalPages ? true : false);
              console.log(
                currentPage,
                totalPages,
                currentPage === totalPages ? true : false
              );
              setCurrentPage((prev) => ++prev);
              setTotalProductsOnPage(5);
            }}
            nextPageIcon={<BiArrowBack />}
            onPrevPage={(setDisable) => {
              if (currentPage === 1) {
                setCurrentPage((prev) => prev - 1);
                setTotalProductsOnPage(5);
              } else {
                setDisable(true);
              }
            }}
            prevPageIcon={<BiArrowBack className={"rotate-180"} />}
          ></Pagination>
        </Card>
      </section>
    </>
  );
};

export default Products;
