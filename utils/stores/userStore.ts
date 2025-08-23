import { create } from "zustand";
import { UserInfoType } from "../schemas/types";
import { persist } from "zustand/middleware";

export interface UserStoreType {
  userInfo: UserInfoType;
  setUserInfo: (userInfo: UserInfoType) => void;

  token: string;
  setToken: (token: string) => void;

  resetAll: () => void;
}

const userStore = create(
  persist<UserStoreType>(
    (set) => ({
      userInfo: {} as UserInfoType,
      setUserInfo: (userInfo) => set({ userInfo: userInfo }),
      resetAll: () =>
        set({
          userInfo: {} as UserInfoType,
          token: "",
        }),
      token: "",
      setToken: (token) => set({ token }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export { userStore };
