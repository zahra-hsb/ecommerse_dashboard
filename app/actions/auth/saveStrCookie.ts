"use server";
import { cookies } from "next/headers";

export async function saveStrCookie({
  str,
  isHttpOnly,
  name,
  isSecure,
  sameSite,
  path,
  maxAge,
}: {
  str: string;
  isHttpOnly: boolean;
  name: string;
  isSecure: boolean;
  sameSite: boolean | "lax" | "strict" | "none" | undefined;
  path: string;
  maxAge: number;
}) {
  (await cookies()).set({
    name,
    value: str,
    httpOnly: isHttpOnly,
    secure: isSecure,
    sameSite,
    path,
    maxAge,
  });
}
