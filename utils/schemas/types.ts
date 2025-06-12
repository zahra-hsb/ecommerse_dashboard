import { HTMLInputTypeAttribute, ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export interface SubmitButtonType {
  text: string;
  icon?: ReactNode;
}

export interface TextInputType {
  label?: string;
  id: "username" | "password";
  type: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  dir?: "ltr" | "rtl";
  icon?: ReactNode;
  name?: string;
  //   register: unknown;
  required: boolean;
  register: UseFormRegister<LoginFormType>;
}

export type Inputs = {
  id: string;
  required: string;
};

export interface LoginFormType {
  username: string;
  password: string;
}
