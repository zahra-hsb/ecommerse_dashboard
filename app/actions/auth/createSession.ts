"use server";
import { dbConnect } from "@/lib/db";
import Session from "@/utils/models/Sessions";
import { getDeviceInfo } from "../device/getDeviceInfo";
import { sign } from "../jwt/jwt";
import { cookies } from "next/headers";
import { encryptString } from "./encryptString";

export async function createSession(payload: {
  _id: string;
  username: string;
  email: string;
}) {
  try {
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const userAgent = await getDeviceInfo();
    const jwt = await sign({
      _id: payload._id,
      username: payload.username,
      email: payload.email,
    });

    const encryptedJWT = await encryptString(jwt, "jwt");

    await dbConnect();
    await Session.insertOne({
      user_id: payload._id,
      expires_at: expiresAt,
      session_time: Date.now(),
      device_info: userAgent,
      // jwt,
      jwt: encryptedJWT,
    });

    (await cookies()).set({
      name: "auth-token",
      value: encryptedJWT ? encryptedJWT.toString() : jwt, // encrypt
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 1000, // 1 day
    });
    return {
      ok: true,
      status: 200,
      message: "شما با موفقیت وارد شدید",
      data: {
        id: payload._id,
        username: payload.username,
        email: payload.email,
      },
    };
  } catch (err) {
    console.log("error while create session ", err);
    return {
      ok: false,
      status: 400,
      message: "حطایی در ورود به پنل رخ داد",
    };
  }
}
