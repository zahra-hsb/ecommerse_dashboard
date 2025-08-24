"use client";
import { addProductServerAction } from "@/app/actions/product/addProductServerAction";
import SubmitButton from "@/components/globals/SubmitButton";
import TextInput from "@/components/globals/TextInput";
import { ProductType, ProIdType } from "@/utils/schemas/types";
import { userStore } from "@/utils/stores/userStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProductForm = ({ id }: ProIdType) => {
  const { register, handleSubmit } = useForm<ProductType>();
  const { userInfo } = userStore();
  const userId = userInfo._id;
  const router = useRouter();
  const today = new Date();
  const onSubmit = async (value: ProductType) => {
    if (id === "add") {
      const addedProduct = await addProductServerAction({
        ...value,
        createdAt: today,
        userId,
      });
      if (addedProduct.ok) {
        router.back();
        toast.success(addedProduct.message);
      } else if (addedProduct.status === 403) {
        toast.error(addedProduct.message);
      } else toast.error(addedProduct.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-5"}>
      <TextInput
        required
        type="text"
        label="عنوان محصول"
        register={register}
        className="p-3 px-5"
        id="title"
        placeholder="عنوان محصول را اینجا وارد کنید..."
      />
      <div className="flex gap-5">
        <TextInput
          required
          type="number"
          label="قیمت محصول"
          register={register}
          className="p-3 px-5"
          id="price"
          placeholder="قیمت"
        />
        <TextInput
          required
          type="number"
          label="موجودی"
          register={register}
          className="p-3 px-5"
          id="count"
          placeholder="موجودی"
        />
      </div>
      <textarea
        {...register("description")}
        placeholder="توضیحات محصول خود را اینجا وارد کنید..."
        className="p-3 px-5 rounded-xl bg-[#d9d9d95b] outline-0 focus:shadow-lg w-full shadow-sm"
        rows={15}
      />
      <SubmitButton text="ثبت محصول" />
    </form>
  );
};

export default ProductForm;
