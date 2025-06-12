
import { z } from "zod/v4";



const LoginSchema = z.object({
    username: z.string().nonempty("نام کاربری الزامی است").regex(/^@.*$/i, "نام کاربری باید با @ شروع شود"),
    password: z.string().min(8, "رمز عبور باید حداقل 8 کارکتر داشته باشد").refine(value => value !== "", {
        message: "رمز عبور الزامی است",
    }),
})




export { LoginSchema }