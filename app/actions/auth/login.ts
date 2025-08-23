"use server";
import { dbConnect } from "@/lib/db";
import User from "@/utils/models/Users";
import { LoginFormType } from "@/utils/schemas/types";

export async function login(props: LoginFormType) {
  try {
    await dbConnect();
    // const res = await fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(props),
    // });
    // console.log("res of login => ", await res.json())

    

    const foundUser = await User.findOne({ username: props.username });
    // TODO add JWT
    if (foundUser && props.password === foundUser.password) {
      return {
        ok: true,
        status: 200,
        message: "شما با موفقیت وارد شدید",
        data: JSON.stringify(foundUser),
      };
    } else if (foundUser && props.password !== foundUser.password) {
      return {
        ok: false,
        status: 403,
        message: "رمز عبور اشتباه است",
      };
    } else {
      return {
        ok: false,
        status: 403,
        message: "کاربری با این نام کاربری پیدا نشد",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      status: 404,
      message: "کاربری با این نام کاربری پیدا نشد",
    };
  }
}
