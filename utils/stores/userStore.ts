import { create } from "zustand";
import { UserInfoType } from "../schemas/types";
import { persist } from "zustand/middleware";

export interface UserStoreType {
  userInfo: UserInfoType;
  setUserInfo: (userInfo: UserInfoType) => void;
  resetAll: () => void;
}

const userStore = create(
  persist<UserStoreType>(
    (set) => ({
      userInfo: {} as UserInfoType,
      setUserInfo: (userInfo: UserInfoType) => set({ userInfo: userInfo }),
      resetAll: () =>
        set({
          userInfo: {} as UserInfoType,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export { userStore };
