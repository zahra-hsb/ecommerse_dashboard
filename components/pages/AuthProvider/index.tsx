"use client"
// import { getSessionInfo } from "@/app/actions/auth/getSessionInfo";
import { userStore } from "@/utils/stores/userStore";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AuthProvider = ({ children }: { children: (Element | ReactNode)[] }) => {
  const { userInfo } = userStore();
  const router = useRouter()
  const pathname = usePathname()
  console.log(userInfo._id)

  useEffect(() => {
    if(userInfo._id === undefined) {
      router.push('/')
    } else {
      router.push('/dashboard')
    }
    // getSessionInfo(userInfo._id);
  }, [userInfo, pathname, router])
  return <>{children}</>;
};

export default AuthProvider;
