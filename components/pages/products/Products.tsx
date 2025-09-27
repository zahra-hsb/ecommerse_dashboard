"use client";
import Button from "@/components/globals/Button";
import Card from "@/components/globals/Card";
import { ProductsDataType } from "@/utils/schemas/types";
import { useRouter } from "next/navigation";

const Products = ({ productsProps }: { productsProps: ProductsDataType }) => {
  const router = useRouter();
  const productsList = productsProps?.products;
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
        <Card>
          {productsList?.map((pro) => (
            <ul key={pro._id}>{pro.title}</ul>
          ))}
        </Card>
      </section>
    </>
  );
};

export default Products;
