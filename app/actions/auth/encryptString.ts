import bcrypt from "bcryptjs";

export async function encryptString(str: string, length: number) {
  try {
    return await bcrypt.hash(str, length);
  } catch (error) {
    console.log("Error while encrypt string!!!", error);
  }
}
