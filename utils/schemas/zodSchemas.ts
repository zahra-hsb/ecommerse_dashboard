import { z } from "zod/v4";

const LoginSchema = z.object({
  username: z.string().nonempty("نام کاربری الزامی است"),
  // .regex(/^@.*$/i, "نام کاربری باید با @ شروع شود"),
  password: z
    .string()
    .min(8, "رمز عبور باید حداقل 8 کارکتر داشته باشد")
    .refine((value) => value !== "", {
      message: "رمز عبور الزامی است",
    }),
});

const ProductSchema = z.object({
  title: z.string().nonempty("وارد کردن عنوان محصول الزامی است"),
  description: z.string().nonempty("وارد کردن توضیحات محصول الزامی است")
});

export { LoginSchema, ProductSchema };
