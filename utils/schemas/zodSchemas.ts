import { z } from "zod/v4";



const LoginSchema = z.object({
    username: z.string({ required_error: "نام کاربری الزامی است" }).regex(/^@.*$/i, "نام کاربری باید با @ شروع شود"),
    password: z.string({ required_error: "رمز عبور الزامی است" }).min(8, "رمز عبور باید حداقل 8 کارکتر داشته باشد"),
})




export { LoginSchema }