"use server";
import { dbConnect } from "@/lib/db";
import Product from "@/utils/models/Products";
import { ProductType } from "@/utils/schemas/types";
import { getStrCookie } from "../auth/getStrCookie";
import Session from "@/utils/models/Sessions";

export async function addProductServerAction(values: ProductType) {
  try {
    await dbConnect();
    const token = await getStrCookie({ name: "auth-token" });
    const session = await Session.findOne({ user_id: values.userId });
    console.log(session);
    if (token?.value && session) {
      if (token?.value.toString() === session?.jwt) {
        const foundProduct = await Product.findOne({ title: values.title });
        if (foundProduct) {
          return {
            ok: false,
            status: 400,
            message: "محصولی که میخواهید درج کنید از قبل وجود دارد",
            data: null,
          };
        } else {
          // console.log("pro => ", values);
          const newProduct = await Product.insertOne({ ...values });

          // console.log("pro here => ", newProduct);
          return {
            ok: true,
            status: 200,
            message: "محصول شما با موفقیت افزوده شد",
            data: JSON.stringify(newProduct),
          };
        }
      } else {
        return {
          ok: false,
          status: 403,
          message: "برای افزودن محصول باید وارد شوید",
          data: null,
        };
      }
    } else {
      return {
        ok: false,
        status: 403,
        message: "برای افزودن محصول باید وارد شوید",
        data: null,
      };
    }
    // newProduct.save();
    // console.log("added => ", addedProductResponse)
  } catch (error) {
    console.log("Error while creating products => ", error);
    return {
      ok: false,
      status: 500,
      message: "خطا در افزودن محصول",
      data: null,
    };
  }
}
