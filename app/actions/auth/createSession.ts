"use server";
import { dbConnect } from "@/lib/db";
import Session from "@/utils/models/Sessions";
import { getDeviceInfo } from "../device/getDeviceInfo";
import { sign } from "../jwt/jwt";
import { encryptString } from "./encryptString";
import { saveStrCookie } from "./saveStrCookie";
// import User from "@/utils/models/Users";

export async function createSession(payload: {
  _id: string;
  username: string;
  email: string;
}) {
  try {
    const now = Date.now();
    console.log("now => ", now);
    const session = await Session.find({ user_id: payload._id });
    const foundSession = session.find(
      (s) => new Date(s.expires_at) > new Date(now)
    );
    console.log("found => ", foundSession);
    if (!foundSession) {
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
      await saveStrCookie({
        name: "auth-token",
        str: encryptedJWT ? encryptedJWT.toString() : jwt,
        isHttpOnly: true,
        isSecure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 1000,
      });
      return {
        ok: true,
        status: 200,
        message: "شما با موفقیت وارد شدید",
        data: {
          id: payload._id,
          username: payload.username,
          email: payload.email,
          token: encryptedJWT ? encryptedJWT?.toString() : "",
        },
      };
    } else {
      await saveStrCookie({
        name: "auth-token",
        str: foundSession.jwt.toString(),
        isHttpOnly: true,
        isSecure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 1000,
      });
      return {
        ok: true,
        status: 200,
        message: "شما با موفقیت وارد شدید",
        data: {
          id: payload._id,
          username: payload.username,
          email: payload.email,
          token: foundSession.jwt?.toString(),
        },
      };
    }
  } catch (err) {
    console.log("error while create session ", err);
    return {
      ok: false,
      status: 400,
      data: {},
      message: "حطایی در ورود به پنل رخ داد",
    };
  }
}
