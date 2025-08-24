import { HTMLInputTypeAttribute, ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export type ProIdType = { id: "add" | string };

export interface SubmitButtonType {
  text: string;
  icon?: ReactNode;
}

export interface UserInfoType {
  _id: string;
  username: string;
  email: string;
  fName: string;
  lNamr: string;
  tel: string;
}

export interface TextInputType {
  label?: string;
  id: "username" | "password" | "title" | "price" | "count" | "description";
  type: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  dir?: "ltr" | "rtl";
  icon?: ReactNode;
  name?: string;
  //   register: unknown;
  required: boolean;
  register: UseFormRegister<ProductType> | UseFormRegister<LoginFormType>;
}

export type Inputs = {
  id: string;
  required: string;
};

export interface LoginFormType {
  username: string;
  password: string;
}

export interface ProductType {
  _id?: string;
  title: string;
  description: string;
  mainImage?: string;
  category?: string;
  properties?: {
    [key: string]: unknown;
  };
  count: number;
  price: number;
  createdAt: Date;
  userId: string;
}
