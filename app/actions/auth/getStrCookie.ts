"use server";
import { cookies } from "next/headers";

export async function getStrCookie({ name }: { name: string }) {
  return (await cookies()).get(name);
}
