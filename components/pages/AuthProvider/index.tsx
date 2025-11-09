"use client";
import { getSessionInfo } from "@/app/actions/auth/getSessionInfo";
// import { getStrCookie } from "@/app/actions/auth/getStrCookie";
// import { saveStrCookie } from "@/app/actions/auth/saveStrCookie";
import { userStore } from "@/utils/stores/userStore";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AuthProvider = ({ children }: { children: (Element | ReactNode)[] }) => {
  const { userInfo, token } = userStore();
  const router = useRouter();
  const pathname = usePathname();
  // console.log(userInfo._id);

  useEffect(() => {
    // TODO add token in cookie
    // async function checkCookie() {
    //   const cookieToken = await getStrCookie({ name: "auth-token" });
    //   console.log("cookieToken", cookieToken ? true : false);
    //   if (token) {
    //     return;
    //   } else {
    //     await saveStrCookie({
    //       name: "auth-token",
    //       str: token.toString(),
    //       isHttpOnly: true,
    //       isSecure: process.env.NODE_ENV === "production",
    //       sameSite: "strict",
    //       path: "/",
    //       maxAge: 60 * 60 * 24 * 1000,
    //     });
    //   }
    // }
    // checkCookie();
    // if (!token && pathname !== "/") {
    //   router.push("/");
    // } else if (token && pathname === "/") {
    //   router.push("/panel/dashboard");
    // }
    getSessionInfo(userInfo._id);
    // if the token has expired then redirect
  }, [userInfo, pathname, router, token]);
  return <>{children}</>;
};

export default AuthProvider;
