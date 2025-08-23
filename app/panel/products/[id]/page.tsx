import Card from "@/components/globals/Card";
import ProductForm from "@/components/pages/products/ProductForm";
import { ProIdType } from "@/utils/schemas/types";

const productSlug = async ({ params }: { params: ProIdType }) => {
  const awaitedParams = await params;

  return (
    <section className="flex flex-col gap-10">
      <Card>
        {awaitedParams.id === "add" ? "افزودن محصول" : "ویرایش محصول"}
      </Card>
      <Card>
        <ProductForm id={awaitedParams.id} />
      </Card>
    </section>
  );
};

export default productSlug;
