"use server"
import CryptoJS from "crypto-js"

export async function encryptString(str: string, key: string) {
  try {
    return await CryptoJS.AES.encrypt(str, key)
  } catch (error) {
    console.log("Error while encrypt string!!!", error);
  }
}
