"use client";
import { getSessionInfo } from "@/app/actions/auth/getSessionInfo";
import { userStore } from "@/utils/stores/userStore";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AuthProvider = ({ children }: { children: (Element | ReactNode)[] }) => {
  const { userInfo, token } = userStore();
  const router = useRouter();
  const pathname = usePathname();
  // console.log(userInfo._id);

  useEffect(() => {
    // async function 
    // TODO add token in cookie
    if (!token && pathname !== "/") {
      router.push("/");
    } else if (token && pathname === "/") {
      router.push("/pannel/dashboard");
    }
    getSessionInfo(userInfo._id);
    // if the token has expired then redirect
  }, [userInfo, pathname, router, token]);
  return <>{children}</>;
};

export default AuthProvider;
