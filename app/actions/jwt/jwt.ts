import { JWTPayload, jwtVerify, SignJWT } from "jose";

const secret_key = process.env.SESSION_SECRET;
const key = new TextEncoder().encode(secret_key);

export async function sign(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}


export async function verify(token: string) {
    try {
      const { payload } = await jwtVerify(token, key, {
        algorithms: ["HS256"],
      })
      return payload
    } catch (error) {
      console.log("Invalid token ", error)
    }
  }
  