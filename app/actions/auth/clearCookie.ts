"use server"
import { cookies } from "next/headers";

export async function clearCookie(cookieName: string) {
  try {
    const mycookie = await cookies();
    mycookie.delete(cookieName);
  } catch (error) {
    console.log(error);
  }
}
