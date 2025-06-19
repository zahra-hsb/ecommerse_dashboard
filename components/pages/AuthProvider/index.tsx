"use client"
// import { getSessionInfo } from "@/app/actions/auth/getSessionInfo";
import { userStore } from "@/utils/stores/userStore";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AuthProvider = ({ children }: { children: (Element | ReactNode)[] }) => {
  const { userInfo } = userStore();
  const router = useRouter()
  const pathname = usePathname()
  console.log(userInfo)

  useEffect(() => {
    if(!userInfo && pathname !== "/") {
      router.push('/')
    } else {
      router.push('/dashboard')
    }
  }, [userInfo, pathname, router])
//   getSessionInfo(userInfo._id);
  return <>{children}</>;
};

export default AuthProvider;
