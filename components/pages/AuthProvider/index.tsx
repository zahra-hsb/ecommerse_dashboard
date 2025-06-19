"use client"
// import { getSessionInfo } from "@/app/actions/auth/getSessionInfo";
import { userStore } from "@/utils/stores/userStore";
import { ReactNode } from "react";

const AuthProvider = ({ children }: { children: (Element | ReactNode)[] }) => {
  const { userInfo } = userStore();
  console.log(userInfo)
//   getSessionInfo(userInfo._id);
  return <>{children}</>;
};

export default AuthProvider;
