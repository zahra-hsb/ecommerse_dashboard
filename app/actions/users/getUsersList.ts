"use server";

import { dbConnect } from "@/lib/db";
import User from "@/utils/models/Users";

export async function getUsersList() {
  try {
    await dbConnect();
    const users = await User.find()
    console.log("users => ", users)
  } catch (err) {
    console.log(err);
  }
}
